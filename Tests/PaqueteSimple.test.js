const Paquete= require('../src/paquete')

test("jest", () =>{
    var paquete= new Paquete();
    paquete.siguienteEtapa();
    expect(paquete.estadoPaquete()).toBe("Centro de facturacion");
})