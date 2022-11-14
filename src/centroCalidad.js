const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= [];
    this.funcionesCentros=FuncionesCentros;
    this.colaSalida=[];
    
    this.nombre="CC";
    this.funcionesCentros=FuncionesCentros;
    this.limiteCola=this.funcionesCentros.limitesCola(2,5,limiteColaDeEspera);

    
    this.procesarPaquetes = function() {
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,1);
    }
    this.terminarProceso = function() {
        var entrega=this.funcionesCentros.terminarProceso(this.paquetes,this.colaSalida);
        this.paquetes=[];
        this.colaSalida=[];
        return entrega;
    }
    this.agregarACola = function (paquetesAgregar) {
        this.funcionesCentros.agregarACola(this.cola,this.limiteCola,paquetesAgregar);
    }
    this.puedeEntrarACola= function() {
        var cantidad= this.funcionesCentros.puedeEntrarACola(this.limiteCola,this.cola);
        return cantidad;
    }
}

module.exports=CentroCalidad;
