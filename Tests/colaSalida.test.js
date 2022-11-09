const colaSalida= require('../src/colaSalida')

test("Crear cola salida", () =>{
    var salida= new colaSalida();
    expect(salida.paquetes).toBe(0);
})



test("Entra un paquete a la cola de salida", () =>{
    var salida= new colaSalida();
    salida.procesarPaquete();
    expect(salida.paquetes).toBe(1);
})