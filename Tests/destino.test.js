const Destino=require('./destino');

test("Verificar cantidad de paquetes en el destino", () =>{
    expect(Destino.paquetes.length).toBe(0);
})