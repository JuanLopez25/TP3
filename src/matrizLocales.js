const Local= require('./local');

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
        var paquetesDeLocales= new Array(this.locales.length);
        while(repeticiones<cantidad){
            this.locales.forEach(local => {
                paquetesAux=local.proceso(); //una lista con listas de paquetes adentro
                paquetesDeLocales.push(paquetesAux);   //paquetes de locales quedará con listas de paquetes en orden de los locales
            });
            repeticiones++;
        }
        repeticiones=this.cantidadCentros; //Tengo la cantidad de centros de procesamiento sin contar el destino
        while (repeticiones>0) {
            //verificar a centro me conviene pasar
            repeticiones--;
        }



    }


}

module.exports= MatrizLocales;


