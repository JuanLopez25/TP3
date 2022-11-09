const colaSalida= require('../src/colaSalida')

test("Crear cola salida", () =>{
    var salida= new colaSalida();
    expect(salida.paquetes).toBe(0);
})
