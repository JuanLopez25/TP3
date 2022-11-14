const CentroCalidad= require('../src/centroCalidad')
const Paquete = require('../src/paquete')

var paquete;
var lista;
var calidad;

beforeEach(()=> {
    calidad= new CentroCalidad(3);
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
    calidad.funcionesCentro.agregarACola(lista);
});

test("Crear centro de Calidad", () =>{
    expect(calidad.paquetes.length).toBe(0);
})


test("Procesar paquete centro de calidad", () =>{
    calidad.funcionesCentro.procesarPaquetes();
    expect(calidad.paquetes.length).toBe(1);
})


test("Procesar paquete centro de calidad", () =>{
    calidad.funcionesCentro.procesarPaquetes();
    calidad.funcionesCentro.terminarProceso(lista);
    expect(calidad.paquetes.length).toBe(0);
})






