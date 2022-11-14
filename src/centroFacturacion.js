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
    this.funcionesCentros=FuncionesCentros;

    this.procesarPaquetes = function() {
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,3);
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
        this.funcionesCentros.agregarACola(this.cola,this.limiteCola,paquetesAgregar);
    }

    this.puedeEntrarACola= function() {
        var cantidad= this.funcionesCentros.puedeEntrarACola(this.limiteCola,this.cola);
        return cantidad;
    }

    
    

}




module.exports = CentroFacturacion;