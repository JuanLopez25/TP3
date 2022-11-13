const Local= require('./local');

function MatrizLocales(locales,centros,limitesColasDeEspera){
    var contador=0;
    this.locales=[]
    while(contador<locales-1){
        this.locales.push(new Local(centros,limitesColasDeEspera[contador]));
        contador+=1;
    }
    
    this.agregarPaquetes= function(paquetesAgregar,localNombre){
        var local=(this.locales).find(elemento => elemento.nombre==localNombre);
        local.agregarPaquetes(paquetesAgregar);
    }

    this.avanzarTiempo= function(cantidad){
        this.locales.forEach(local => local.avanzarTiempo(cantidad));
    }

    
}

module.exports= MatrizLocales;


