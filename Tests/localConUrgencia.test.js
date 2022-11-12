const Local= require('../src/local')
const Paquete= require('../src/paquete')

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    var paqueteRapido=new Paquete("1",[],"rapido");
    var paqueteNormal=new Paquete("1",[],"normal");
    var local= new Local("A");
    var lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal,paqueteRapido,paqueteRapido,paqueteMuyRapido];
    local.agregarPaquete(lista);
    var urgenciaTotal=0;
    local.colaDeSalida.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})