const Paquete=require('../src/paquete')

test("Crear Paquete con urgencia", () =>{
    var paquete= new Paquete("1",[],"muy rapido");
    expect(paquete.urgencia).toBe(4);
})