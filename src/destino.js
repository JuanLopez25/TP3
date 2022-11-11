function Destino(){
    this.paquetes=[];
    this.recibirPaquete = function(paquetesAgregar) {
        var i=0;
        while (i<(paquetesAgregar.length)) {
            (this.paquetes).push(paquetesAgregar[i]);
            i++;
        }
    }
}

module.exports= Destino;