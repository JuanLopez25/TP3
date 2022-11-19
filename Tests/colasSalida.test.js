const Local= require('../src/local')
const Paquete= require('../src/paquete')
const MatrizLocales= require('../src/matrizLocales');

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;

var paqueteMuyRapido2;
var paqueteRapido2;
var paqueteNormal2;

var lista;
var matriz;
var reseter2;

beforeEach(()=> {
    reseter2= new Local(["CF","CC","CD"],[6,2,14]);
    reseter2.resetearID();
    

    paqueteMuyRapido=new Paquete(1,"muy rapido",4);
    paqueteMuyRapido.resetearID();
    paqueteMuyRapido2=new Paquete(1,"muy rapido",4);
    paqueteRapido=new Paquete(1,"rapido",4);
    paqueteRapido2=new Paquete(1,"rapido",4);
    paqueteNormal=new Paquete(1,"normal",4);
    paqueteNormal2=new Paquete(1,"normal",4);
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia procesa, y luego deja 2 en la cola de salida", () =>{
    matriz= new MatrizLocales(["CF","CC","CC","CD","CF"],[[3,2,5,24,6]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();
    expect(matriz.locales[0].centros[0].colaSalida.length).toBe(2);
})

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia, procesa dos tiempos dejando vacia a la cola de salida de CS y luego en CF deja 1 en la cola de salida luego de haber 3 y pasado 2 a CC", () =>{
    matriz= new MatrizLocales(["CF","CC","CC","CD","CF"],[[3,2,5,24,6]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();
    matriz.avanzarTiempo();
    expect(matriz.locales[0].centros[1].colaSalida.length).toBe(1);
    expect(matriz.locales[0].centros[0].colaSalida.length).toBe(0);
})