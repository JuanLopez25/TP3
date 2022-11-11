const ColaSalida= require('../src/colaSalida');
const Paquete = require('../src/paquete');

var paquete;
var lista;
var salida;

beforeEach(()=> {
    salida= new ColaSalida();
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
});

test("Crear cola salida", () =>{
    expect(salida.paquetes.length).toBe(0);
})

test("Entra un paquete a la cola de salida", () =>{
    salida.procesarPaquete(lista);
    expect(salida.paquetes.length).toBe(1);
})

test("Termino de procesar paquetes", () =>{
    salida.procesarPaquete(lista);
    salida.terminarProceso();
    expect(salida.paquetes.length).toBe(0);
})

