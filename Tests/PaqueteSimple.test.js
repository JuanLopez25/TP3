const Paquete= require('../src/paquete')

test("jest", () =>{
    var paquete= new Paquete();
    expect(paquete.estadoPaquete()).toBe("Local");
})