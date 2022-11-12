const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;
var reseter;

beforeEach(()=> {
    reseter= new Paquete("1",[],"muy rapido");
    reseter.resetearID(); //Creamos este paquete para resetear el id, y que los paquetes de este test empiezen desde el id 1;
    paqueteMuyRapido=new Paquete("1",[],"muy rapido");
    paqueteMuyRapido2=new Paquete("1",[],"muy rapido");
    paqueteRapido=new Paquete("1",[],"rapido");
    paqueteRapido2=new Paquete("1",[],"rapido");
    paqueteNormal=new Paquete("1",[],"normal");
    paqueteNormal2=new Paquete("1",[],"normal");
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    local= new Local(["CF","CC","CC","CD","CF"]);
    local.agregarPaquetes(lista);
    var urgenciaTotal=0;
    local.centrosCreados[0].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    local= new Local(["CF","CC","CC","CD","CF"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(1);
    expect(local.centrosCreados[1].paquetes.length).toBe(3);
})

test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    local= new Local(["CF","CC","CC","CD","CF"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(2);
    expect(local.centrosCreados[2].paquetes.length).toBe(1);
})

test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    local= new Local(["CF","CC","CC","CD","CF"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(3);
    expect(local.centrosCreados[3].paquetes.length).toBe(1);
})
///-----------------------
///-----------------------


test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    local= new Local(["CD","CD","CF","CC","CD"]);
    local.agregarPaquetes(lista);
    expect(local.centrosCreados[0].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(1);
    expect(local.centrosCreados[1].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(2);
    expect(local.centrosCreados[2].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(3);
    expect(local.centrosCreados[3].paquetes.length).toBe(3);
})

//chequear que se deban tener uno de cada uno





