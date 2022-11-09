

test("Crear centro de facturacion", () =>{
    var facturacion= new centroFacturacion();
    expect(facturacion.paquetes.length).toBe(0);
})