const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');


//commit 80 primer refactor




function Local() {
    
    this.colaDeSalida= new ColaSalida();
    this.centroDeFacturacion = new CentroFacturacion();

    this.paquetesColaDeSalida= function() {
        return this.colaDeSalida.paquetes.length;
    }

     
    this.agregarPaquete= function(paquete) {
        this.colaDeSalida.procesarPaquete(paquete);
    }

    this.paquetesCentroDeFacturacion= function(){
        return this.centroDeFacturacion.paquetes.length;
    }


    this.paquetesCentroDeCalidad= function(){
        return this.paquetesCentroDeCalidad.paquetes.length;
    }




    this.avanzarTiempo = function() {
        var paquetes2= this.centroDeFacturacion.terminarProceso();
        var paquetes1= this.colaDeSalida.terminarProceso();
        (this.centroDeFacturacion).procesarPaquete(paquetes1);
    }

}


module.exports= Local;