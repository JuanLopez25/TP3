

function paquete() {
    this.estado = "Local";
    this.estadoPaquete = function () {
        return this.estado;
    }
    this.siguienteEtapa = function () {
        this.estado = "Centro de facturacion";
    }    
}

module.exports= paquete;