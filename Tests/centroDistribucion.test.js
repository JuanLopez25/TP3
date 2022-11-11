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
    distribucion.procesarPaquete(lista);
    expect(distribucion.paquetes.length).toBe(1);
})


test("Procesar paquete centro de facturacion", () =>{
    distribucion.procesarPaquete(lista);
    distribucion.terminarProceso(lista);
    expect(distribucion.paquetes.length).toBe(0);
})