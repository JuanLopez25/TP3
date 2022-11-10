const Local= require('../src/local')
const Paquete= require('../src/paquete')

test("Verificar cantidad de paquetes en la cola del salida del local", () =>{
    var local= new Local();
    expect(local.colaDeSalida()).toBe(0);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando paquetes", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    expect(local.colaDeSalida()).toBe(1);
})