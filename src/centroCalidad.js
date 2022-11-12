


function CentroCalidad() {
    this.paquetes=[];
    this.cola= [];
    this.procesarPaquete = function(paquetesAgregar) {
        var i=0;
        var paqueteTemporal;
        
        this.agregarACola(paquetesAgregar);

        while (i<((this.cola).length)) {
            if (this.paquetes.length<1) {
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
        while ((this.cola.length)<6  &&  i<paquetesAgregar.length) {  //es menor que 6 por que 1 puede ser procesado, y 5 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    } 
}

module.exports=CentroCalidad;

