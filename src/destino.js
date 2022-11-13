function Destino(numero){
    this.nombre=numero;
    this.paquetes=[];
    this.procesarPaquetes = function(paquetesAgregar) {
        var i=0;
        while (i<(paquetesAgregar.length)) {
            (this.paquetes).push(paquetesAgregar[i]);
            i++;
        }
    }

    this.informarLlegadas= function(){
        var respuesta="";
        this.paquetes.forEach(elemento => respuesta+=elemento.informe());
        this.paquetes=[];
        return respuesta;
    }
    
}

module.exports= Destino;