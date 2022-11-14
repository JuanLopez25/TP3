const Paquete = require("./Paquete");
const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroDistribucion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CD";
    if (limiteColaDeEspera<10){
        limiteColaDeEspera=10;
    } else if (limiteColaDeEspera>30) {
        limiteColaDeEspera=30;
    }
    this.limiteCola= limiteColaDeEspera;
    this.funcionesCentro= new FuncionesCentros(this.cola,this.paquetes,this.colaSalida,this.limiteCola,10);
    
    this.unirPaquetes = function(){
        var colaAux=[];
        var destinoAnterior=[];
        this.cola.forEach(paquete1 => {
            if(!destinoAnterior.includes(paquete1.destino)){
                var listaAux=[];
                this.cola.forEach(paquete2 => {
                    if(paquete1.destino==paquete2.destino){
                        listaAux.push(paquete2);
                    }
                });
                if(listaAux.length>1){
                    listaAux.sort(function (a, b) {
                        if (a.urgencia > b.urgencia) {
                          return 1;
                        }
                        if (a.urgencia < b.urgencia) {
                          return -1;
                        }
                        return 0;
                      });
                    var paqueteUnion= new Paquete(paquete1.destino,listaAux);
                    paqueteUnion.tiempo=paquete1.tiempo;
                    paqueteUnion.urgencia=paqueteUnion.productos[0].urgencia;
                    colaAux.push(paqueteUnion);
                }
                else{
                    colaAux.push(paquete1);
                }
                destinoAnterior.push(paquete1.destino);
            }
        });
        this.cola=colaAux;
    }



  

}

module.exports=CentroDistribucion;