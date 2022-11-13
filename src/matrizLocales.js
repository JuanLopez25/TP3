const Local=require('./local');

function MatrizLocales(locales,centros){
    var contador=0;
    this.locales=[]
    while(contador<locales){
        this.locales.push(new Local(centros));
        contador+=1;
    }

    this.agregarPaquetes= function(paquetesAgregar,localNombre){
        var local=(this.locales).find(elemento => elemento.nombre==localNombre);
        local.agregarPaquetes(paquetesAgregar);
    }
}

module.exports= MatrizLocales;