
function colaSalida(paquete) {
    this.paquetes=[];
    this.procesarPaquete = function() {
        (this.paquetes).push(paquete);
    }
    this.terminarProceso = function() {
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }
}


module.exports= colaSalida;