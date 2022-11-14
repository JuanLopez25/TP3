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
        var paquetesPosibles=[];
        var localSuperior;
        var localPosterior;

        while (columna<this.cantidadCentros) {
            fila=0;
            this.locales.forEach(local => {  
                paquetesAProcesar=paquetesDeLocales[fila][columna-1];
                if ((fila-1)>=0){   
                    console.log("no entro")
                    paquetesLocalSuperior=paquetesDeLocales[fila-1][columna-1];
                    localSuperior=this.locales[fila-1];
                } else {
                    localSuperior=0;
                    paquetesLocalSuperior=0;
                }
                if ((fila+1)<this.locales.length) {
                    console.log("no entro")
                    paquetesLocalPosterior=paquetesDeLocales[fila+1][columna-1];
                    
                } else {
                    localPosterior=0;
                    paquetesLocalPosterior=0;
                }

                


                if (paquetesAProcesar!=0){
                    if (local.centrosCreados[columna].puedeEntrarACola()) {
                        local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                    }
                    if(paquetesLocalSuperior!=0 && local.centrosCreados[columna].puedeEntrarACola()) {
                        console.log("no entro")
                        local.centrosCreados[columna].procesarPaquetes(paquetesLocalSuperior);
                    }
                    if(paquetesLocalPosterior!=0 && local.centrosCreados[columna].puedeEntrarACola()) {
                        console.log("no entro")
                        local.centrosCreados[columna].procesarPaquetes(paquetesLocalPosterior);
                    }
                    
                }


                fila++;



            });
            columna++;
        }

        //me queda procesar para el destino
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

