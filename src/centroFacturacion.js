

function CentroFacturacion() {
    this.paquetes=[];
    this.cola=[];
    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        var paqueteTemporal;
        
        this.agregarACola(paquetesAgregar);
        
        while (i<(this.cola.length)) {
            if (this.paquetes.length<3) {
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


    this.agregarACola = function (paquetesAgregar) {
        var i=0;
        while ((this.cola.length)<8  &&  i<paquetesAgregar.length) {  //es menor que 8 por que 3 pueden ser procesados, y 5 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }
}




module.exports = CentroFacturacion;