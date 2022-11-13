const Paquete = require("./Paquete");

function CentroDistribucion() {
    this.paquetes=[];
    this.cola=[];
    this.nombre="CD";

    this.procesarPaquetes = function(paquetesAgregar) {
        var i=0;
        var paqueteTemporal;

        this.agregarACola(paquetesAgregar);

        this.cola.forEach(elemento => elemento.aumentarTiempo());

        this.unirPaquetes();

        this.cola.sort(function (a, b) {
            if (a.urgencia > b.urgencia) {
              return 1;
            }
            if (a.urgencia < b.urgencia) {
              return -1;
            }
            return 0;
          });

        while (i<(this.cola.length)) {
            if (this.paquetes.length<10) {
                paqueteTemporal= this.cola[i];
                (this.paquetes).push(paqueteTemporal);
                this.cola.splice(i,1);
                i--;
            }
            i++;
        }
    }
    
    this.terminarProceso = function() {
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }

    this.agregarACola = function (paquetesAgregar) {
        var i=0;
        while ((this.cola.length)<40  &&  i<paquetesAgregar.length) {  //es menor que 40 por que 10 pueden ser procesados, y 30 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
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