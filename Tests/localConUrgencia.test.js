const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paqueteMuyRapido
var paqueteRapido
var paqueteNormal
var local
var lista

beforeEach(()=> {
    paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    paqueteRapido=new Paquete("1",[],"rapido");
    paqueteNormal=new Paquete("1",[],"normal");
    local= new Local("A");
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal,paqueteRapido,paqueteRapido,paqueteMuyRapido];
    local.agregarPaquete(lista);
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var urgenciaTotal=0;
    local.colaDeSalida.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("5 paquetes a centro de Facturacion y procesa los 3 con mayor urgencia", () =>{
    var urgenciaTotal=0;
    local.centroDeFacturacion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(14);
})