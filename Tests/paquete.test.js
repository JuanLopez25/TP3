const Paquete=require('../src/paquete')

test("Crear Paquete con urgencia muy rapido", () =>{
    var paquete= new Paquete("1",[],"muy rapido");
    expect(paquete.urgencia).toBe(4);
})

test("Crear Paquete con urgencia rapido", () =>{
    var paquete= new Paquete("1",[],"rapido");
    expect(paquete.urgencia).toBe(6);
})