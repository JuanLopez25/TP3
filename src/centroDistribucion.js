
function CentroDistribucion() {
    this.paquetes=[];
    this.procesarPaquete = function(paquete) {
        (this.paquetes).push(paquete);
    }
    this.terminarProceso = function() {
        //this.paquetes = [];
    }

}

module.exports=CentroDistribucion;