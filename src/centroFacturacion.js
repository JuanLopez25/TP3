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
        var i=0;
        while (((this.cola.length)<(this.limiteCola)    )  &&  i<paquetesAgregar.length) { 
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }

    this.puedeEntrarACola= function() {
        return (this.limiteCola-this.cola.length);  
    }

    
    

}




module.exports = CentroFacturacion;