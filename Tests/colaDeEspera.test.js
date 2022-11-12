const CentroFacturacion=require('../src/centroFacturacion')
const Paquete=require('../src/paquete')

var paquete;
var lista;

beforeEach(()=> {
    paquete = new Paquete("1");
    lista=[];
    var i=0;
    while (i<30) {
        lista.push(paquete) 
        i++;
    }
});


test("Crear centro de facturacion y verificamos su cola de espera la cual deberia ser 5", () =>{
    var facturacion= new CentroFacturacion();
    facturacion.procesarPaquete(lista);
    expect(facturacion.cola.length).toBe(6);
})


