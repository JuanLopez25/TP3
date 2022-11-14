const Local= require('../src/local')
const Paquete= require('../src/paquete')
const MatrizLocales= require('../src/matrizLocales');

var paqueteMuyRapido;
var paqueteRapido;
var paqueteNormal;
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
    expect(urgenciaTotal).toBe(28);
})