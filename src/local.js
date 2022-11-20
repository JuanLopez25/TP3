const ColaSalida=require('./colaSalida');
const CentroFacturacion = require('./centroFacturacion');
const CentroCalidad = require('./centroCalidad');
const CentroDistribucion = require('./centroDistribucion');
const Destino=require('./destino');


var Local = (function(){
    var contadorOrigen="A";
    newLocal= function(centros,limitesColasDeEspera){
        this.nombre=contadorOrigen;
        this.centros=[new ColaSalida()];
        var i=0;
        var j=0;
        var k=0;
        var contador=0;
        centros.forEach(elemento =>
            {
            switch(elemento){
                case "CF":
                    this.centros.push(new CentroFacturacion(limitesColasDeEspera[contador]));
                    i=1;
                    break;
                case "CC":
                    this.centros.push(new CentroCalidad(limitesColasDeEspera[contador]));
                    j=1;
                    break;
                case "CD":
                    this.centros.push(new CentroDistribucion(limitesColasDeEspera[contador]));
                    k=1;
                    break;
            }
            contador+=1;
        }
        );
        if (i==0) {
            this.centros.push(new CentroFacturacion(3));
        }
        if (j==0) {
            this.centros.push(new CentroCalidad(2));
        }
        if (k==0) {
            this.centros.push(new CentroDistribucion(30));
        }
        this.centros.push(new Destino());
        
        
        var letra=contadorOrigen.charCodeAt();
        letra++;
        contadorOrigen=String.fromCharCode(letra);
        
        //---------------------------------------------------------------------
        //---------------------------------------------------------------------
        
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
        

    }
    return newLocal;


})();

module.exports= Local;