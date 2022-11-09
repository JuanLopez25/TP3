const Paquete= require('../src/paquete')

test("jest", () =>{
    var paquete= new Paquete();
    expect(paquete.EstadoPaquete()).toBe("Local");
})