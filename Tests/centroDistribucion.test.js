const CentroDistribucion=require('../src/centroDistribucion')


test("Crear centro de distribucion", () =>{
    var distribucion = new CentroDistribucion();
    expect(distribucion.paquetes.length).toBe(0);
})
