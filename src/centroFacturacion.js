
function CentroFacturacion() {
    this.paquetes=[];
    this.procesarPaquete = function(paquetesAgregar) {
        //(this.paquetes).push(paquete);
        paquetesAgregar.forEach(element => {
            this.paquetes.push(element);
        });
    }

    this.terminarProceso = function() {
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }
}

module.exports=CentroFacturacion;