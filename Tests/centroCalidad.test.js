const CentroCalidad= require('../src/centroCalidad')
const Paquete = require('../src/paquete')

var paquete;
var lista;
var calidad;

beforeEach(()=> {
    calidad= new CentroCalidad();
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
});

test("Crear centro de Calidad", () =>{
    expect(calidad.paquetes.length).toBe(0);
})


test("Procesar paquete centro de calidad", () =>{
    calidad.procesarPaquete(lista);
    expect(calidad.paquetes.length).toBe(1);
})


test("Procesar paquete centro de calidad", () =>{
    calidad.procesarPaquete(lista);
    calidad.terminarProceso(lista);
    expect(calidad.paquetes.length).toBe(0);
})