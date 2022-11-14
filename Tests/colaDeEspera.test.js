const CentroFacturacion=require('../src/centroFacturacion')
const CentroCalidad=require('../src/centroCalidad')
const CentroDistribucion=require('../src/centroDistribucion')
const Paquete=require('../src/paquete')

var paquete;
var lista;

beforeEach(()=> {
    lista=[];
    var i=1;
    while (i<=50) {
        paquete= new Paquete(i,[],"normal",4);
        lista.push(paquete) 
        i++;
    }
});


test("Crear centro de facturacion y verificamos su cola de espera la cual deberia ser 6", () =>{
    var facturacion= new CentroFacturacion(6);
    facturacion.agregarACola(lista);
    facturacion.procesarPaquetes();
    expect(facturacion.cola.length).toBe(3);
})



test("Crear centro de calidad y verificamos su cola de espera la cual deberia ser 5", () =>{
    var calidad= new CentroCalidad(5);
    calidad.agregarACola(lista);
    calidad.procesarPaquetes();
    expect(calidad.cola.length).toBe(4);
})

test("Crear centro de distribucion y verificamos su cola de espera la cual deberia ser 30", () =>{
    var distribucion= new CentroDistribucion(30);
    distribucion.agregarACola(lista);
    distribucion.procesarPaquetes();
    expect(distribucion.cola.length).toBe(20);
})



