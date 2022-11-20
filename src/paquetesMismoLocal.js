function paquetesMismoLocal(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=0;
    this.fila=0;
    this.columna=0;
    
    this.limites = function(paquete) {
        return (paquete.sePuedeMover==2 || paquete.sePuedeMover==0  || paquete.sePuedeMover==-2 || paquete.sePuedeMover==4);
    }
    
    this.cambiarPaquetes= function(paquetesAProcesar) {
        this.paquetes=paquetesAProcesar;
    }

    this.actualizarFilaColumna= function(filaNueva,columnaNueva) {
        this.fila=filaNueva;
        this.columna=columnaNueva;
    }
}

module.exports=paquetesMismoLocal;