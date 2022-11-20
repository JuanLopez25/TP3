const FuncionesCentros= require('./moduloFuncionesCentros');


function ColaSalida(paquete) {
  this.paquetes=[];
  this.cola=[];
  this.nombre="CS";
  this.colaSalida=[];
  this.funcionesCentros=FuncionesCentros;

  this.procesarPaquetes = function(paquetesAProcesar,numero) {
    paquetesAProcesar.forEach(paquete=>{
      paquete.fila=numero;
    })
    this.agregarACola(paquetesAProcesar);
    this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,5);
  }
  this.terminarProceso = function() {
      var entrega=this.funcionesCentros.terminarProceso(this.paquetes,this.colaSalida);
      this.paquetes=[];
      this.colaSalida=[];
      return entrega;
  }
  this.agregarACola = function (paquetesAgregar) {
      this.funcionesCentros.agregarACola(this.cola,5,paquetesAgregar);
  }
}

module.exports= ColaSalida;