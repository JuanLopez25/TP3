const CentroCalidad= require('../src/centroCalidad')

test("Crear centro de Calidad", () =>{
    var calidad= new CentroCalidad();
    expect(calidad.paquetes.length).toBe(0);
})


test("Procesar paquete centro de facturacion", () =>{
    var calidad= new CentroCalidad();
    var paquete= new Paquete("1")
    calidad.procesarPaquete(paquete);
    expect(calidad.paquetes.length).toBe(1);
})
