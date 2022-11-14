

function CentroFacturacion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
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
        var entrega= this.paquetes;
        this.paquetes = [];
        return entrega;
    }


    this.agregarACola = function (paquetesAgregar) {
        var i=0;
        while (((this.cola.length)<(this.limiteCola)    )  &&  i<paquetesAgregar.length) {  //es menor que 9 por que 3 pueden ser procesados, y 6 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }

    this.puedeEntrarACola= function() {
        return (this.limiteCola-this.cola.length);  //me dice la suma entre los que pueden entrar todavia a ser procesados y los que pueden entrar a la cola
    }

    
    this.prioridadCola= function() {
        var prio;
        if (this.cola.length==0){
            prio=1;   //nadie en la cola
        } else if (this.cola.length<(this.limiteCola+10)) {
            prio=2;   //se puede entrar a la cola
        } else {
            prio=3;   //no se puede entrar a la cola
        }

        return prio;
    }

}




module.exports = CentroFacturacion;