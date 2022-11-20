const FuncionesCentros= require('./moduloFuncionesCentros');
const Paquete= require('./paquete')
const funcionesColaLimite=require('./moduloFuncionesColaLimite');

function CentroDistribucion(limiteColaDeEspera) {
    this.paquetes=[];
    this.cola=[];
    this.colaSalida=[];
    this.nombre="CD";
    this.funcionesCentros=FuncionesCentros;
    
    this.funcionesColaLimite=funcionesColaLimite;
    this.limiteCola=this.funcionesColaLimite.limitesCola(10,30,limiteColaDeEspera);

    this.procesarPaquetes = function() {
        this.unirPaquetes();
        this.funcionesCentros.ordenarPaquetes(this.cola);
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,10);
    }
    this.terminarProceso = function() {
        var entrega=this.funcionesCentros.terminarProceso(this.paquetes,this.colaSalida);
        this.paquetes=[];
        this.colaSalida=[];
        return entrega;
    }
    this.agregarACola = function (paquetesAgregar) {
        var noEntraron=this.funcionesCentros.agregarACola(this.cola,this.limiteCola,paquetesAgregar);
        return noEntraron;
    }
    this.espacioEnCola= function() {
        var cantidad= this.funcionesColaLimite.espacioEnCola(this.limiteCola,this.cola);
        return cantidad;
    }
    
    this.unirPaquetes = function(){
        var colaAux=[];
        var destinoAnterior=[];
        var listaAux;
        var paqueteUnion;
        this.cola.forEach(paquete1 => {
            if(!destinoAnterior.includes(paquete1.destino)){
                listaAux=[paquete1];        
                this.cola.forEach(paquete2 => {
                    if(paquete1.destino==paquete2.destino && !(paquete1===paquete2)){
                        listaAux.push(paquete2);
                    }
                });
                this.funcionesCentros.ordenarPaquetes(listaAux);
                paqueteUnion= new Paquete(listaAux[0].destino);
                paqueteUnion.agregarProductos(listaAux);
                paqueteUnion.tiempo=paquete1.tiempo;
                paqueteUnion.urgencia=listaAux[0].urgencia;
                paqueteUnion.columnasQueQuedan=listaAux[0].columnasQueQuedan;
                paqueteUnion.id=paquete1.id;
                colaAux.push(paqueteUnion);
                destinoAnterior.push(paquete1.destino);
            }
        });
        this.cola=colaAux;
    }
}

module.exports=CentroDistribucion;