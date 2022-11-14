const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= [];
    this.funcionesCentros=FuncionesCentros;
    this.colaSalida=[];
    
    this.nombre="CC";
    if (limiteColaDeEspera<2){
        limiteColaDeEspera=2;
    } else if (limiteColaDeEspera>5) {
        limiteColaDeEspera=5;
    }
    this.limiteCola= limiteColaDeEspera;
    this.funcionesCentros=FuncionesCentros;

    this.procesarPaquetes = function() {
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,1);
    }

    
    this.terminarProceso = function() {
        this.paquetes.forEach(paquete=>{
            this.colaSalida.push(paquete);
        });
        this.paquetes = [];
        var entrega=[]
        this.colaSalida.forEach(paquete=>{
            entrega.push(paquete);
        });
        this.colaSalida=[];
        return entrega;
    }

    this.agregarACola = function (paquetesAgregar) {
        this.funcionesCentros.agregarACola(this.cola,this.limiteCola);
    }

    this.puedeEntrarACola= function() {
        var cantidad= this.funcionesCentros.puedeEntrarACola(this.limiteCola,this.cola);
        return cantidad;
    }
}

module.exports=CentroCalidad;
