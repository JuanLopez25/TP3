const Local= require('../src/local')
const Paquete= require('../src/paquete')
const MatrizLocales= require('../src/matrizLocales');
const Excepcion= require('../src/excepcion')


test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var matriz;
    try {
        matriz= new MatrizLocales(5,["CF","CC","CD"],[[3,2,5],[3,2,5],[3,2,5],[3,2,5],[3,2,5]]);
    } catch (Excepcion) {
    }
    expect(Excepcion).toThrow("no se puede crear la matriz porque los centros son menos que la cantidad de locales");
})