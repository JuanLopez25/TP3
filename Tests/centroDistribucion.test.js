const CentroDistribucion=require('../src/centroDistribucion')
const Paquete=require('../src/paquete')

var lista;
var distribucion;

beforeEach(()=> {
    distribucion= new CentroDistribucion(30);
    paquete1 = new Paquete(1,"muy rapido",4);
    paquete2 = new Paquete(2,"normal",4);
    paquete3 = new Paquete(3,"muy rapido",4);
    paquete4 = new Paquete(4,"rapido",4);
    paquete5 = new Paquete(5,"normal",4);
    paquete6 = new Paquete(6,"normal",4);
    paquete7 = new Paquete(7,"normal",4);
    paquete8 = new Paquete(8,"normal",4);
    paquete9 = new Paquete(9,"normal",4);
    paquete10 = new Paquete(10,"normal",4);
    paquete11 = new Paquete(11,"normal",4);
    lista=[];
    lista.push(paquete1)
});

test("Crear centro de distribucion", () =>{
    expect(distribucion.paquetes.length).toBe(0);
})

test("Procesar paquete centro de distribucion", () =>{
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.paquetes.length).toBe(1);
})


test("Procesar paquete centro de facturacion", () =>{
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    distribucion.terminarProceso(lista);
    expect(distribucion.paquetes.length).toBe(0);
})

test("Entran 10 paquetes al centro de distribucion", () =>{
    lista.push(paquete2);
    lista.push(paquete3);
    lista.push(paquete4);
    lista.push(paquete5);
    lista.push(paquete6);
    lista.push(paquete7);
    lista.push(paquete8);
    lista.push(paquete9);
    lista.push(paquete10);
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.paquetes.length).toBe(10);
})


test("Entran 11 paquetes al centro de distribucion y deberian entrar nada mas que 10 ya que este es el limite", () =>{
    lista.push(paquete2);
    lista.push(paquete3);
    lista.push(paquete4);
    lista.push(paquete5);
    lista.push(paquete6);
    lista.push(paquete7);
    lista.push(paquete8);
    lista.push(paquete9);
    lista.push(paquete10);
    lista.push(paquete11);
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.paquetes.length).toBe(10);
})

test("Unir paquetes con mismo destino", () =>{
    var paqueteAux=new Paquete(1,[],"normal",4);
    lista.push(paqueteAux);
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.paquetes.length).toBe(1);
    expect(distribucion.paquetes[0].urgencia).toBe(4);
})

test("Unir paquetes con mismo destino: dos destinos", () =>{
    var paqueteAux=new Paquete(1,"normal",4);
    var paqueteAux2=new Paquete(2,"normal",4);
    lista.push(paquete2);
    lista.push(paqueteAux);
    lista.push(paqueteAux2);
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.paquetes.length).toBe(2);
})


