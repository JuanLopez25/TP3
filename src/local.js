const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('./destino');
const Paquete=require('./Paquete');

var Local = (function(){
    var contadorOrigen="A";
    var contadorDestino=1;
    newLocal= function(centros,limitesColasDeEspera){
        this.nombre=contadorOrigen;
        this.inicializarCentros();
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
            var paquetesLocal=new Array(this.centrosCreados.length-1);
            
            var contador=0;
            var paquetesAux;
            while (contador<this.centrosCreados.length-1) {
                paquetesAux=this.centrosCreados[contador].terminarProceso();
                if (paquetesAux.length==0) {
                    paquetesAux=0;
                }
                paquetesLocal[contador]=(paquetesAux);
                contador++;
            }
            return paquetesLocal;
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
        this.resetearID=function() {
            contadorOrigen="A";
            contadorDestino=1;
        }
        this.inicializarCentros= function() {
            this.centrosCreados=[new ColaSalida()];
            var i=0;
            var j=0;
            var k=0;
            var contador=0;
            centros.forEach(elemento =>
                {
                switch(elemento){
                    case "CF":
                        this.centrosCreados.push(new CentroFacturacion(limitesColasDeEspera[contador]));
                        i=1;
                        break;
                    case "CC":
                        this.centrosCreados.push(new CentroCalidad(limitesColasDeEspera[contador]));
                        j=1;
                        break;
                    case "CD":
                        this.centrosCreados.push(new CentroDistribucion(limitesColasDeEspera[contador]));
                        k=1;
                        break;
                }
                contador+=1;
            }
            );
            if (i==0) {
                this.centrosCreados.push(new CentroFacturacion(3));
            }
            if (j==0) {
                this.centrosCreados.push(new CentroCalidad(2));
            }
            if (k==0) {
                this.centrosCreados.push(new CentroDistribucion(30));
            }
            this.centrosCreados.push(new Destino(contadorDestino));
        }

    }
    return newLocal;


})();

module.exports= Local;