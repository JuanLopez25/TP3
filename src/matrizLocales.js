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
        
        //console.log(paquetesDeLocales);

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
                if ((fila-1)>=0){   //si no estamos en el primer local
                    paquetesLocalSuperior=paquetesDeLocales[fila-1][columna-1];
                    localSuperior=this.locales[fila-1];
                } else {
                    localSuperior=0;
                    paquetesLocalSuperior=0;
                }
                if ((fila+1)<this.locales.length) {   //si no estamos en el ultimo local.
                    paquetesLocalPosterior=paquetesDeLocales[fila+1][columna-1];
                    console.log("local :"+local.nombre+" tiene en paquetes superior: "+paquetesLocalSuperior);
                } else {
                    localPosterior=0;
                    paquetesLocalPosterior=0;
                }

                

                // if (paquetesAProcesar!=0){
                //     if (local.centrosCreados[columna].puedeEntrarACola()) {
                //         local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                //     } 
                // } else {
                //     local.centrosCreados[columna].procesarPaquetes([])
                // }


                if (paquetesAProcesar!=0){
                    if (local.centrosCreados[columna].puedeEntrarACola()) {
                        local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                    }
                    if(paquetesLocalSuperior!=0 && local.centrosCreados[columna].puedeEntrarACola()) {
                        //console.log("NO entre aca")
                        local.centrosCreados[columna].procesarPaquetes(paquetesLocalSuperior);
                    }
                    if(paquetesLocalPosterior!=0 && local.centrosCreados[columna].puedeEntrarACola()) {
                        //console.log("entre aca")
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
        //console.log(this.locales[0].centrosCreados[3].paquetes.length+" y "+this.locales[0].centrosCreados[3].cola.length);
        //console.log(this.locales[0].centrosCreados[4].paquetes);
        //console.log("informa: "+this.locales[0].informarPaquetesEnDestino());
        // this.locales.forEach(local => {
        //     console.log("El local "+local.nombre);
        //     local.centrosCreados.forEach(elemento =>{
        //         console.log("El centro "+elemento.nombre+" esta procesando : "+elemento.paquetes.length+" paquetes y tiene en la cola de espera "+elemento.cola.length);
        //     });
        // });

    }


}

module.exports= MatrizLocales;

