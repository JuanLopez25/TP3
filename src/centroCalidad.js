
function CentroCalidad() {
    this.paquetes=[];
    this.procesarPaquete = function(paquete) {
        (this.paquetes).push(paquete);
    }

    this.terminarProceso = function() {
        this.paquete=[];
    }
}

module.exports=CentroCalidad;