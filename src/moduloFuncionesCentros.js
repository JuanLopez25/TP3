

var funcionesCentros= (function(colaCentro,paquetesProcesando,colaSalidaCentro,limiteColaEspera,cantidadProcesablesCentro){

    var cola=colaCentro;
    var paquetes=paquetesProcesando;
    var colaSalida=colaSalidaCentro;
    var limiteCola=limiteColaEspera;
    var cantidadProcesables=cantidadProcesablesCentro;
    return {
        procesarPaquetes: function() {
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
    
        
        terminarProceso: function() {
            paquetes.forEach(paquete=>{
                colaSalida.push(paquete);
            });
            paquetes = [];
            var entrega=[]
            colaSalida.forEach(paquete=>{
                entrega.push(paquete);
            });
            colaSalida=[];
            return entrega;
        },
    
        agregarACola : function (paquetesAgregar) {
            var i=0;
            while ((cola.length)<(limiteCola)  &&  i<paquetesAgregar.length) {  
                cola.push(paquetesAgregar[i]);
                i++;
            }
        },
    
        puedeEntrarACola: function() {
            return (limiteCola-cola.length);
        },
    }
})();


module.exports=funcionesCentros;