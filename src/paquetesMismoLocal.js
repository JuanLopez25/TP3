function paquetesMismoLocal(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=0;
    this.limites = function(paquete) {
        return (paquete.sePuedeMover==2 || paquete.sePuedeMover==0  || paquete.sePuedeMover==-2 || paquete.sePuedeMover==4);
    }
    
    this.cambiarPaquetes= function(paquetesAProcesar) {
        this.paquetes=paquetesAProcesar;
    }
}

module.exports=paquetesMismoLocal;