

function CentroFacturacion() {
    this.paquetes=[];
    this.cola=[];
    this.procesarPaquetes = function(paquetesAgregar) {
        var i=0;
        var paqueteTemporal;
        
        this.agregarACola(paquetesAgregar);

        this.cola.forEach(elemento => elemento.aumentarTiempo());

        this.cola.sort(function (a, b) {
            if (a.urgencia > b.urgencia) {
              return 1;
            }
            if (a.urgencia < b.urgencia) {
              return -1;
            }
            return 0;
        });

        
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
        while ((this.cola.length)<9  &&  i<paquetesAgregar.length) {  //es menor que 9 por que 3 pueden ser procesados, y 6 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }
}




module.exports = CentroFacturacion;