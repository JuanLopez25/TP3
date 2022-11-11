
function CentroCalidad() {
    this.paquetes=[];
    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        while (i<(paquetesAgregar.length)) {
            (this.paquetes).push(paquetesAgregar[i]);
            i++;
        }
    }

    this.terminarProceso = function() {
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }
}

module.exports=CentroCalidad;