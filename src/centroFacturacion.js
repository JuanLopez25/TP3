
function CentroFacturacion() {
    this.paquetes=[];
    this.procesarPaquete = function(paquete) {
        (this.paquetes).push(paquete);
    }
}

module.exports=CentroFacturacion;