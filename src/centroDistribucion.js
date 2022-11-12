
function CentroDistribucion() {
    this.paquetes=[];
    this.cola=[];

    
    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        while (i<(paquetesAgregar.length)) {
            if (this.paquetes.length<10) {
                (this.paquetes).push(paquetesAgregar[i]);
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

module.exports=CentroDistribucion;