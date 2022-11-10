const Local= require('../src/local')


test("Verificar cantidad de paquetes en la cola del salida del local", () =>{
    var local= new Local();
    expect(local.colaDeSalida()).toBe(0);
})
