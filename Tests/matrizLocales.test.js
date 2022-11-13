const MatrizLocales=require('../src/matrizLocales');
const Paquete= require('../src/paquete')
const Local= require('../src/local')

var matriz;
var reseter;
var paqueteMuyRapido;
var paqueteRapido;
var paqueteRapido2;
var paqueteNormal;

beforeEach(()=> {
    reseter= new Local(["CF","CC","CD"]);
    reseter.resetearID();
    matriz= new MatrizLocales(4,["CF","CC","CD"]);
    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteRapido=new Paquete(2,[],"rapido",4);
    paqueteNormal=new Paquete(3,[],"normal",4);
    paqueteRapido2=new Paquete(4,[],"rapido",4);
});

test("Crear matriz de locales", () =>{
    var strNombres=matriz.locales[0].nombre+matriz.locales[1].nombre+matriz.locales[2].nombre+matriz.locales[3].nombre;
    var numDestinos=matriz.locales[0].centrosCreados[4].numero+matriz.locales[1].centrosCreados[4].numero+matriz.locales[2].centrosCreados[4].numero+matriz.locales[3].centrosCreados[4].numero;
    expect(matriz.locales.length).toBe(4);
    expect(strNombres).toBe("ABCD");
    expect(numDestinos).toBe(10);
})

test("Agregar paquetes a la matriz", () =>{
    matriz.agregarPaquetes([paqueteMuyRapido],"A");
    matriz.agregarPaquetes([paqueteRapido],"B"); 
    expect(matriz.locales[0].centrosCreados[0].paquetes.length).toBe(1);
    expect(matriz.locales[1].centrosCreados[0].paquetes.length).toBe(1);
})

test("Avanzar tiempo en los locales de la matriz", () =>{
    matriz.agregarPaquetes([paqueteMuyRapido],"A");
    matriz.agregarPaquetes([paqueteRapido],"B");
    matriz.agregarPaquetes([paqueteNormal],"C");
    matriz.agregarPaquetes([paqueteRapido2],"D");
    matriz.avanzarTiempo(1);
    expect(matriz.locales[0].centrosCreados[1].paquetes.length).toBe(1);
    expect(matriz.locales[1].centrosCreados[1].paquetes.length).toBe(1);
    expect(matriz.locales[2].centrosCreados[1].paquetes.length).toBe(1);
    expect(matriz.locales[3].centrosCreados[1].paquetes.length).toBe(1);
})