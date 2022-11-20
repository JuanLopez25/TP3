const Paquete=require('./paquete');

function PaqueteNormal(destinoPropuesto,cantidadCentros) {
    this.paqueteGenerico=new Paquete(destinoPropuesto,cantidadCentros);
    this.paqueteGenerico.urgencia=cantidadCentros*2;

}



module.exports= PaqueteNormal;

