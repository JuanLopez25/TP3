const Local=require('./local');

function MatrizLocales(locales,centros){
    var contador=0;
    this.locales=[]
    while(contador<locales){
        this.locales.push(new Local(centros));
        contador+=1;
    }

    this.agregarPaquetes= function(paquetesAgregar,localAgregarPaquete){
        var i=this.locales.findIndex(elemento => elemento.nombre==localAgregarPaquete);
        locales[i].agregarPaquetes(paquetesAgregar);
    }
}

module.exports= MatrizLocales;