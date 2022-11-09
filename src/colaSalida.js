
function colaSalida(paquete) {
    this.paquetes=[];
    this.procesarPaquete = function() {
        (this.paquetes).push(paquete);
    }
    this.terminarProceso =  function() { 
        this.paquetes=[];
    }
}


module.exports= colaSalida;