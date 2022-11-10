const ColaSalida=require('../src/colaSalida')

function Local() {
    
    this.colaDeSalida= new ColaSalida();

    this.colaDeSalida= function() {
        return this.colaDeSalida.paquetes.length;
    }

     
    this.agregarPaquete= function(paquete) {
        this.colaDeSalida.procesarPaquetes(paquete);
    }
}


module.exports= Local;