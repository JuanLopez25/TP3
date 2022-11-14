const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroFacturacion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CF";
    if (limiteColaDeEspera<3){
        limiteColaDeEspera=3;
    } else if (limiteColaDeEspera>6) {
        limiteColaDeEspera=6;
    }
    this.limiteCola=limiteColaDeEspera;
    this.funcionesCentro= FuncionesCentros;

    this.procesarPaquetes = function() {
        this.funcionesCentro.procesarPaquetes(this.cola,this.paquetes,3);
    }
    this.terminarProceso = function() {
        var entrega= this.funcionesCentro.terminarProceso(this.paquetes,this.colaSalida);
        return entrega;
    }

    this.agregarACola = function (paquetesAgregar) {
        this.funcionesCentro.agregarACola(this.cola,this.limiteCola,paquetesAgregar);
    }

    this.puedeEntrarACola= function() {
        var valor=this.funcionesCentro.puedeEntrarACola(this.limiteCola,this.cola);
        return valor;
    }
}




module.exports = CentroFacturacion;