const CentroFacturacion=require('../src/centroFacturacion')
const Paquete=require('../src/paquete')

test("Crear centro de facturacion", () =>{
    var facturacion= new CentroFacturacion();
    expect(facturacion.paquetes.length).toBe(0);
})

test("Procesar paquete centro de facturacion", () =>{
    var facturacion= new CentroFacturacion();
    var paquete= new Paquete("1")
    facturacion.procesarPaquete(paquete);
    expect(facturacion.paquetes.length).toBe(1);
})