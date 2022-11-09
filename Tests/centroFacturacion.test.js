const CentroFacturacion=require('../src/centroFacturacion')

test("Crear centro de facturacion", () =>{
    var facturacion= new CentroFacturacion();
    expect(facturacion.paquetes.length).toBe(0);
})