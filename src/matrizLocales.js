const Local= require('./local');
const Paquete=require('./paquete')

function MatrizLocales(locales,centros,limitesColasDeEspera){
    var contador=0;
    this.locales=[]
    this.cantidadCentros=centros.length+1;
    while(contador<locales-1){
        this.locales.push(new Local(centros,limitesColasDeEspera[contador]));
        contador+=1;
    }
    
    this.agregarPaquetes= function(paquetesAgregar,localNombre){
        var local=(this.locales).find(elemento => elemento.nombre==localNombre);
        local.agregarPaquetes(paquetesAgregar);
    }

    this.avanzarTiempo= function(repeticiones){


        var paquetesAux;
        var cantidadRepeticiones=0;
        var numeroLocal=0;
        var paquetesDeLocales= new Array(this.locales.length);
        while(cantidadRepeticiones<repeticiones){
            numeroLocal=0;
            this.locales.forEach(local => {
                paquetesAux=local.proceso();
                paquetesDeLocales[numeroLocal]=paquetesAux;   
                numeroLocal++;
            });
            cantidadRepeticiones++;
        }

       






        var columna=1;
        var fila=0;
        var paquetesAProcesar;

        while (columna<this.cantidadCentros) {
            fila=0;

            this.locales.forEach(local => {
                paquetesAProcesar=paquetesDeLocales[fila][columna-1];
                if (paquetesAProcesar!=0){
                    if (local.centrosCreados[columna].puedeEntrarACola()) {
                        local.centrosCreados[columna].procesarPaquetes(paquetesAProcesar);
                    }
                } else {
                    local.centrosCreados[columna].procesarPaquetes([])
                }
                fila++;
            });
            columna++;
        }


    }


}

module.exports= MatrizLocales;

