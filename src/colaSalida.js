


function ColaSalida(paquete) {
    this.paquetes=[];
    this.cola=[];
    this.nombre="CS";
    this.procesarPaquetes = function(paquetesAgregar) {
        var i=0;

        paquetesAgregar.forEach(elemento => elemento.aumentarTiempo());

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
      this.colaSalida=[];
      this.paquetes.forEach(paquete=>{
          this.colaSalida.push(paquete);
      });
      this.paquetes = [];
      return this.colaSalida;
  }
}

module.exports= ColaSalida;