

function paquete(destinoPropuesto) {
    this.destino=destinoPropuesto;
    this.posicionEstado = 0;
    this.estados = ["Local","Centro de facturacion", "Centro de calidad", "Centro de distribucion",destinoPropuesto];


    this.tiempo=0;
    
    this.estadoPaquete = function () {
        return this.estados[this.posicionEstado];
    }


    this.siguienteEtapa = function () {
        if ((this.posicionEstado+1)<(this.estados.length)){
            this.posicionEstado+=1;
        }
    }    
}

module.exports= paquete;