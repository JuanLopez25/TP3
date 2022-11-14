const Local= require('../src/local')
const Paquete= require('../src/paquete')
const MatrizLocales= require('../src/matrizLocales');
const Excepcion= require('../src/excepcion')


test("Creamos una excepecion con los locales ", () =>{
    expect(()=>new MatrizLocales(5,["CF","CC","CD"],[[3,2,5],[3,2,5],[3,2,5],[3,2,5],[3,2,5]])).toThrow(new Excepcion("no se puede crear la matriz porque los centros son menos que la cantidad de locales"));
})