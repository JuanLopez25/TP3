const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('../src/destino');

//commit 80 primer refactor
//commit 154 refactor de "avanzar tiempo"
//commit 168 ya no sirven los condicionales y deshechar los paquetes, hay que guardarlos temporalmente los restantes en una "cola" del centro (nos damos cuenta gracias al fail del test "Verificar cantidad de paquetes en Destino agregando 2 paquete y procesandolos de mas para que se queden en el Destino" en el localSinLimite.test.js)
//commit 170 lo logramos solucionar
//terminamos de meter los limites de procesamiento para el commit 173


function Local() {
    
    this.colaDeSalida= new ColaSalida();
    this.centroDeFacturacion = new CentroFacturacion();
    this.centroDeCalidad= new CentroCalidad();
    this.centroDeDistribucion= new CentroDistribucion();
    this.destino= new Destino();

    //---------------------------------------------------------------------
    //---------------------------------------------------------------------

    
    this.agregarPaquete= function(paquete) {
        this.colaDeSalida.procesarPaquete(paquete);
    }

    this.paquetesColaDeSalida= function() {
        return this.colaDeSalida.paquetes.length;
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

    //---------------------------------------------------------------------
    //---------------------------------------------------------------------

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
    
    //---------------------------------------------------------------------
    //---------------------------------------------------------------------


}


module.exports= Local;