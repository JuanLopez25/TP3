const PaqueteMuyRapido= require('./paqueteMuyRapido');
const PaqueteRapido= require('./paqueteRapido');
const PaqueteNormal= require('./paqueteNormal');


var Paquete = (function(){
    var contador=0;
    newPaquete= function(destinoPropuesto,urgenciaSolicitada,cantidadCentros) {
        contador+=1;
        this.id=contador;
        this.destino=destinoPropuesto;
        this.productos=[];
        this.tiempo=0;
        this.filasAMoverse=0;
        this.subirOBajar=0;
        this.fila=0;
        this.columnasQueQuedan=cantidadCentros;
        this.urgencia= (getTipo(urgenciaSolicitada,cantidadCentros)).urgencia;
        this.informe= function() {
            if(this.tiempo<=this.urgencia) {
                return "P"+this.id+": Destino "+this.destino+", Urgencia "+this.urgencia+", llego a tiempo\n";
            } else {
                return "P"+this.id+": Destino "+this.destino+", Urgencia "+this.urgencia+", no llego a tiempo\n";
            }
        }
        this.resetearID=function() {
            contador=1;
            this.id=contador;
        }
        this.aumentarTiempo= function(){
            this.tiempo+=1;
        }
        this.agregarProductos= function(productosAgregar) {
            productosAgregar.forEach(producto => {
                this.productos.push(producto);
            });
        }

        this.actualizarSubirOBajar = function () {
            if (this.filasAMoverse<0) { 
                this.subirOBajar=1;
            } else if (this.filasAMoverse>0) {
                this.subirOBajar=-1;
            } else {
                this.subirOBajar=0;
            }
        }

        this.aCualMoverme = function() {
            if(this.filasAMoverse<(this.columnasQueQuedan)) {
                if(this.filasAMoverse==this.columnasQueQuedan-1) {
                   if(this.destino-(this.fila) == 0) {
                        this.subirOBajar=0;
                   }else if (this.destino-(this.fila)>0) {
                        this.subirOBajar=-2;
                   } else {
                        this.subirOBajar=2;
                   }
                } else {
                    this.subirOBajar=4; 
                }
            } 
        }
        
        function getTipo (tipoUrgencia,cantCentros) {
            return tipoUrgencia=="muy rapido" ? new PaqueteMuyRapido(cantCentros) :(tipoUrgencia=="rapido" ? new PaqueteRapido(cantCentros): new PaqueteNormal(cantCentros));
        }
    }
    return newPaquete;
})();


module.exports= Paquete;
