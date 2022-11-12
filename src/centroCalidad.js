


function CentroCalidad() {
    this.paquetes=[];
    this.cola= [];
    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        this.cola= this.cola.concat(paquetesAgregar)
        var paqueteTemporal;
        while (i<((this.cola).length)) {
            if (this.paquetes.length<1) {
                paqueteTemporal= this.cola[i];
                (this.paquetes).push(paqueteTemporal);
                this.cola.splice(i,1);
            }
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

