const MatrizLocales=require('../src/matrizLocales');

test("Crear matriz de locales", () =>{
    var matriz= new MatrizLocales(4,["CF","CC","CD"]);
    var strNombres=matriz.locales[0].nombre+matriz.locales[1].nombre+matriz.locales[2].nombre+matriz.locales[3].nombre;
    var numDestinos=matriz.locales[0].centrosCreados[4].numero+matriz.locales[1].centrosCreados[4].numero+matriz.locales[2].centrosCreados[4].numero+matriz.locales[3].centrosCreados[4].numero;
    expect(matriz.locales.length).toBe(4);
    expect(strNombres).toBe("ABCD");
    expect(numDestinos).toBe(10);
})

test("Agregar paquetes a la matriz", () =>{
    var matriz= new MatrizLocales(4,["CF","CC","CD"]);
    var paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    var paqueteRapido=new Paquete(2,[],"rapido",4);
    matriz.agregarPaquetes(paqueteMuyRapido,"A");
    matriz.agregarPaquetes(paqueteRapido,"B"); 
    expect(matriz.locales[0].centrosCreados[0].paquetes.length).toBe(1);
    expect(matriz.locales[1].centrosCreados[0].paquetes.length).toBe(1);
})