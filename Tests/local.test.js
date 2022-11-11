const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paquete1;
var paquete2;
var lista;
var local;

beforeEach(()=> {
    local= new Local();
    paquete1 = new Paquete("1");
    paquete2= new Paquete("2");
    lista=[];
    lista.push(paquete1)
});

test("Verificar cantidad de paquetes en la cola del salida del local", () =>{
    expect(local.paquetesColaDeSalida()).toBe(0);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando paquetes", () =>{
    local.agregarPaquete(lista);
    expect(local.paquetesColaDeSalida()).toBe(1);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando 2 paquetes", () =>{
    lista.push(paquete2);
    local.agregarPaquete(lista);
    expect(local.paquetesColaDeSalida()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

test("Verificar cantidad de paquetes en centro de facturacion", () =>{
    expect(local.paquetesCentroDeFacturacion()).toBe(0);
})

test("Verificar cantidad de paquetes en centro de facturacion agregando 1 paquete y procesandolo para que llegue al centro de facturacion", () =>{
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    expect(local.paquetesCentroDeFacturacion()).toBe(1);
})


test("Verificar cantidad de paquetes en centro de facturacion agregando 2 paquetes y procesandolos para que lleguen al centro de facturacion", () =>{
    lista.push(paquete2);
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    expect(local.paquetesCentroDeFacturacion()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


test("Verificar cantidad de paquetes en centro de calidad", () =>{
    expect(local.paquetesCentroDeCalidad()).toBe(0);
})


test("Verificar cantidad de paquetes en centro de calidad agregando 1 paquete y procesandolo para que llegue al centro de calidad", () =>{
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeCalidad()).toBe(1);
})

test("Verificar cantidad de paquetes en centro de calidad agregando 2 paquetes y procesandolos para que lleguen al centro de calidad", () =>{
    lista.push(paquete2);
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeCalidad()).toBe(2);
})

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

test("Verificar cantidad de paquetes en centro de distribucion", () =>{
    expect(local.paquetesCentroDeDistribucion()).toBe(0);
})

test("Verificar cantidad de paquetes en centro de distribucion agregando 1 paquete y procesandolo para que llegue al centro de distribucion", () =>{
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeDistribucion()).toBe(1);
})

test("Verificar cantidad de paquetes en centro de distribucion agregando 2 paquete y procesandolo para que llegue al centro de distribucion", () =>{
    lista.push(paquete2);
    local.agregarPaquete(lista);
    local.avanzarTiempo();
    local.avanzarTiempo();
    local.avanzarTiempo();
    expect(local.paquetesCentroDeDistribucion()).toBe(2);
})