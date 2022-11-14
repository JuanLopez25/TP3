const Local= require('../src/local')
const Paquete= require('../src/paquete')
const MatrizLocales= require('../src/matrizLocales');

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;

var paqueteMuyRapido2;
var paqueteRapido2;
var paqueteNormal2;


var lista;
var reseter;
var matriz;
var reseter2;

beforeEach(()=> {
    reseter= new Paquete(1,[],"muy rapido");
    reseter2= new Local(["CF","CC","CD"],[6,2,14]);
    reseter2.resetearID();
    reseter.resetearID(); //Creamos este paquete para resetear el id, y que los paquetes de este test empiezen desde el id 1;


    paqueteMuyRapido=new Paquete(1,[],"muy rapido",4);
    paqueteMuyRapido2=new Paquete(1,[],"muy rapido",4);
    paqueteRapido=new Paquete(1,[],"rapido",4);
    paqueteRapido2=new Paquete(1,[],"rapido",4);
    paqueteNormal=new Paquete(1,[],"normal",4);
    paqueteNormal2=new Paquete(1,[],"normal",4);
    lista=[paqueteMuyRapido,paqueteNormal,paqueteNormal2,paqueteRapido,paqueteRapido2,paqueteMuyRapido2];
});

test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    matriz= new MatrizLocales(1,["CF","CC","CC","CD","CF"],[[3,2,5,24,6]]);
    matriz.agregarPaquetes(lista,"A");
    var urgenciaTotal=0;
    matriz.locales[0].centrosCreados[0].paquetes.forEach(elemento => urgenciaTotal+=elemento.urgencia);
    expect(urgenciaTotal).toBe(32);
})

test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    matriz= new MatrizLocales(1,["CF","CC","CC","CD","CF"],[[4,3,4,23,6]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();  
    expect(matriz.locales[0].centrosCreados[1].paquetes.length).toBe(3);
})

test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    matriz= new MatrizLocales(1,["CF","CC","CC","CD","CF"],[[4,2,3,25,6]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();
    matriz.avanzarTiempo();    
    expect(matriz.locales[0].centrosCreados[2].paquetes.length).toBe(1);
})

test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de calidad estar procesando 1 paquete", () =>{
    matriz= new MatrizLocales(1,["CF","CC","CC","CD","CF"],[[3,2,4,17,5]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    expect(matriz.locales[0].centrosCreados[3].paquetes.length).toBe(1);
})
///-----------------------
///-----------------------


test("6 paquetes a cola de salida y toma los 5 de mayor urgencia", () =>{
    matriz= new MatrizLocales(1,["CD","CD","CF","CC","CD"],[[30,22,4,3,15]]);
    matriz.agregarPaquetes(lista,"A");
    expect(matriz.locales[0].centrosCreados[0].paquetes.length).toBe(5);
})


test("6 paquetes a cola de salida y proceso una vez por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    matriz= new MatrizLocales(1,["CD","CD","CF","CC","CD"],[[13,15,3,2,28]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo(1);  
    expect(matriz.locales[0].centrosCreados[1].paquetes.length).toBe(1);
})


test("6 paquetes a cola de salida y proceso dos veces por lo que deberia el centro de distribucion estar procesando 5 paquetes", () =>{
    matriz= new MatrizLocales(1,["CD","CD","CF","CC","CD"],[[24,30,3,2,25]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    expect(matriz.locales[0].centrosCreados[2].paquetes.length).toBe(1);
})


test("6 paquetes a cola de salida y proceso tres veces por lo que deberia el centro de facturacion estar procesando 3 paquetes", () =>{
    matriz= new MatrizLocales(1,["CD","CD","CF","CC","CD"],[[14,13,4,2,29]]);
    matriz.agregarPaquetes(lista,"A");
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    expect(matriz.locales[0].centrosCreados[3].paquetes.length).toBe(1);
})

// //chequear que se deban tener uno de cada uno

test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    matriz= new MatrizLocales(1,["CD"],[[14]]);
    expect(matriz.locales[0].centrosCreados[2].nombre).toBe("CF");
})


test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    matriz= new MatrizLocales(1,["CD"],[[14]]);
    expect(matriz.locales[0].centrosCreados[3].nombre).toBe("CC");
})

test("Creo un local que no cumpla los requisitos y debe agregarse el CF y el CC", () =>{
    matriz= new MatrizLocales(1,["CD"],[[14]]);
    expect(matriz.locales[0].centrosCreados[4].nombre).toBe("D");
})

test("Creo un local que no cumpla los requisitos y agrego CC", () =>{
    matriz= new MatrizLocales(1,["CD","CF","CD","CD","CD","CD"],[[15,3,15,16,14,13]]);
    expect(matriz.locales[0].centrosCreados[7].nombre).toBe("CC");
})
test("Creo un local que no cumpla losrequisitos y agrego CC", () =>{
    matriz= new MatrizLocales(1,["CD","CF","CD","CD","CD","CD"],[[15,4,30,25,24,20]]);
    expect(matriz.locales[0].centrosCreados[8].nombre).toBe("D");
})

test("Creo un local mas grande y verifico la urgencia", () =>{
    var reseter= new Paquete("1",[],"muy rapido");
    reseter.resetearID();
    var centrosAgregar= ["CF","CD","CF","CC"];
    matriz= new MatrizLocales(1,centrosAgregar,[[3,25,4,3]]);
    var lista2= [];
    lista2.push(new Paquete("1",[],"muy rapido",5));

    matriz.agregarPaquetes(lista2,"A");
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    matriz.avanzarTiempo();  
    expect(matriz.locales[0].informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 5, llego a tiempo\n");
})

test("Creo un local mucho mas grande y verifico la urgencia", () =>{
     var reseter= new Paquete("1",[],"muy rapido");
     reseter.resetearID();
     var centrosAgregar= ["CF","CD","CF","CF","CC"];
     matriz= new MatrizLocales(1,centrosAgregar,[[4,25,3,4,2]]);
     matriz.agregarPaquetes([new Paquete("1",[],"muy rapido",centrosAgregar.length+1)],"A");
     matriz.avanzarTiempo();  
     matriz.avanzarTiempo();  
     matriz.avanzarTiempo();  
     matriz.avanzarTiempo();  
     matriz.avanzarTiempo();  
     matriz.avanzarTiempo();  
     expect(matriz.locales[0].informarPaquetesEnDestino()).toBe("P1: Destino 1, Urgencia 6, llego a tiempo\n");
})
