const CentroCalidad= require('../src/centroCalidad')
const Paquete = require('../src/paquete')
test("Crear centro de Calidad", () =>{
    var calidad= new CentroCalidad();
    expect(calidad.paquetes.length).toBe(0);
})


test("Procesar paquete centro de calidad", () =>{
    var calidad= new CentroCalidad();
    var paquete= new Paquete("1")
    calidad.procesarPaquete(paquete);
    expect(calidad.paquetes.length).toBe(1);
})


test("Procesar paquete centro de calidad", () =>{
    var calidad = new CentroCalidad();
    var paquete = new Paquete("1");
    calidad.procesarPaquete(paquete);
    calidad.terminarProceso(paquete);
    expect(calidad.paquetes.length).toBe(0);
})