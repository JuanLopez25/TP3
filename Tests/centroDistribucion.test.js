const CentroDistribucion=require('../src/centroDistribucion')
const Paquete=require('../src/paquete')

test("Crear centro de distribucion", () =>{
    var distribucion = new CentroDistribucion();
    expect(distribucion.paquetes.length).toBe(0);
})

test("Procesar paquete centro de distribucion", () =>{
    var distribucion= new CentroDistribucion();
    var paquete= new Paquete("1")
    distribucion.procesarPaquete(paquete);
    expect(distribucion.paquetes.length).toBe(1);
})
