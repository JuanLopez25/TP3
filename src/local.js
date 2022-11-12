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
//commmit 189 eliminamos los test de paquete ya que quedaron obsoletos
//Rediseñamos la clase paquete para que tenga el nivel de urgencia


//TDD
//array.sort
//arrat.splice
//protocolos
//refactors
//module pattern


var Local = (function(){
    var contadorOrigen="A";
    var contadorDestino=1;
    newLocal= function(centros){
        this.nombre=contadorOrigen;
        this.centrosCreados=[new ColaSalida()];
        centros.forEach(elemento =>
            {switch(elemento){
                case "CF":
                    this.centrosCreados.push(new CentroFacturacion());
                case "CC":
                    this.centrosCreados.push(new CentroCalidad());
                case "CD":
                    this.centrosCreados.push(new CentroDistribucion());
            }}
        );
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