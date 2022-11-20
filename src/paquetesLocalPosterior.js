function paquetesLocalPosterior(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=1;
    this.fila=0;
    this.columna=0;

    this.limites = function(paquete) {
        return (paquete.subirOBajar==4 || paquete.subirOBajar==1 || paquete.subirOBajar==2);
    }
    this.cambiarPaquetes= function(paquetesAProcesar) {
        this.paquetes=paquetesAProcesar;
    }
    
    this.actualizarFilaColumna= function(filaNueva,columnaNueva) {
        this.fila=filaNueva;
        this.columna=columnaNueva;
    }
}

module.exports=paquetesLocalPosterior;