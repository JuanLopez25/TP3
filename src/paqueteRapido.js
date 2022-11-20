const Paquete=require('./paquete');

function PaqueteRapido(destinoPropuesto,cantidadCentros) {
    this.paqueteGenerico=new Paquete(destinoPropuesto,cantidadCentros);
    this.paqueteGenerico.urgencia=cantidadCentros*1.5;
}



module.exports= PaqueteRapido;
