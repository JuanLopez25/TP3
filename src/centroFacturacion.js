const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroFacturacion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CF";
    this.funcionesCentros=FuncionesCentros;
    this.limiteCola=this.funcionesCentros.limitesCola(3,6,limiteColaDeEspera);


    this.procesarPaquetes = function() {
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,3);
    }
    this.terminarProceso = function() {
        var entrega=this.funcionesCentros.terminarProceso(this.paquetes,this.colaSalida);
        this.paquetes=[];
        this.colaSalida=[];
        return entrega;
    }
    this.agregarACola = function (paquetesAgregar) {
        var noEntraron=this.funcionesCentros.agregarACola(this.cola,this.limiteCola,paquetesAgregar);
        return noEntraron;
    }
    this.espacioEnCola= function() {
        var cantidad= this.funcionesCentros.espacioEnCola(this.limiteCola,this.cola);
        return cantidad;
    }
}




module.exports = CentroFacturacion;