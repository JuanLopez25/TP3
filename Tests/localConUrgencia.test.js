const Local= require('../src/local')
const Paquete= require('../src/paquete')
const CentroDistribucion=require('../src/centroDistribucion')

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;
var reseter;

beforeEach(()=> {
    reseter= new Paquete("1",[],"muy rapido");
    reseter.resetearID(); //Creamos este paquete para resetear el id, y que los paquetes de este test empiezen desde el id 1;
    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteMuyRapido2=new Paquete(2,[],"muy rapido",4);
    paqueteRapido=new Paquete(3,[],"rapido",4);
    paqueteRapido2=new Paquete(4,[],"rapido",4);
    paqueteNormal=new Paquete(5,[],"normal",4);
    paqueteNormal2=new Paquete(6,[],"normal",4);
    local= new Local(["CF","CC","CD"]);
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
    local.agregarPaquetes(lista);
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var urgenciaTotal=0;
    local.centrosCreados[0].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("5 paquetes a centro de Facturacion y procesa los 3 con mayor urgencia", () =>{
    local.avanzarTiempo(1);   
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    local.agregarPaquetes(lista2); 
    local.avanzarTiempo(1); 
    var urgenciaTotal=0;
    local.centrosCreados[1].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(12);
})

test("3 paquetes a centro de calidad y procesa el de mayor urgencia", () =>{
    local.avanzarTiempo(2); 
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    local.agregarPaquetes(lista2);
    local.avanzarTiempo(2);  
    var urgenciaTotal=0;
    local.centrosCreados[2].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(4);
})

test("12 paquetes a centro de distribucion y procesa los 10 con mayor urgencia", () =>{
    var distribucion= new CentroDistribucion();
    var paqueteMuyRapido3=new Paquete(7,[],"muy rapido",4);
    var paqueteMuyRapido4=new Paquete(8,[],"muy rapido",4);
    var paqueteRapido3=new Paquete(9,[],"rapido",4);
    var paqueteRapido4=new Paquete(10,[],"rapido",4);
    var paqueteNormal3=new Paquete(11,[],"normal",4);
    var paqueteNormal4=new Paquete(12,[],"normal",4);
    var lista2=[paqueteMuyRapido3,paqueteNormal3,paqueteMuyRapido4,paqueteRapido3,paqueteRapido4,paqueteNormal4];;
    lista2= lista.concat(lista2);
    distribucion.procesarPaquetes(lista2);
    var urgenciaTotal=0;
    distribucion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(56);
})

test("Comparar urgencia con tiempo de llegada", () =>{
    local.centrosCreados[0].paquetes;
    local.avanzarTiempo(4);  //Llega el primer paquete, el "muy rapido"
    expect(local.informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 4, llego a tiempo\n");
})

test("Comparar urgencia con tiempo de llegada del segundo paquete muy rapido, el cual llega a destiempo", () =>{
    local.avanzarTiempo(4);
    local.informarPaquetesEnDestino();
    local.avanzarTiempo(1);  //Llega el primer paquete, el "muy rapido"
    expect(local.informarPaquetesEnDestino()).toBe("P2: Destino 2, Urgencia 4, no llego a tiempo\n");
})