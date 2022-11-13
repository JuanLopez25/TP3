const Local= require('../src/local')
const Paquete= require('../src/paquete')

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
var local;
var lista;
var reseter;

beforeEach(()=> {
    reseter= new Paquete(1,[],"muy rapido");
    reseter.resetearID(); //Creamos este paquete para resetear el id, y que los paquetes de este test empiezen desde el id 1;
    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteMuyRapido2=new Paquete(2,[],"muy rapido",4);
    paqueteRapido=new Paquete(3,[],"rapido",4);
    paqueteRapido2=new Paquete(4,[],"rapido",4);
    paqueteNormal=new Paquete(5,[],"normal",4);
    paqueteNormal2=new Paquete(6,[],"normal",4);
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    local= new Local(["CF","CC","CC","CD","CF"],[3,2,5,24,6]);
    local.agregarPaquetes(lista);
    var urgenciaTotal=0;
    local.centrosCreados[0].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(28);
})

test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    local= new Local(["CF","CC","CC","CD","CF"],[4,3,4,23,6]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(1);
    expect(local.centrosCreados[1].paquetes.length).toBe(3);
})

test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    local= new Local(["CF","CC","CC","CD","CF"],[4,2,3,25,6]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(2);
    expect(local.centrosCreados[2].paquetes.length).toBe(1);
})

test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    local= new Local(["CF","CC","CC","CD","CF"],[3,2,4,17,5]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(3);
    expect(local.centrosCreados[3].paquetes.length).toBe(1);
})
///-----------------------
///-----------------------


test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    local= new Local(["CD","CD","CF","CC","CD"],[30,22,4,3,15]);
    local.agregarPaquetes(lista);
    expect(local.centrosCreados[0].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"],[13,15,3,2,28]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(1);
    expect(local.centrosCreados[1].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"],[24,30,3,2,25]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(2);
    expect(local.centrosCreados[2].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    local= new Local(["CD","CD","CF","CC","CD"],[14,13,4,2,29]);
    local.agregarPaquetes(lista);
    local.avanzarTiempo(3);
    expect(local.centrosCreados[3].paquetes.length).toBe(3);
})

//chequear que se deban tener uno de cada uno

test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    local= new Local(["CD"],[14]);
    expect(local.centrosCreados[2].nombre).toBe("CF");
})


test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    local= new Local(["CD"],[14]);
    expect(local.centrosCreados[3].nombre).toBe("CC");
})

test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    local= new Local(["CD"],[14]);
    expect(local.centrosCreados[4].nombre).toBe("D");
})

test("Creo un local que no cumpla los requisitos y agrego CC", () =>{
    local= new Local(["CD","CF","CD","CD","CD","CD"],[15,3,15,16,14,13]);
    expect(local.centrosCreados[7].nombre).toBe("CC");
})
test("Creo un local que no cumpla losrequisitos y agrego CC", () =>{
    local= new Local(["CD","CF","CD","CD","CD","CD"],[15,4,30,25,24,20]);
    expect(local.centrosCreados[8].nombre).toBe("D");
})

test("Creo un local mas grande y verifico la urgencia", () =>{
    var reseter= new Paquete("1",[],"muy rapido");
    reseter.resetearID();
    var centrosAgregar= ["CF","CD","CF","CC"];
    local= new Local(centrosAgregar,[3,25,4,3]);
    local.agregarPaquetes([new Paquete("1",[],"muy rapido",centrosAgregar.length+1)]);
    local.avanzarTiempo(5);
    expect(local.informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 5, llego a tiempo\n");
})

test("Creo un local mucho mas grande y verifico la urgencia", () =>{
    var reseter= new Paquete("1",[],"muy rapido");
    reseter.resetearID();
    var centrosAgregar= ["CF","CD","CF","CF","CC"];
    local= new Local(centrosAgregar,[4,25,3,4,2]);
    local.agregarPaquetes([new Paquete("1",[],"muy rapido",centrosAgregar.length+1)]);
    local.avanzarTiempo(6);
    expect(local.informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 6, llego a tiempo\n");
})
