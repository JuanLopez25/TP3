const Paquete=require('../src/paquete')

test("Crear Paquete con urgencia muy rapido", () =>{
    var paquete= new Paquete(1,"muy rapido",4);
    expect(paquete.urgencia).toBe(4);
})

test("Crear Paquete con urgencia rapido", () =>{
    var paquete= new Paquete(1,"rapido",4);
    expect(paquete.urgencia).toBe(6);
})

test("Crear Paquete con urgencia normal", () =>{
    var paquete= new Paquete(1,"normal",4);
    expect(paquete.urgencia).toBe(8);
})