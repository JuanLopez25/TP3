test("Crear matriz de locales", () =>{
    var matriz= new MatrizLocales(4,["CF","CC","CD"]);
    expect(matriz.locales.length).toBe(4);
})