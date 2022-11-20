const Paquete=require('./paquete');

function PaqueteMuyRapido(destinoPropuesto,cantidadCentros) {
    this.destino=destinoPropuesto;
    this.urgencia=cantidadCentros;
}


PaqueteMuyRapido.prototype = Object.create(Paquete.prototype);
PaqueteMuyRapido.prototype.constructor = PaqueteMuyRapido;

module.exports= PaqueteMuyRapido;
