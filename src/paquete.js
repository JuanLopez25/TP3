
var Paquete = (function(){
    var contador=0;
    newPaquete= function(destinoPropuesto,productos,urgenciaSolicitada,cantidadCentros) {
        this.sePuedeMover=2;
        contador+=1;
        this.id=contador;
        this.destino=destinoPropuesto;
        this.productos=productos;
        this.tiempo=0;
        this.urgencia=0;
        switch(urgenciaSolicitada){
            case "muy rapido":
                this.urgencia=cantidadCentros;
                break;
            case "rapido":
                this.urgencia=cantidadCentros*1.5;
                break;
            case "normal":
                this.urgencia=cantidadCentros*2;
                break;
        }
        //this.urgencia=this.calcularUrgencia(urgenciaSolicitada,cantidadCentros);



        this.informe= function() {
            if(this.tiempo<=this.urgencia) {
                return "P"+this.id+": Destino "+this.destino+", Urgencia "+this.urgencia+", llego a tiempo\n";
            } else {
                return "P"+this.id+": Destino "+this.destino+", Urgencia "+this.urgencia+", no llego a tiempo\n";
            }
        }
        this.resetearID=function() {
            contador=0;
        }
        this.aumentarTiempo= function(){
            this.tiempo+=1;
        }

        this.calcularUrgencia=function(urgenciaSolicitada,cantidadCentros) {
            var urgencia;
            switch(urgenciaSolicitada){
                case "muy rapido":
                    urgencia=cantidadCentros;
                    break;
                case "rapido":
                    urgencia=cantidadCentros*1.5;
                    break;
                case "normal":
                    urgencia=cantidadCentros*2;
                    break;
            }
            return urgencia;
        }

    }
    return newPaquete;
})();


module.exports= Paquete;