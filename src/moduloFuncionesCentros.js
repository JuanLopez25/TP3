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
            
            cola.forEach(paquete=>{
                if (paquetes.length<cantidadProcesables) {
                    paqueteTemporal= paquete;
                    (paquetes).push(paqueteTemporal);
                    cola.splice(i,1);
                    i--;
                }
                i++;
            })

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
            var i=0;
            while ((cola.length)<(limiteCola)  &&  i<paquetesAgregar.length) {  
                cola.push(paquetesAgregar[i]);
                i++;
            }
        },
    
        puedeEntrarACola: function(limiteCola,cola) {
            return (limiteCola-cola.length);
        },

        limitesCola:function(num1,num2,limiteColaDeEspera) {
            if (limiteColaDeEspera<num1){
                limiteColaDeEspera=num1;
            } else if (limiteColaDeEspera>num2) {
                limiteColaDeEspera=num2;
            }
            return limiteColaDeEspera;
        }
    }
})();


module.exports=funcionesCentros;