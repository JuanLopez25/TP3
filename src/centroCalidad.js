
function CentroCalidad() {
    this.paquetes=[];
    this.procesarPaquete = function(paquete) {
        (this.paquetes).push(paquete);
    }

    this.terminarProceso = function() {
        
    }
}

module.exports=CentroCalidad;