const Local= require('./local');
const math = require('mathjs');
const PaquetesLocalPosterior=require('./paquetesLocalPosterior');
const PaquetesLocalSuperior=require('./paquetesLocalSuperior');
const PaquetesMismoLocal=require('./paquetesMismoLocal');

function MatrizLocales(centrosAgregar,limitesColasDeEspera){
    this.locales=[]
    this.crearLocales(centrosAgregar,limitesColasDeEspera);
    this.cantidadColumnas=this.locales[0].centros.length-1;  
    
    if (this.cantidadColumnas<limitesColasDeEspera.length) {
        throw new Error("no se puede crear la matriz porque los centros son menos que la cantidad de locales");
    }






    this.avanzarTiempo= function(){
        var paquetesDeLocalesProcesados=new Array(this.locales.length);
        this.generarMatrizPaquetes(paquetesDeLocalesProcesados);
        this.procesarPaquetesDelDestino(paquetesDeLocalesProcesados);
        this.analizarMovimientos(paquetesDeLocalesProcesados);
        this.encolarYProcesar(paquetesDeLocalesProcesados);
        this.encolarNoProcesados(paquetesDeLocalesProcesados); 
    }

    this.agregarPaquetes= function(paquetesAgregar,localNombre){
        var local=(this.locales).find(elemento => elemento.nombre==localNombre);
        local.agregarPaquetes(paquetesAgregar);
    }

    this.generarMatrizPaquetes= function(paquetesDeLocalesProcesados) {
        var numeroLocal=0;
        var paquetesAux;
        this.locales.forEach(local => {
            paquetesAux=local.obtenerPaquetesProcesados();
            paquetesDeLocalesProcesados[numeroLocal]=paquetesAux;   
            numeroLocal++;
        });
    }

    this.procesarPaquetesDelDestino= function(paquetesDeLocalesProcesados) {
        var fila=0;
        var paquetesDelDestino=[];
        var paquetesAProcesar;
        this.locales.forEach(local => {
            paquetesDelDestino=[];
            paquetesAProcesar=[];
            paquetesAProcesar=paquetesDeLocalesProcesados[fila][this.cantidadColumnas-1];
            if (paquetesAProcesar!=0){
                paquetesAProcesar.forEach(elemento => {   
                    paquetesDelDestino.push(elemento);
                });
                paquetesDeLocalesProcesados[fila][this.cantidadColumnas-1]=[];
                local.procesarPaquetesDestino(this.cantidadColumnas,paquetesDelDestino);
            }
            fila++;
        });
    }


    this.analizarMovimientos= function(paquetesDeLocalesProcesados) {
        var columna;
        paquetesDeLocalesProcesados.forEach(filaPaquetes=> {
            columna=this.cantidadColumnas-1;
            filaPaquetes.forEach(paquetes=>{
                this.actualizarMovimientos(paquetes,columna);
                columna--;
            })
        })
    }
    
    this.encolarYProcesar= function(paquetesDeLocalesProcesados) {
        var paquetesFilas= [new PaquetesLocalSuperior(),new PaquetesMismoLocal(),new PaquetesLocalPosterior()];
        var columna=this.cantidadColumnas-1;
        while (columna>0) {
            fila=0;
            this.locales.forEach(local => { 
                this.actualizarPaquetesEnFuncionDeFila(paquetesFilas,fila,columna,paquetesDeLocalesProcesados);
                this.encolarPaquetesPermitidosSegunFila(paquetesFilas,paquetesDeLocalesProcesados,local);
                local.procesarPaquetesCentro(columna);
                fila++;
            });
            columna--;
        }
    }

    this.encolarNoProcesados= function(paquetesDeLocalesProcesados) {
        paquetesDeLocalesProcesados.forEach(filaPaquetes=> {
            filaPaquetes.forEach(paquetes=>{
                if (paquetes!=0) {
                    paquetes.forEach(paquete=> {
                        this.locales[paquete.fila-1].centros[this.cantidadColumnas-paquete.columnasQueQuedan-1].colaSalida.push(paquete);
                    });
                }
            })
        })
    }

    this.encolarPaquetesPermitidos= function(paquetesDeLocalesProcesados,paquetesAProcesar,local) {
        var paquetesQueSePuedenProcesar;
        var noProcesados=[];
        var noEntraron;
        if (paquetesAProcesar.paquetes!=0 && local.centros[paquetesAProcesar.columna].espacioEnCola()>0) { 
            paquetesQueSePuedenProcesar=this.procesarSegunMovimientoPermitido(paquetesAProcesar,noProcesados);
            noEntraron=local.centros[paquetesAProcesar.columna].agregarACola(paquetesQueSePuedenProcesar);
            noEntraron.forEach(paquete=> noProcesados.push(paquete));
            if (noProcesados.length==0) {
                noProcesados=0;
            }
            paquetesDeLocalesProcesados[paquetesAProcesar.fila+paquetesAProcesar.limite][paquetesAProcesar.columna-1]=noProcesados;
        }
    }

    this.crearLocales = function(centrosAgregar, limitesColasDeEspera) {
        limitesColasDeEspera.forEach(limiteCola=> {
            this.locales.push(new Local(centrosAgregar,limiteCola));
        });  
    }

    this.actualizarMovimientos = function (paquetes,columna) {
        if (paquetes!=0) {
            paquetes.forEach(paquete=> {
                paquete.filasAMoverse=(paquete.destino-(paquete.fila));
                paquete.columnasQueQuedan=columna;
                paquete.actualizarSubirOBajar();
                paquete.filasAMoverse=math.abs(paquete.filasAMoverse);
                paquete.aCualMoverme();
            });
        }
    }

    this.actualizarPaquetesEnFuncionDeFila = function(paquetesFilas,fila,columna,paquetesDeLocalesProcesados) {
        paquetesFilas[0].cambiarPaquetes(0);
        paquetesFilas[2].cambiarPaquetes(0);
        paquetesFilas[1].cambiarPaquetes(paquetesDeLocalesProcesados[fila][columna-1]);
        if ((fila-1)>=0){   
            paquetesFilas[0].cambiarPaquetes(paquetesDeLocalesProcesados[fila-1][columna-1]);
        }
        if ((fila+1)<this.locales.length) {
            paquetesFilas[2].cambiarPaquetes(paquetesDeLocalesProcesados[fila+1][columna-1]);
        }
        this.actualizarFilaColumna(paquetesFilas,fila,columna);
    }
    
    this.actualizarFilaColumna = function (paquetesFilas,fila,columna) {
        paquetesFilas[1].actualizarFilaColumna(fila,columna);
        paquetesFilas[2].actualizarFilaColumna(fila,columna);
        paquetesFilas[0].actualizarFilaColumna(fila,columna);
    }

    this.encolarPaquetesPermitidosSegunFila = function(paquetesFilas,paquetesDeLocalesProcesados,local) {
        this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesFilas[1],local);
        this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesFilas[0],local);
        this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesFilas[2],local);
    }

    this.procesarSegunMovimientoPermitido = function (paquetesAProcesar,noProcesados) {
        var paquetesQueSePuedenProcesar=[];
        paquetesAProcesar.paquetes.forEach(paquete=> {
            if (paquetesAProcesar.limites(paquete)) {
                paquete.fila=paquetesAProcesar.fila+1;
                paquetesQueSePuedenProcesar.push(paquete);
            } else {
                noProcesados.push(paquete);
            }
        });
        return paquetesQueSePuedenProcesar;
    }

}

module.exports= MatrizLocales;

