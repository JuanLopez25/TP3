

function CentroFacturacion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CF";
    if (limiteColaDeEspera<3){
        limiteColaDeEspera=3;
    } else if (limiteColaDeEspera>6) {
        limiteColaDeEspera=6;
    }
    this.limiteCola=limiteColaDeEspera;
    this.procesarPaquetes = function() {
        var i=0;
        var paqueteTemporal;
        
        
        this.cola.forEach(elemento => elemento.aumentarTiempo());

        this.cola.sort(function (a, b) {
            if (a.urgencia > b.urgencia) {
              return 1;
            }
            if (a.urgencia < b.urgencia) {
              return -1;
            }
            return 0;
        });

        
        while (i<(this.cola.length)) {
            if (this.paquetes.length<3) {
                paqueteTemporal= this.cola[i];
                (this.paquetes).push(paqueteTemporal);
                this.cola.splice(i,1);
                i--;
            }
            i++;
        }
    }

    this.terminarProceso = function() {
        this.paquetes.forEach(paquete=>{
            this.colaSalida.push(paquete);
        });
        this.paquetes = [];
        var entrega=[]
        this.colaSalida.forEach(paquete=>{
            entrega.push(paquete);
        });
        this.colaSalida=[];
        return entrega;
    }


    this.agregarACola = function (paquetesAgregar) {
        var i=0;
        while (((this.cola.length)<(this.limiteCola)    )  &&  i<paquetesAgregar.length) { 
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }

    this.puedeEntrarACola= function() {
        return (this.limiteCola-this.cola.length);  
    }

    
    

}




module.exports = CentroFacturacion;