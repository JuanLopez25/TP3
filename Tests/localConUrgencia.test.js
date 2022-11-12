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
    paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    paqueteMuyRapido2=new Paquete("1",[],"muy rapido");
    paqueteRapido=new Paquete("1",[],"rapido");
    paqueteRapido2=new Paquete("1",[],"rapido");
    paqueteNormal=new Paquete("1",[],"normal");
    paqueteNormal2=new Paquete("1",[],"normal");
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
    var lista2=[paqueteMuyRapido,paqueteNormal,paqueteNormal,paqueteRapido,paqueteRapido,paqueteMuyRapido];;
    lista2= lista2.concat(lista2);
    distribucion.procesarPaquetes(lista2);
    var urgenciaTotal=0;
    distribucion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(56);
})

test("Comparar urgencia con tiempo de llegada", () =>{
    local.avanzarTiempo(4);  //Llega el primer paquete, el "muy rapido"
    expect(local.informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 4, llego a tiempo\n");
})

test("Comparar urgencia con tiempo de llegada del segundo paquete muy rapido, el cual llega a destiempo", () =>{
    local.avanzarTiempo(4);
    local.informarPaquetesEnDestino();
    local.avanzarTiempo(1);  //Llega el primer paquete, el "muy rapido"
    expect(local.informarPaquetesEnDestino()).toBe("P2: Destino 1, Urgencia 4, no llego a tiempo\n");
})