const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= [];
    this.colaSalida=[];
    this.nombre="CC";
    if (limiteColaDeEspera<2){
        limiteColaDeEspera=2;
    } else if (limiteColaDeEspera>5) {
        limiteColaDeEspera=5;
    }
    this.limiteCola= limiteColaDeEspera;
    this.funcionesCentro= new FuncionesCentros(this.cola,this.paquetes,this.colaSalida,this.limiteCola,1);
}

module.exports=CentroCalidad;

