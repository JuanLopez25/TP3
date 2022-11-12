
var Paquete = (function(){
    var contador=0;
    newPaquete= function(destinoPropuesto,productos,urgencia) {
        contador+=1;
        this.id=contador;
        this.destino=destinoPropuesto;
        this.productos=productos;
        this.tiempo=0;
        switch(urgencia){
            case "muy rapido":
                this.urgencia=4;
                break;
            case "rapido":
                this.urgencia=6;
                break;
            case "normal":
                this.urgencia=8;
                break;
        }
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
    }
    return newPaquete;
})();


module.exports= Paquete;