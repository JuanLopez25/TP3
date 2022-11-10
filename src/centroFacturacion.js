
function CentroFacturacion() {
    this.paquetes=[];
    this.procesarPaquete = function(paquetesAgregar) {
        paquetesAgregar.forEach (
            paquete => (this.paquetes).push(paquete)
        );
    }

    this.terminarProceso = function() {
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }
}

module.exports=CentroFacturacion;