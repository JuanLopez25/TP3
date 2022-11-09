const colaSalida= require('../src/colaSalida');
const Paquete = require('../src/paquete');

test("Crear cola salida", () =>{
    var salida= new colaSalida();
    expect(salida.paquetes.length).toBe(0);
})



test("Entra un paquete a la cola de salida", () =>{
    var salida= new colaSalida();
    var paquete= new Paquete("1")
    salida.procesarPaquete(paquete);
    expect(salida.paquetes.length).toBe(1);
})


test("Termino de procesar paquetes", () =>{
    var salida= new colaSalida();
    var paquete= new Paquete("1");
    salida.procesarPaquete(paquete);
    salida.terminarProceso();
    expect(salida.paquetes.length).toBe(0);
})

