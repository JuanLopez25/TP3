const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');

//commit 80 primer refactor

function Local() {
    
    this.colaDeSalida= new ColaSalida();
    this.centroDeFacturacion = new CentroFacturacion();
    this.centroDeCalidad= new CentroCalidad();
    this.centroDeDistribucion= new CentroDistribucion();

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
        return this.centroDeCalidad.paquetes.length;
    }

    this.paquetesCentroDeDistribucion= function(){
        return this.centroDeDistribucion.paquetes.length;
    }

    this.avanzarTiempo = function() {
        var paquetes4= this.centroDeDistribucion.terminarProceso();
        var paquetes3= this.centroDeCalidad.terminarProceso();
        var paquetes2= this.centroDeFacturacion.terminarProceso();
        var paquetes1= this.colaDeSalida.terminarProceso();

        (this.centroDeFacturacion).procesarPaquete(paquetes1);
        (this.centroDeCalidad).procesarPaquete(paquetes2);
        (this.centroDeDistribucion).procesarPaquete(paquetes3);
    }

}


module.exports= Local;