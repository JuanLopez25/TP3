const FuncionesCentros= require('./moduloFuncionesCentros');

function CentroDistribucion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CD";
    this.funcionesCentros=FuncionesCentros;
    this.limiteCola=this.funcionesCentros.limitesCola(10,30,limiteColaDeEspera);

    this.procesarPaquetes = function() {
        this.unirPaquetes();
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,10);
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
                    var paqueteUnion= listaAux[0];
                    paqueteUnion.agregarProductos(listaAux);
                    paqueteUnion.tiempo=paquete1.tiempo;
                    paqueteUnion.urgencia=paqueteUnion.productos[0].urgencia;
                    paqueteUnion.id=paquete1.id;
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