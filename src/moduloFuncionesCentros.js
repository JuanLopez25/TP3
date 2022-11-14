var funcionesCentros= (function(){
    return {
        procesarPaquetes: function(cola,paquetes,cantidadProcesables) {
            var i=0;
            var paqueteTemporal;
            cola.forEach(elemento => elemento.aumentarTiempo());
            cola.sort(function (a, b) {
                if (a.urgencia > b.urgencia) {
                  return 1;
                }
                if (a.urgencia < b.urgencia) {
                  return -1;
                }
                return 0;
            });
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
            paquetes.forEach(paquete=>{
                paquetes.pop();
            })
            
            colaSalida.forEach(paquete=>{
                colaSalida.pop();
            })
            return entrega;
        },
    
        agregarACola : function (cola,limiteCola,paquetesAgregar) {
            var i=0;
            while ((cola.length)<(limiteCola)  &&  i<paquetesAgregar.length) {  
                cola.push(paquetesAgregar[i]);
                i++;
            }
        },
    
        puedeEntrarACola: function(limiteCola,cola) {
            return (limiteCola-cola.length);
        },
    }
})();


module.exports=funcionesCentros;