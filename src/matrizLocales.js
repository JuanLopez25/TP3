const Local= require('./local');
const Paquete=require('./paquete')

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
       
            
        this.locales.forEach(local => {
            paquetesAux=local.proceso();
            paquetesDeLocales[numeroLocal]=paquetesAux;   
            numeroLocal++;
        });
        
        

        var columna=1;
        var fila=0;
        var paquetesAProcesar;
        var paquetesLocalSuperior;
        var paquetesLocalPosterior;
        var localSuperior;
        var localPosterior;
        var nuevoPaquetes;
        var l=0;
        var cantidadQuePuedoProcesar=0;

        while (columna<this.cantidadCentros) {
            fila=0;
            this.locales.forEach(local => { 
                
                
                paquetesAProcesar=paquetesDeLocales[fila][columna-1];
                if ((fila-1)>=0){   
                    paquetesLocalSuperior=paquetesDeLocales[fila-1][columna-1];
                    localSuperior=this.locales[fila-1];
                } else {
                    localSuperior=0;
                    paquetesLocalSuperior=0;
                }
                if ((fila+1)<this.locales.length) {
                    paquetesLocalPosterior=paquetesDeLocales[fila+1][columna-1];
                    
                } else {
                    localPosterior=0;
                    paquetesLocalPosterior=0;
                }

               

                if (paquetesAProcesar!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                    nuevoPaquetes=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();
                    local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                    while (l<paquetesAProcesar.length) {
                        if (l>(cantidadQuePuedoProcesar-1)) {
                            nuevoPaquetes.push(paquetesAProcesar[l]);
                        }
                        l++;
                    }

                    if (nuevoPaquetes.length==0) {
                        nuevoPaquetes=0;
                    }

                    paquetesDeLocales[fila][columna-1]=nuevoPaquetes;
                }
                if(paquetesLocalSuperior!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                    nuevoPaquetes=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();
                    local.centrosCreados[columna].procesarPaquetes(paquetesLocalSuperior);
                    while (l<paquetesLocalSuperior.length) {
                        if (l>(cantidadQuePuedoProcesar-1)) {
                            nuevoPaquetes.push(paquetesLocalSuperior[l]);
                        }
                        l++;
                    }
                    
                    if (nuevoPaquetes.length==0) {
                        nuevoPaquetes=0;
                    }
                    paquetesDeLocales[fila-1][columna-1]=nuevoPaquetes;
                }
                if(paquetesLocalPosterior!=0 && local.centrosCreados[columna].puedeEntrarACola()>0) {
                    nuevoPaquetes=[];
                    l=0;
                    cantidadQuePuedoProcesar=local.centrosCreados[columna].puedeEntrarACola();
                    local.centrosCreados[columna].procesarPaquetes(paquetesLocalPosterior);
                    while (l<paquetesLocalPosterior.length) {
                        if (l>(cantidadQuePuedoProcesar-1)) {
                            nuevoPaquetes.push(paquetesLocalPosterior[l]);
                        }
                        l++;
                    }
                    
                    if (nuevoPaquetes.length==0) {
                        nuevoPaquetes=0;
                    }
                    paquetesDeLocales[fila+1][columna-1]=nuevoPaquetes;

                }else {
                    local.centrosCreados[columna].procesarPaquetes([]);
                }


                fila++;

            });
            columna++;
        }

        
        fila=0;
        var paquetesDelDestino=[];
        this.locales.forEach(local => {
            paquetesAProcesar=paquetesDeLocales[fila][columna-1];
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
       
    }


}

module.exports= MatrizLocales;

