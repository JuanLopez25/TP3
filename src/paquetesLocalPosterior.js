function paquetesLocalPosterior(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=1;
    this.limites = function(paquete) {
        return (paquete.sePuedeMover==4 || paquete.sePuedeMover==1 || paquete.sePuedeMover==2);
    }
    this.cambiarPaquetes= function(paquetesAProcesar) {
        this.paquetes=paquetesAProcesar;
    }
}

module.exports=paquetesLocalPosterior;