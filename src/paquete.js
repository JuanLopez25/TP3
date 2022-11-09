

function paquete(destinoPropuesto) {
    this.destino=destinoPropuesto;
    this.posicionEstado = 0;
    this.estados = ["Local","Centro de facturacion", "Centro de calidad", "Centro de distribucion",destino];

    
    this.estadoPaquete = function () {
        return this.estados[this.posicionEstado];
    }


    this.siguienteEtapa = function () {
        this.posicionEstado+=1;
    }    
}

module.exports= paquete;