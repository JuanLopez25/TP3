


function ColaSalida(paquete) {
    this.paquetes=[];
    this.procesarPaquetes = function(paquetesAgregar) {
        var i=0;
        paquetesAgregar.sort(function (a, b) {
            if (a.urgencia > b.urgencia) {
              return 1;
            }
            if (a.urgencia < b.urgencia) {
              return -1;
            }
            return 0;
          });
        while (i<(paquetesAgregar.length)) {
            if (this.paquetes.length<5) {
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

module.exports= ColaSalida;