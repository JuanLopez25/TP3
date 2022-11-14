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
        //console.log(paquetesAux);

        var columna=1;
        var fila=0;
        var paquetesAProcesar;

        while (columna<this.cantidadCentros) {
            fila=0;

            this.locales.forEach(local => {
                paquetesAProcesar=paquetesDeLocales[fila][columna-1];
                console.log(paquetesAProcesar);
                if (paquetesAProcesar!=0){
                    console.log("entre a procesar "+paquetesAProcesar);
                    if (local.centrosCreados[columna].puedeEntrarACola()) {
                        console.log("entre a procesar "+paquetesAProcesar);
                        local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                    }
                } else {
                    local.centrosCreados[columna].procesarPaquetes([])
                }
                fila++;
            });
            columna++;
        }

        // this.locales.forEach(local => {
        //     console.log("El local "+local.nombre);
        //     local.centrosCreados.forEach(elemento =>{
        //         console.log("El centro "+elemento.nombre+" esta procesando : "+elemento.paquetes.length+" paquetes y tiene en la cola de espera "+elemento.cola.length);
        //     });
        // });
       


    }


}

module.exports= MatrizLocales;

