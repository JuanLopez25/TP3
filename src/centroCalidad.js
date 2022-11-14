

function CentroCalidad(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola= [];
    this.colaSalida=[];
    this.nombre="CC";
    if (limiteColaDeEspera<2){
        limiteColaDeEspera=2;
    } else if (limiteColaDeEspera>5) {
        limiteColaDeEspera=5;
    }
    this.limiteCola= limiteColaDeEspera;
    this.procesarPaquetes = function() {
        var i=0;
        var paqueteTemporal;
        
        //this.agregarACola(paquetesAgregar);
        
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

        while (i<((this.cola).length)) {
            if (this.paquetes.length<1) {
                paqueteTemporal= this.cola[i];
                (this.paquetes).push(paqueteTemporal);
                this.cola.splice(i,1);
                i--;
            }
            i++;
        }
    }

    this.terminarProceso = function() {
        this.colaSalida=[];
        this.paquetes.forEach(paquete=>{
            this.colaSalida.push(paquete);
        });
        this.paquetes = [];
        return this.colaSalida;
    }

    this.agregarACola = function (paquetesAgregar) {
        var i=0;
        while ((this.cola.length)<(this.limiteCola)  &&  i<paquetesAgregar.length) {  //es menor que 6 por que 1 puede ser procesado, y 5 a la cola de espera
            this.cola.push(paquetesAgregar[i]);
            i++;
        }
    }

    this.puedeEntrarACola= function() {
        return (this.limiteCola-this.cola.length);
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

module.exports=CentroCalidad;

