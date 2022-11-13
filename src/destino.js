function Destino(numero){
    this.numero=numero;
    this.paquetes=[];
    this.nombre="D";
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