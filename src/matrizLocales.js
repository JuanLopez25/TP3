const Local= require('./local');
const math = require('mathjs');
const PaquetesLocalPosterior=require('./paquetesLocalPosterior');
const PaquetesLocalSuperior=require('./paquetesLocalSuperior');
const PaquetesMismoLocal=require('./paquetesMismoLocal');


function MatrizLocales(centrosAgregar,limitesColasDeEspera){
    this.locales=[]

    limitesColasDeEspera.forEach(limiteCola=> {
        this.locales.push(new Local(centrosAgregar,limiteCola));
    });  

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
            if (paquetesAProcesar!=0){ //se puede aplicar null object¿?
                paquetesAProcesar.forEach(elemento => {   
                    paquetesDelDestino.push(elemento);
                });
                paquetesDeLocalesProcesados[fila][this.cantidadColumnas-1]=[];
                local.centros[this.cantidadColumnas].procesarPaquetes(paquetesDelDestino);
            }
            fila++;
        });
    }


    this.analizarMovimientos= function(paquetesDeLocalesProcesados) {
        var columna;
        var filasAMoverse;
        var subirOBajar;
        var fila=1;

        paquetesDeLocalesProcesados.forEach(filaPaquetes=> {
            columna=this.cantidadColumnas;
            //Se puede hacer que los paquetes contenga su fila y columna en la que estan entonces no necesitamos muchas de estas variables.
            filaPaquetes.forEach(paquetes=>{
                if (paquetes!=0) {
                    paquetes.forEach(paquete=> {
                        filasAMoverse=(paquete.destino-(fila));
                        
                        if (filasAMoverse<0) {   //no me gusta el "if" pero no puedo sacarlo
                            subirOBajar=1;
                        } else if (filasAMoverse>0) {
                            subirOBajar=-1;
                        } else {
                            subirOBajar=0;
                        }
                        filasAMoverse=math.abs(filasAMoverse);
                        
                        this.aCualMoverme(paquete,filasAMoverse,fila,columna,subirOBajar);  //muchos parametros.
                        
                    });
                }
                columna--;
            })
            fila++;
        })
    }

    this.aCualMoverme = function(paquete,filasAMoverse,fila,columna,subirOBajar) {

        if(filasAMoverse<(columna-1)) {
            if(filasAMoverse==columna-2) {
               if(paquete.destino-(fila) == 0) {
                    paquete.sePuedeMover=0;
               }else if (paquete.destino-(fila)>0) {
                    paquete.sePuedeMover=-2;
               } else {
                    paquete.sePuedeMover=2;
               }
            } else {
                paquete.sePuedeMover=4; 
            }
        } else {
            if (subirOBajar==1) {
                paquete.sePuedeMover=1;
            } else if (subirOBajar==-1) {
                
                paquete.sePuedeMover=-1;
            } else {
                paquete.sePuedeMover=0;
            }
        }
    }

    this.encolarYProcesar= function(paquetesDeLocalesProcesados) {
        var paquetesAProcesarMismoLocal= new PaquetesMismoLocal();
        var paquetesLocalSuperior=new PaquetesLocalSuperior();
        var paquetesLocalPosterior= new PaquetesLocalPosterior();
        var columna=this.cantidadColumnas-1;
    
        while (columna>0) {
            fila=0;
            this.locales.forEach(local => { 
                paquetesLocalSuperior.cambiarPaquetes(0);
                paquetesLocalPosterior.cambiarPaquetes(0);
                paquetesAProcesarMismoLocal.cambiarPaquetes(paquetesDeLocalesProcesados[fila][columna-1]);

                if ((fila-1)>=0){   
                    paquetesLocalSuperior.cambiarPaquetes(paquetesDeLocalesProcesados[fila-1][columna-1]);
                }
                if ((fila+1)<this.locales.length) {
                    paquetesLocalPosterior.cambiarPaquetes(paquetesDeLocalesProcesados[fila+1][columna-1]);
                }

                this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesAProcesarMismoLocal,local,fila,columna);
                this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesLocalSuperior,local,fila,columna);
                this.encolarPaquetesPermitidos(paquetesDeLocalesProcesados,paquetesLocalPosterior,local,fila,columna);
                local.centros[columna].procesarPaquetes();
                fila++;
            });
            columna--;
        }
    }

    this.encolarNoProcesados= function(paquetesDeLocalesProcesados) {
        var fila=0;
        var columna;
        paquetesDeLocalesProcesados.forEach(filaPaquetes=> {
            columna=0;
            filaPaquetes.forEach(paquetes=>{
                if (paquetes!=0) {
                    paquetes.forEach(paquete=> {
                        this.locales[fila].centros[columna].colaSalida.push(paquete);
                    });
                }
                columna++;
            })
            fila++;
        })
    }

    this.encolarPaquetesPermitidos= function(paquetesDeLocalesProcesados,paquetesAProcesar,local,fila,columna) {
        var paquetesQueSePuedenProcesar=[];
        var noProcesados=[];
        var noEntraron;
        if (paquetesAProcesar.paquetes!=0 && local.centros[columna].espacioEnCola()>0) { 
            paquetesAProcesar.paquetes.forEach(paquete=> {
                if (paquetesAProcesar.limites(paquete)) {
                    paquetesQueSePuedenProcesar.push(paquete);
                } else {
                    noProcesados.push(paquete);
                }
            });
            noEntraron=local.centros[columna].agregarACola(paquetesQueSePuedenProcesar);
            noEntraron.forEach(paquete=> noProcesados.push(paquete));
            if (noProcesados.length==0) {
                noProcesados=0;
            }
            paquetesDeLocalesProcesados[fila+paquetesAProcesar.limite][columna-1]=noProcesados;
        }
    }
}

module.exports= MatrizLocales;

