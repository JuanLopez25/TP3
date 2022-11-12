
function Paquete(destinoPropuesto,productos,urgencia) {
       this.destino=destinoPropuesto;
       this.productos=productos;
       switch(urgencia){
            case "muy rapido":
                this.urgencia=4;
            case "rapido":
                this.urgencia=6;
       }
}

module.exports= Paquete;