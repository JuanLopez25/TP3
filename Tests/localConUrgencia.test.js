const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;

beforeEach(()=> {
    paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    paqueteRapido=new Paquete("1",[],"rapido");
    paqueteNormal=new Paquete("1",[],"normal");
    local= new Local("A");
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal,paqueteRapido,paqueteRapido,paqueteMuyRapido];
    local.agregarPaquetes(lista);
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var urgenciaTotal=0;
    local.colaDeSalida.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("5 paquetes a centro de Facturacion y procesa los 3 con mayor urgencia", () =>{
    local.avanzarTiempo(1);   //facturacion procesando 3 y 2 en cola
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    local.agregarPaquetes(lista2);  //Cola de salida agrendando 5
    local.avanzarTiempo(1); //facturacion procesando 3 y cola de 4 
    var urgenciaTotal=0;
    local.centroDeFacturacion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(12);
})

test("3 paquetes a centro de calidad y procesa el de mayor urgencia", () =>{
    local.avanzarTiempo(2);
    var urgenciaTotal=0;
    local.centroDeFacturacion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(4);
})