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
        var contador=0;
        centros.forEach(elemento =>
            {
            this.centros.push(getCentro(elemento,limitesColasDeEspera[contador]));
            contador+=1;
        }
        );
        if (!centros.includes("CF")) {
            this.centros.push(getCentro("CF",3));
        }
        if (!centros.includes("CC")) {
            this.centros.push(getCentro("CC",2));
        }
        if (!centros.includes("CD")) {
            this.centros.push(getCentro("CD",30));
        }
        
        this.centros.push(new Destino());
        
        
        var letra=contadorOrigen.charCodeAt();
        letra++;
        contadorOrigen=String.fromCharCode(letra);
        
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
        

        function getCentro (centro,limite) {
            return centro=="CF" ? new CentroFacturacion(limite) :(centro=="CC" ? new CentroCalidad(limite): new CentroDistribucion(limite));
        }


    }
    return newLocal;


})();

module.exports= Local;