const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('./destino');

const Paquete=require('./Paquete');

var Local = (function(){
    var contadorOrigen="A";
    var contadorDestino=1;
    newLocal= function(centros){
        this.nombre=contadorOrigen;
        this.centrosCreados=[new ColaSalida()];
        var i=0;
        var j=0;
        var k=0;
        centros.forEach(elemento =>
            {
            switch(elemento){
                case "CF":
                    this.centrosCreados.push(new CentroFacturacion());
                    i=1;
                    break;
                case "CC":
                    this.centrosCreados.push(new CentroCalidad());
                    j=1;
                    break;
                case "CD":
                    this.centrosCreados.push(new CentroDistribucion());
                    k=1;
                    break;
            }}
        );
        if (i==0) {
            this.centrosCreados.push(new CentroFacturacion());
        }
        if (j==0) {
            this.centrosCreados.push(new CentroCalidad());
        }
        if (k==0) {
            this.centrosCreados.push(new CentroDistribucion());
        }
        this.centrosCreados.push(new Destino(contadorDestino));
        this.cantidadRecibidos=0;

        contadorDestino+=1;
        var letra=contadorOrigen.charCodeAt();
        letra++;
        contadorOrigen=String.fromCharCode(letra);
        
        //---------------------------------------------------------------------
        //---------------------------------------------------------------------
        
        this.agregarPaquetes= function(paquetes) {
            this.centrosCreados[0].procesarPaquetes(paquetes);
        }

        this.paquetesColaDeSalida= function() {
            return this.centrosCreados[0].paquetes.length;
        }
        

        this.proceso = function () {
            var contador=(this.centrosCreados.length)-1;
            var centroActual;
            var centroAnterior;
            var paquetesAux;
            while (contador>0) {
                centroActual=this.centrosCreados[contador];
                centroAnterior=this.centrosCreados[contador-1];
                paquetesAux=centroAnterior.terminarProceso();
                centroActual.procesarPaquetes(paquetesAux); 
                contador--;
            }
        }

        this.avanzarTiempo = function(cantidad) {
            var i=0;
            while (i<cantidad) {
                this.proceso();
                i++;
            }
        }
        
        this.informarPaquetesEnDestino=function() {
            var largo= this.centrosCreados.length-1;
            return this.centrosCreados[largo].informarLlegadas();
        }
    }
    return newLocal;


})();



module.exports= Local;