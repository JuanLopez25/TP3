const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('../src/destino');

//commit 80 primer refactor

function Local() {
    
    this.colaDeSalida= new ColaSalida();
    this.centroDeFacturacion = new CentroFacturacion();
    this.centroDeCalidad= new CentroCalidad();
    this.centroDeDistribucion= new CentroDistribucion();
    this.destino= new Destino();

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

    this.paquetesDestino= function(){
        return this.destino.paquetes.length;
    }

    this.proceso = function () {
        var paquetes4= this.centroDeDistribucion.terminarProceso();
        var paquetes3= this.centroDeCalidad.terminarProceso();
        var paquetes2= this.centroDeFacturacion.terminarProceso();
        var paquetes1= this.colaDeSalida.terminarProceso();

        (this.centroDeFacturacion).procesarPaquete(paquetes1);
        (this.centroDeCalidad).procesarPaquete(paquetes2);
        (this.centroDeDistribucion).procesarPaquete(paquetes3);
        (this.destino).procesarPaquete(paquetes4);
        
    }


    
    this.avanzarTiempo = function(cantidad) {
        var i=0;
        while (i<cantidad) {
            this.proceso();
            i++;
        }
    }

}


module.exports= Local;