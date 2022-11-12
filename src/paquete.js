
function Paquete(destinoPropuesto,productos,urgencia) {
       this.destino=destinoPropuesto;
       this.productos=productos;
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
}

module.exports= Paquete;