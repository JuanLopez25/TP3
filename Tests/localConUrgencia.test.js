const Local= require('../src/local')
const Paquete= require('../src/paquete')
const CentroDistribucion=require('../src/centroDistribucion')
const MatrizLocales= require('../src/matrizLocales');

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;
var reseter;
var reseter2;
var matriz;

beforeEach(()=> {
    reseter2= new Local(["CF","CC","CD"],[6,2,14]);
    reseter2.resetearID();
    reseter= new Paquete(1,[],"muy rapido");
    reseter.resetearID(); //Creamos este paquete para resetear el id, y que los paquetes de este test empiezen desde el id 1;


    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteMuyRapido2=new Paquete(1,[],"muy rapido",4);
    paqueteRapido=new Paquete(3,[],"rapido",4);
    paqueteRapido2=new Paquete(4,[],"rapido",4);
    paqueteNormal=new Paquete(5,[],"normal",4);
    paqueteNormal2=new Paquete(6,[],"normal",4);
    matriz= new MatrizLocales(1,["CF","CC","CD"],[[3,3,24]]);
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
    matriz.agregarPaquetes(lista,"A");
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var urgenciaTotal=0;
    matriz.locales[0].centrosCreados[0].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("5 paquetes a centro de Facturacion y procesa los 3 con mayor urgencia", () =>{
    matriz.avanzarTiempo();   
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    matriz.agregarPaquetes(lista2,"A");
    matriz.avanzarTiempo();  
    var urgenciaTotal=0;
    matriz.locales[0].centrosCreados[1].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(12);
})

test("3 paquetes a centro de calidad y procesa el de mayor urgencia", () =>{
    matriz.avanzarTiempo();
    matriz.avanzarTiempo();
    matriz.avanzarTiempo();
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    matriz.agregarPaquetes(lista2,"A");
    matriz.avanzarTiempo();
    matriz.avanzarTiempo(); 
    var urgenciaTotal=0;
    matriz.locales[0].centrosCreados[2].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(4);
})



test("Comparar urgencia con tiempo de llegada", () =>{
    matriz.avanzarTiempo();   //Llega el primer paquete, el "muy rapido"
    matriz.avanzarTiempo(); 
    matriz.avanzarTiempo(); 
    matriz.avanzarTiempo(); 
    expect(matriz.locales[0].informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 4, llego a tiempo\n");
})

test("Comparar urgencia con tiempo de llegada del segundo paquete muy rapido, el cual llega a destiempo", () =>{
    matriz.avanzarTiempo();
    matriz.avanzarTiempo(); 
    matriz.avanzarTiempo(); 
    matriz.avanzarTiempo();
    console.log(matriz.locales[0].centrosCreados[4].paquetes);
    console.log(matriz.locales[0].informarPaquetesEnDestino()+"hola");
    console.log(matriz.locales[0].centrosCreados[4].paquetes);
    matriz.avanzarTiempo();   //Llega el primer paquete, el "muy rapido"
    console.log(matriz.locales[0].centrosCreados[4].paquetes);
    expect(matriz.locales[0].informarPaquetesEnDestino()).toBe("P2: Destino 1, Urgencia 4, no llego a tiempo\n");
})