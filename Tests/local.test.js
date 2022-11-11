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


test("Verificar cantidad de paquetes en la cola del salida del local agregando 2 paquetes", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    expect(local.paquetesColaDeSalida()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


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


test("Verificar cantidad de paquetes en centro de facturacion agregando 2 paquetes y procesandolos para que lleguen al centro de facturacion", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    local.avanzarTiempo();
    expect(local.paquetesCentroDeFacturacion()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


test("Verificar cantidad de paquetes en centro de calidad", () =>{
    var local= new Local();
    expect(local.paquetesCentroDeCalidad()).toBe(0);
})


test("Verificar cantidad de paquetes en centro de calidad agregando 1 paquete y procesandolo para que llegue al centro de calidad", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeCalidad()).toBe(1);
})

test("Verificar cantidad de paquetes en centro de calidad agregando 2 paquetes y procesandolos para que lleguen al centro de calidad", () =>{
    var local= new Local();
    var paquete= new Paquete();
    local.agregarPaquete(paquete);
    local.agregarPaquete(paquete);
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeCalidad()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

test("Verificar cantidad de paquetes en centro de distribucion", () =>{
    var local= new Local();
    expect(local.paquetesCentroDeDistribucion()).toBe(0);
})