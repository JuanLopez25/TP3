const Paquete=require('./paquete');

function PaqueteNormal(destinoPropuesto,cantidadCentros) {
    this.destino=destinoPropuesto;
    this.urgencia=cantidadCentros*2;
}


PaqueteNormal.prototype = Object.create(Paquete.prototype);
PaqueteNormal.prototype.constructor = PaqueteNormal;

module.exports= PaqueteNormal;

var paquete=new PaqueteNormal(1,2);
console.log(paquete.tiempo); //esto devuelve undefined