
function CentroFacturacion() {
    this.paquetes=[];
    this.procesarPaquete = function(paquetesAgregar) {
        //(this.paquetes).push(paquete);
        var i=0;
        while (i<paquetesAgregar.length) {
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

module.exports=CentroFacturacion;