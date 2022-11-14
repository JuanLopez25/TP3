


function ColaSalida(paquete) {
    this.paquetes=[];
    this.cola=[];
    this.nombre="CS";
    this.colaSalida=[];
    this.funcionesCentros=FuncionesCentros;  
    this.procesarPaquetes = function() {
        this.funcionesCentros.procesarPaquetes(this.cola,this.paquetes,5);
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
}

module.exports= ColaSalida;