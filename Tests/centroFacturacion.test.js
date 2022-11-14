const CentroFacturacion=require('../src/centroFacturacion')
const Paquete=require('../src/paquete')

var paquete;
var lista;
var facturacion;

beforeEach(()=> {
    facturacion= new CentroFacturacion(6);
    paquete = new Paquete("1");
    lista=[];
    lista.push(paquete)
});


test("Crear centro de facturacion", () =>{
    expect(facturacion.paquetes.length).toBe(0);
})

test("Procesar paquete centro de facturacion", () =>{
    facturacion.agregarACola(lista);
    facturacion.procesarPaquetes();
    expect(facturacion.paquetes.length).toBe(1);
})

test("Procesar paquete centro de facturacion", () =>{
    facturacion.agregarACola(lista);
    facturacion.procesarPaquetes();
    facturacion.terminarProceso(lista);
    expect(facturacion.paquetes.length).toBe(0);
})


test("Entran 3 paquetes al centro de facturacion", () =>{
    lista.push(paquete);
    lista.push(paquete);
    facturacion.agregarACola(lista);
    facturacion.procesarPaquetes();
    expect(facturacion.paquetes.length).toBe(3);
})

test("Entran 4 paquetes al centro de facturacion y deberian entrar nada mas que 3 ya que este es el limite", () =>{
    lista.push(paquete);
    lista.push(paquete);
    lista.push(paquete);
    facturacion.agregarACola(lista);
    facturacion.procesarPaquetes();
    expect(facturacion.paquetes.length).toBe(3);
})




