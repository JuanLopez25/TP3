function PaqueteRapido() {
    this.getUrgencia = function(cantidadCentros) {
        return cantidadCentros*1.5;
    }
}

module.exports= PaqueteRapido;
