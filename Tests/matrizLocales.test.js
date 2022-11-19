const MatrizLocales=require('../src/matrizLocales');
const Paquete= require('../src/paquete')
const Local= require('../src/local')

var matriz;
var reseter;
var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;

beforeEach(()=> {
    reseter= new Local(["CF","CC","CD"],[6,2,14]);
    reseter.resetearID();
    matriz= new MatrizLocales(["CF","CC","CD"],[[4,3,23],[5,4,10],[6,2,14]]);
    paqueteMuyRapido=new Paquete(1,"muy rapido",4);
    paqueteRapido=new Paquete(2,"rapido",4);
    paqueteNormal=new Paquete(3,"normal",4);
});

test("Crear matriz de locales", () =>{
    expect(matriz.locales.length).toBe(3);
})


test("Crear matriz de locales y analizar los nombres", () =>{
    var strNombres=matriz.locales[0].nombre+matriz.locales[1].nombre+matriz.locales[2].nombre;
    expect(strNombres).toBe("ABC");
   
})



test("Crear matriz de locales y analizo los id de los destino", () =>{
    var numDestinos=0;
    var fila=1;
    matriz.locales.forEach(local => {
        numDestinos+=fila;
        fila++;
    });
    expect(numDestinos).toBe(6);
})




test("Agregar paquetes a la matriz", () =>{
    matriz.agregarPaquetes([paqueteMuyRapido],"A");
    matriz.agregarPaquetes([paqueteRapido],"B"); 
    expect(matriz.locales[0].centros[0].paquetes.length).toBe(1);
    expect(matriz.locales[1].centros[0].paquetes.length).toBe(1);
})

test("Avanzar tiempo en los locales de la matriz", () =>{
    matriz.agregarPaquetes([paqueteMuyRapido],"A");
    matriz.agregarPaquetes([paqueteRapido],"B");
    matriz.agregarPaquetes([paqueteNormal],"C");
    matriz.avanzarTiempo(1);
    expect(matriz.locales[0].centros[1].paquetes.length).toBe(2);
    expect(matriz.locales[1].centros[1].paquetes.length).toBe(1);
    expect(matriz.locales[2].centros[1].paquetes.length).toBe(0);
})


test("Crear Local con urgencia invalida para el CF", () =>{
    var local2= new Local(["CF","CC","CD"],[2,3,23]);
    expect(local2.centros[1].limiteCola).toBe(3);
})


test("Crear Local con urgencia invalida para el CC", () =>{
    var local2= new Local(["CF","CC","CD"],[2,1,1]);
    expect(local2.centros[2].limiteCola).toBe(2);
})

test("Crear Local con urgencia invalida para el CD", () =>{
    var local2= new Local(["CF","CC","CD"],[2,1,1]);
    expect(local2.centros[3].limiteCola).toBe(10);
})

