
function CentroDistribucion() {
    this.paquetes=[];
    this.cola=[];


    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        var paqueteTemporal;

        
        while (i<(this.cola.length)) {
            if (this.paquetes.length<10) {
                paqueteTemporal= this.cola[i];
                (this.paquetes).push(paqueteTemporal);
                this.cola.splice(i,1);
                i--;
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