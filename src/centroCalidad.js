const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= ["1"];
    this.funcionesCentros=FuncionesCentros;
    this.colaSalida=["3"];
    
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
        var i=0;
        while ((this.cola.length)<(this.limiteCola)  &&  i<paquetesAgregar.length) {  
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }

    this.puedeEntrarACola= function() {
        return (this.limiteCola-this.cola.length);
    }
}

module.exports=CentroCalidad;
