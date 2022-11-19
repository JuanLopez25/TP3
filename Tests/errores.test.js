
const MatrizLocales= require('../src/matrizLocales');



test("Creamos una excepecion con los locales ", () =>{
    expect(()=>new MatrizLocales(["CF","CC","CD"],[[3,2,5],[3,2,5],[3,2,5],[3,2,5],[3,2,5]])).toThrow(new Error("no se puede crear la matriz porque los centros son menos que la cantidad de locales"));
})