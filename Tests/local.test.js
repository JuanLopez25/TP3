const Local= require('../src/local')
const Paquete= require('../src/paquete')

test("Verificar cantidad de paquetes en la cola del salida del local", () =>{
    var local= new Local();
    expect(local.paquetesColaDeSalida()).toBe(0);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando paquetes", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    expect(local.paquetesColaDeSalida()).toBe(1);
})


test("Verificar cantidad de paquetes en la cola del salida del local agregando 5 paquetes", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    expect(local.paquetesColaDeSalida()).toBe(5);
})


test("Verificar cantidad de paquetes en centro de facturacion", () =>{
    var local= new Local();
    expect(local.paquetesCentroDeFacturacion()).toBe(0);
})


test("Verificar cantidad de paquetes en centro de facturacion agregando 1 paquete y procesandolo para que llegue al centro de facturacion", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.avanzarTiempo();
    expect(local.paquetesCentroDeFacturacion()).toBe(1);
})