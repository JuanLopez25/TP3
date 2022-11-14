const Local= require('./local');
const Paquete=require('./paquete')
const math = require('mathjs');

function MatrizLocales(localesAgregar,centros,limitesColasDeEspera){
    var contador=0;
    this.locales=[]
    this.cantidadCentros=centros.length+1;
    while(contador<localesAgregar){  
        this.locales.push(new Local(centros,limitesColasDeEspera[contador]));
        contador+=1;
    }
    
    this.agregarPaquetes= function(paquetesAgregar,localNombre){
        var local=(this.locales).find(elemento => elemento.nombre==localNombre);
        local.agregarPaquetes(paquetesAgregar);
    }

    this.avanzarTiempo= function(){


        var paquetesAux;
        var numeroLocal=0;
        var paquetesDeLocales= new Array(this.locales.length);
        var columna=this.cantidadCentros;
        var fila=0;
        var paquetesAProcesarMismoLocal;
        var paquetesLocalSuperior;
        var paquetesLocalPosterior;
        var noProcesados;
        var l=0;
        var cantidadQuePuedoProcesar=0;
        var paquetesQueDePuedenProcesar=[];
        var paquetesDeLocalesProcesar=new Array(this.locales.length);
         //Si vale 1, da igual a donde va. Si vale 0 tiene que bajar, y si vale 2 tiene que subir.
            
        this.locales.forEach(local => {
            paquetesAux=local.proceso();
            paquetesDeLocales[numeroLocal]=paquetesAux;   
            numeroLocal++;
        });

        
        fila=0;
        var paquetesDelDestino=[];
        this.locales.forEach(local => {
            paquetesAProcesar=paquetesDeLocales[fila][columna-1]; //en el ultimo columna-1
            if (paquetesAProcesar!=0){
                paquetesAProcesar.forEach(elemento => {   //CUIDADO QUE ESTO ME LLEVO TIEMPO, PERO LO HABIA HECHO BIEN DE UNA Y ME SACA LOS PAQUETES SI NO PUEDEN LLEGAR AL DESTINO PROPUESTO
                    if(elemento.destino==(fila+1)) {
                        paquetesDelDestino.push(elemento);
                    }
                });
                local.centrosCreados[columna].procesarPaquetes(paquetesDelDestino);
            } else {
                local.centrosCreados[columna].procesarPaquetes([])
            }
            fila++;
        });

        var filasAMoverse;
        var arribaOAbajo;
        fila=1;
        paquetesDeLocales.forEach(filaPaquetes=> {
            columna=this.cantidadCentros;
           
            filaPaquetes.forEach(paquetes=>{
                if (paquetes!=0) {
                   
                    paquetes.forEach(paquete=> {
              
                        filasAMoverse=(paquete.destino-(fila));
                       
                        if (filasAMoverse<0) {
                            arribaOAbajo=1;
                        } else if (filasAMoverse>0) {
                            arribaOAbajo=-1;
                        } else {
                            arribaOAbajo=0;
                        }
                        filasAMoverse=math.abs(filasAMoverse);
                        
                        if(filasAMoverse<(columna-1)) {
                            
                            paquete.sePuedeMover=2; //hay que analizar el caso limite aun
                        } else {
                            
                            if (arribaOAbajo==1) {
                                paquete.sePuedeMover=1;
                            } else if (arribaOAbajo==-1) {
                                
                                paquete.sePuedeMover=-1;
                            } else {
                                paquete.sePuedeMover=0;
                            }
                        }
                    });
                }
                columna--;
            })
            fila++;
        })


        columna=this.cantidadCentros-1; //tiene el indice del ultimo
        while (columna>0) {
            fila=0;
            this.locales.forEach(local => { 
                paquetesAProcesarMismoLocal=paquetesDeLocales[fila][columna-1];
                if ((fila-1)>=0){   
                    paquetesLocalSuperior=paquetesDeLocales[fila-1][columna-1];
                } else {
                    paquetesLocalSuperior=0;
                }
                if ((fila+1)<this.locales.length) {
                    paquetesLocalPosterior=paquetesDeLocales[fila+1][columna-1];
                } else {
                    paquetesLocalPosterior=0;
                }

                


                if (paquetesAProcesarMismoLocal!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                   
                    paquetesQueDePuedenProcesar=[];
                    noProcesados=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();

                    paquetesAProcesarMismoLocal.forEach(paquete=> {
                        if (paquete.sePuedeMover==2 || paquete.sePuedeMover==0) {
                            paquetesQueDePuedenProcesar.push(paquete);
                        } else {
                            noProcesados.push(paquete);
                        }
                    })
                   
                    local.centrosCreados[columna].agregarACola(paquetesQueDePuedenProcesar);
                    if (cantidadQuePuedoProcesar<=paquetesQueDePuedenProcesar.length){
                        while (l<paquetesQueDePuedenProcesar.length) {
                            if (l>(cantidadQuePuedoProcesar-1)) {
                                noProcesados.push(paquetesQueDePuedenProcesar[l]);
                            }
                            l++;
                        }
                    }
                    
                    if (noProcesados.length==0) {
                        noProcesados=0;
                    }

                    paquetesDeLocales[fila][columna-1]=noProcesados;
                }

                if(paquetesLocalSuperior!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                    
                    paquetesQueDePuedenProcesar=[];
                    noProcesados=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();


                    paquetesLocalSuperior.forEach(paquete=> {
                        if (paquete.sePuedeMover==2 || paquete.sePuedeMover==-1) {
                            paquetesQueDePuedenProcesar.push(paquete);
                        }else {
                            noProcesados.push(paquete);
                        }
                    })


                    local.centrosCreados[columna].agregarACola(paquetesQueDePuedenProcesar);

                    if (cantidadQuePuedoProcesar<=paquetesQueDePuedenProcesar.length){
                        while (l<paquetesQueDePuedenProcesar.length) {
                            if (l>(cantidadQuePuedoProcesar-1)) {
                                noProcesados.push(paquetesQueDePuedenProcesar[l]);
                            }
                            l++;
                        }
                    }
                    if (noProcesados.length==0) {
                        noProcesados=0;
                    }
                    paquetesDeLocales[fila-1][columna-1]=noProcesados;
                }



                if(paquetesLocalPosterior!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                    paquetesQueDePuedenProcesar=[];
                    noProcesados=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();


                    paquetesLocalPosterior.forEach(paquete=> {
                        if (paquete.sePuedeMover==2 || paquete.sePuedeMover==1) {
                            paquetesQueDePuedenProcesar.push(paquete);
                        }else {
                            noProcesados.push(paquete);
                        }
                    })



                    local.centrosCreados[columna].agregarACola(paquetesQueDePuedenProcesar);
                    if (cantidadQuePuedoProcesar<=paquetesQueDePuedenProcesar.length){
                        while (l<paquetesQueDePuedenProcesar.length) {
                            if (l>(cantidadQuePuedoProcesar-1)) {
                                noProcesados.push(paquetesQueDePuedenProcesar[l]);
                            }
                            l++;
                        }
                    }
                    if (noProcesados.length==0) {
                        noProcesados=0;
                    }
                    paquetesDeLocales[fila+1][columna-1]=noProcesados;

                }
                
                local.centrosCreados[columna].procesarPaquetes();
                
                fila++;
            });
            columna--;
        }
        
        
       
    }


}

module.exports= MatrizLocales;

