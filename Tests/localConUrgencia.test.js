const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;

beforeEach(()=> {
    paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    paqueteRapido=new Paquete("1",[],"rapido");
    paqueteNormal=new Paquete("1",[],"normal");
    local= new Local("A");
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal,paqueteRapido,paqueteRapido,paqueteMuyRapido];
    local.agregarPaquetes(lista);
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    var urgenciaTotal=0;
    local.colaDeSalida.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("5 paquetes a centro de Facturacion y procesa los 3 con mayor urgencia", () =>{
    local.avanzarTiempo(1);   //facturacion procesando 3 y 2 en cola
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    local.agregarPaquetes(lista2);  //Cola de salida agrendando 5
    local.avanzarTiempo(1); //facturacion procesando 3 y cola de 4 
    var urgenciaTotal=0;
    local.centroDeFacturacion.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(12);
})

test("3 paquetes a centro de calidad y procesa el de mayor urgencia", () =>{
    local.avanzarTiempo(2); ///centro de calidad procesa el primer muy rapidos y en la cola de espera el primero es muy rapido y el segundo es rapido
    // el centro de facturacion esta procesando el rapido y el normal
    var lista2= [paqueteMuyRapido,paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido, paqueteMuyRapido];
    local.agregarPaquetes(lista2);  //Cola de salida agrendando 5 muy rapidos
    local.avanzarTiempo(1); //facturacion esta procesando 3 muy rapidos
    //centro de calidad esta procesando el muy rapido y en cola tiene [rapido,rapido,normal]
    local.avanzarTiempo(1); //facturacion procesando los 2 muy rapidos
    //centro de calidad deberia procesar un muy rapido pero en cola el orden es [rapido,rapido,normal,muy rapido, muy rapido, muy rapido]
    var urgenciaTotal=0;
    local.centroDeCalidad.paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(4);
})