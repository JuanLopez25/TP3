
function CentroCalidad() {
    this.paquetes=[];
    this.procesarPaquete = function(paquete) {
        (this.paquetes).push(paquete);
    }
}

module.exports=CentroCalidad;