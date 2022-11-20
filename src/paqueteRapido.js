const Paquete=require('./paquete');

function PaqueteRapido(destinoPropuesto,cantidadCentros) {
    this.destino=destinoPropuesto;
    this.urgencia=cantidadCentros*1.5;
}


PaqueteRapido.prototype = Object.create(Paquete.prototype);
PaqueteRapido.prototype.constructor = PaqueteRapido;

module.exports= PaqueteRapido;
