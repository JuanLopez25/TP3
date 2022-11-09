const Paquete= require('../src/paquete');

var paquete;

beforeEach(()=> {
    paquete = new Paquete("1");
});

test("Paquete inicia en el local", () =>{
    expect(paquete.tiempo).toBe(0);
})


test("Paquete inicia en el local", () =>{
    paquete.siguienteEtapa();
    expect(paquete.tiempo).toBe(1);
})


test("Paquete inicia en el local", () =>{
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    expect(paquete.tiempo).toBe(2);
})

