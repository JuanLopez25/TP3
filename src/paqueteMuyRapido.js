const Paquete=require('./paquete');

function PaqueteMuyRapido(destinoPropuesto,cantidadCentros) {
    this.paqueteGenerico=new Paquete(destinoPropuesto,cantidadCentros);
    this.paqueteGenerico.urgencia=cantidadCentros;

}

module.exports= PaqueteMuyRapido;
