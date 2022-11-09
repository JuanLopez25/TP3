
function colaSalida() {
    this.paquetes=0;
    this.procesarPaquete = function() {
        this.paquetes+=1;
    }
}


module.exports= colaSalida;