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
    salida.procesarPaquetes(lista);
    expect(salida.paquetes.length).toBe(1);
})

test("Termino de procesar paquetes", () =>{
    salida.procesarPaquetes(lista);
    salida.terminarProceso();
    expect(salida.paquetes.length).toBe(0);
})

test("Entran 5 paquetes a la cola de salida", () =>{
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    salida.procesarPaquetes(lista);
    expect(salida.paquetes.length).toBe(5);
})

test("Entran 6 paquetes a la cola de salida y deberian entrar nada mas que 5 ya que este es el limite", () =>{
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    salida.procesarPaquetes(lista);
    expect(salida.paquetes.length).toBe(5);
})

