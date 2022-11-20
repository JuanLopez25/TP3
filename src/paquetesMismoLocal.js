function paquetesMismoLocal(paquetesAProcesar) {
    this.paquetes=paquetesAProcesar;
    this.limite=0;
    this.fila=0;
    this.columna=0;
    
    this.limites = function(paquete) {
        return (paquete.subirOBajar==2 || paquete.subirOBajar==0  || paquete.subirOBajar==-2 || paquete.subirOBajar==4);
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