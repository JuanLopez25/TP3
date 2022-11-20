function paquetesLocalSuperior(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=-1;
    this.fila=0;
    this.columna=0;

    this.limites= function(paquete) {
        return (paquete.sePuedeMover==4 || paquete.sePuedeMover==-1 || paquete.sePuedeMover==-2);
    }
    
    this.cambiarPaquetes= function(paquetesAProcesar) {
        this.paquetes=paquetesAProcesar;
    }
    
    this.actualizarFilaColumna= function(filaNueva,columnaNueva) {
        this.fila=filaNueva;
        this.columna=columnaNueva;
    }
}

module.exports=paquetesLocalSuperior;