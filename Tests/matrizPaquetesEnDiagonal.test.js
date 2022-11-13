const MatrizLocales=require('../src/matrizLocales');
const Paquete= require('../src/paquete')
const Local= require('../src/local')

var matriz;
var reseter;
var paqueteMuyRapido;
var paqueteRapido;
var paqueteRapido2;
var paqueteNormal;
var lista;

beforeEach(()=> {
    reseter= new Local(["CF","CC","CD"],[6,2,14]);
    reseter.resetearID();
    matriz= new MatrizLocales(4,["CF","CC","CD"],[[4,3,23],[5,4,10],[6,2,14]]);
    lista=[];
    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteRapido=new Paquete(2,[],"rapido",4);
    paqueteNormal=new Paquete(3,[],"normal",4);
    paqueteRapido2=new Paquete(4,[],"rapido",4);
    lista.push(paqueteMuyRapido);
    lista.push(paqueteRapido);
    lista.push(paqueteNormal);
    lista.push(paqueteRapido2);
    matriz.agregarPaquetes(lista,"A");
});



test("Proceso paquetes en un unico local", () =>{
    expect(matriz.locales[0].centrosCreados[0].paquetes.length).toBe(4);
})



test("Proceso paquetes en un unico local y avanzo de manera tal que se distribuyan en el local A y B", () =>{
    matriz.avanzarTiempo(1);
    expect(matriz.locales[1].centrosCreados[1].paquetes.length).toBe(1);
})