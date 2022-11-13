const MatrizLocales=require('../src/matrizLocales');
const Paquete= require('../src/paquete')

var matriz;

beforeEach(()=> {
    matriz= new MatrizLocales(4,["CF","CC","CD"]);
});

test("Crear matriz de locales", () =>{
    var strNombres=matriz.locales[0].nombre+matriz.locales[1].nombre+matriz.locales[2].nombre+matriz.locales[3].nombre;
    var numDestinos=matriz.locales[0].centrosCreados[4].numero+matriz.locales[1].centrosCreados[4].numero+matriz.locales[2].centrosCreados[4].numero+matriz.locales[3].centrosCreados[4].numero;
    expect(matriz.locales.length).toBe(4);
    expect(strNombres).toBe("ABCD");
    expect(numDestinos).toBe(10);
})

test("Agregar paquetes a la matriz", () =>{
    var paqueteMuyRapido=new Paquete(5,[],"muy rapido",4);
    var paqueteRapido=new Paquete(6,[],"rapido",4);
    matriz.agregarPaquetes([paqueteMuyRapido],"E");
    matriz.agregarPaquetes([paqueteRapido],"F"); 
    expect(matriz.locales[0].centrosCreados[0].paquetes.length).toBe(1);
    expect(matriz.locales[1].centrosCreados[0].paquetes.length).toBe(1);
})