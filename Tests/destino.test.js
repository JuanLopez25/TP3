const Destino=require('../src/destino');

test("Verificar cantidad de paquetes en el destino", () =>{
    var destino= new Destino();
    expect(destino.paquetes.length).toBe(0);
})