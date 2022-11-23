const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('./destino');


var Local = (function(){
    var contadorOrigen="A";
    newLocal= function(centros,limitesColasDeEspera){
        this.nombre=contadorOrigen;
        this.centros=this.crearCentros(centros,limitesColasDeEspera);
        this.siguienteLocal();
        

        
        this.agregarPaquetes= function(paquetes) {
            var numero= this.nombre.charCodeAt()-64;
            this.centros[0].procesarPaquetes(paquetes,numero);
        }

        this.obtenerPaquetesProcesados = function () {
            var paquetesLocal=new Array(this.centros.length-1);
            var contador=0;
            var paquetesAux;
            while (contador<this.centros.length-1) {
                paquetesAux=this.centros[contador].terminarProceso();
                if (paquetesAux.length==0) {
                    paquetesAux=0;
                }
                paquetesLocal[contador]=(paquetesAux);
                contador++;
            }
            return paquetesLocal;
        }
        
        this.informarPaquetesEnDestino=function() {
            var largo= this.centros.length-1;
            return this.centros[largo].informarLlegadas();
        }

        this.resetearID=function() {
            contadorOrigen="A";
        }
        
        this.procesarPaquetesDestino= function(columna,paquetesAProcesar) {
            this.centros[columna].procesarPaquetes(paquetesAProcesar);
        }
        this.procesarPaquetesCentro= function(columna) {
            this.centros[columna].procesarPaquetes();
        }

        this.crearCentros = function (centros,limitesColasDeEspera) {
            var centrosCreados=[new ColaSalida()];
            var contador=0;
            centros.forEach(elemento =>
                {
                centrosCreados.push(getCentro(elemento,limitesColasDeEspera[contador]));
                contador+=1;
            }
            );
            this.validarCentrosCreados(centros,centrosCreados)
            centrosCreados.push(new Destino());
            return centrosCreados;
        }

        this.validarCentrosCreados= function(centros,centrosCreados) {
            if (!centros.includes("CF")) {
                centrosCreados.push(getCentro("CF",3));
            }
            if (!centros.includes("CC")) {
                centrosCreados.push(getCentro("CC",2));
            }
            if (!centros.includes("CD")) {
                centrosCreados.push(getCentro("CD",30));
            }
        }

        this.siguienteLocal= function() {
            var letra=contadorOrigen.charCodeAt();
            letra++;
            contadorOrigen=String.fromCharCode(letra);
        }

        function getCentro (centro,limite) {
            return centro=="CF" ? new CentroFacturacion(limite) :(centro=="CC" ? new CentroCalidad(limite): new CentroDistribucion(limite));
        }


    }
    return newLocal;


})();

module.exports= Local;