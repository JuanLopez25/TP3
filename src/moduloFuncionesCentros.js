var funcionesCentros= (function(){
    return {
        procesarPaquetes: function(cola,paquetes,cantidadProcesables) {
            var listaAux=[];
            cola.forEach(elemento => elemento.aumentarTiempo());
            cola.forEach(elemento=>{
                if(((paquetes.length)>=cantidadProcesables)) {
                    listaAux.push(elemento);
                }else {
                    paquetes.push(elemento);
                }
            });
            
            return listaAux;
        },
    
        terminarProceso : function(paquetes,colaSalida) {
            paquetes.forEach(paquete=>{
                colaSalida.push(paquete);
            });
            var entrega=[]
            colaSalida.forEach(paquete=>{
                entrega.push(paquete);
            });
            return entrega;
        },
    
        agregarACola : function (cola,limiteCola,paquetesAgregar) {
            var noEntraron=[];
            paquetesAgregar.forEach(paquete=>{
                if (cola.length<limiteCola){
                    cola.push(paquete);
                } else {
                    noEntraron.push(paquete);
                }
            });
            return noEntraron;
        },
    
        ordenarPaquetes: function(cola) {
            cola.sort(function (a, b) {
                if (a.urgencia > b.urgencia) {
                  return 1;
                }
                if (a.urgencia < b.urgencia) {
                  return -1;
                }
                return 0;
            });
        }
    }
})();


module.exports=funcionesCentros;