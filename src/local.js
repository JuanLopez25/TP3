

function Local() {
    
    this.paquetes=0;

    this.colaDeSalida= function() {
        return this.paquetes;
    }

     
    this.agregarPaquete= function() {
        this.paquetes+=1;
    }
}


module.exports= Local;