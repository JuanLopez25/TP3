const FuncionesCentros= require('./moduloFuncionesCentros');
const funcionesColaLimite=require('./moduloFuncionesColaLimite');

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= [];
    this.colaSalida=[];
    
    this.nombre="CC";
    this.funcionesCentros=FuncionesCentros;
    this.funcionesColaLimite=funcionesColaLimite;
    this.limiteCola=this.funcionesColaLimite.limitesCola(2,5,limiteColaDeEspera);

    
    this.procesarPaquetes = function() {
        this.funcionesCentros.ordenarPaquetes(this.cola);
        this.cola=this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,1);
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
        var cantidad= this.funcionesColaLimite.espacioEnCola(this.limiteCola,this.cola);
        return cantidad;
    }
}

module.exports=CentroCalidad;
