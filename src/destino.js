
function Destino(){
    this.paquetes=[];
    this.cola=[];
    this.nombre="D";
    this.procesarPaquetes = function(paquetesAgregar) {
        paquetesAgregar.forEach(paquete=>{
            this.paquetes.push(paquete);
        });
    }

    this.informarLlegadas= function(){
        var respuesta="";
        this.paquetes.forEach(elemento => respuesta+=elemento.informe());
        this.paquetes=[];
        return respuesta;
    }
    
}

module.exports= Destino;