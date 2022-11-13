const MatrizLocales=require('../src/matrizLocales');

test("Crear matriz de locales", () =>{
    var matriz= new MatrizLocales(4,["CF","CC","CD"]);
    var strNombres=matriz.locales[0].nombre+matriz.locales[1].nombre+matriz.locales[2].nombre+matriz.locales[3].nombre;
    expect(matriz.locales.length).toBe(4);
    expect(strNombres).toBe("ABCD");
})