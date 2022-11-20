var funcionesCentros= (function(){
    return {
        procesarPaquetes: function(cola,paquetes,cantidadProcesables) {
            var i=0;
            var paqueteTemporal;
            cola.forEach(elemento => elemento.aumentarTiempo());
            while (i<(cola.length)) {
                if (paquetes.length<cantidadProcesables) {
                    paqueteTemporal= cola[i];
                    (paquetes).push(paqueteTemporal);
                    cola.splice(i,1);
                    i--;
                }
                i++;
            }
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