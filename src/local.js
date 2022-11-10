const ColaSalida=require('../src/colaSalida')

function Local() {
    
    this.colaDeSalida= new ColaSalida();

    this.paquetesColaDeSalida= function() {
        return this.colaDeSalida.paquetes.length;
    }

     
    this.agregarPaquete= function(paquete) {
        this.colaDeSalida.procesarPaquete(paquete);
    }
}


module.exports= Local;