const Destino=require('../src/destino');
const Paquete= require('../src/paquete')

var paquete;
var lista;
var destino;

beforeEach(()=> {
    destino= new Destino();
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
});

test("Verificar cantidad de paquetes en el destino", () =>{
    expect(destino.paquetes.length).toBe(0);
})

test("Recibir paquete destino", () =>{
    destino.recibirPaquete(lista);
    expect(destino.paquetes.length).toBe(1);
})