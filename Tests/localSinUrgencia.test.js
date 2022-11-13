const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paquete1;
var paquete2;
var lista;
var local;

beforeEach(()=> {
    local= new Local(["CF","CC","CD"],[3,2,19]);
    paquete1 = new Paquete("1");
    paquete2= new Paquete("2");
    lista=[];
    lista.push(paquete1)
});

test("Verificar cantidad de paquetes en la cola del salida del local", () =>{
    expect(local.paquetesColaDeSalida()).toBe(0);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando paquetes", () =>{
    local.agregarPaquetes(lista);
    expect(local.paquetesColaDeSalida()).toBe(1);
})

test("Verificar cantidad de paquetes en la cola del salida del local agregando 2 paquetes", () =>{
    lista.push(paquete2);
    local.agregarPaquetes(lista);
    expect(local.paquetesColaDeSalida()).toBe(2);
})


