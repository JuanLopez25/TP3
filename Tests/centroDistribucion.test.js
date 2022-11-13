const CentroDistribucion=require('../src/centroDistribucion')
const Paquete=require('../src/paquete')

var paquete;
var lista;
var distribucion;

beforeEach(()=> {
    distribucion= new CentroDistribucion();
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
});

test("Crear centro de distribucion", () =>{
    expect(distribucion.paquetes.length).toBe(0);
})

test("Procesar paquete centro de distribucion", () =>{
    distribucion.procesarPaquetes(lista);
    expect(distribucion.paquetes.length).toBe(1);
})


test("Procesar paquete centro de facturacion", () =>{
    distribucion.procesarPaquetes(lista);
    distribucion.terminarProceso(lista);
    expect(distribucion.paquetes.length).toBe(0);
})

test("Entran 10 paquetes al centro de distribucion", () =>{
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    distribucion.procesarPaquetes(lista);
    expect(distribucion.paquetes.length).toBe(10);
})


test("Entran 11 paquetes al centro de distribucion y deberian entrar nada mas que 10 ya que este es el limite", () =>{
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    distribucion.procesarPaquetes(lista);
    expect(distribucion.paquetes.length).toBe(10);
})

test("Unir paquetes", () =>{
    var paquete1=new Paquete(1,[],"muy rapido",4);
    var paquete2=new Paquete(1,[],"normal",4);
    var lista=[paquete1,paquete2];
    distribucion.procesarPaquetes(lista);
    expect(distribucion.paquetes.length).toBe(1);
})

