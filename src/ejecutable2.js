
const MatrizLocales=require('./matrizLocales');
const Paquete= require('./paquete');

try {
    var matriz= new MatrizLocales(3,["CF","CC","CD"],[[3,2,10],[5,3,25],[6,2,12]]);
    var P1=new Paquete(2,[],"muy rapido",4);
    var P2=new Paquete(1,[],"rapido",4);
    var P3=new Paquete(1,[],"normal",4);
    var P4=new Paquete(2,[],"normal",4);
    var P5=new Paquete(1,[],"normal",4);
    var P6=new Paquete(2,[],"rapido",4);
    var P7=new Paquete(2,[],"rapido",4);
    var P8=new Paquete(1,[],"muy rapido",4);
    var P9=new Paquete(3,[],"normal",4);
    var P10=new Paquete(3,[],"rapido",4);
    var lista=[P1,P2,P3];
    var lista2=[P4,P5];
    var lista3=[P6,P7,P8,P9,P10];
    matriz.agregarPaquetes(lista,"A");
    matriz.agregarPaquetes(lista2,"B");
    matriz.agregarPaquetes(lista3,"C");


      
    var imprimirPaquetes= function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centrosCreados[nroCentro].paquetes.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    var imprimirColaSalida= function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centrosCreados[nroCentro].colaSalida.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    var imprimirColaEspera = function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centrosCreados[nroCentro].cola.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    // imprimirPaquetes(0,0);
    // imprimirPaquetes(1,0);
    // imprimirPaquetes(2,0);

    matriz.avanzarTiempo(); //tiempo 1
    
    // imprimirColaSalida(0,0);
    // imprimirColaSalida(1,0);
    // imprimirColaSalida(2,0);
    // console.log("procesando CF");
    // imprimirPaquetes(0,1);
    // imprimirPaquetes(1,1);
    // imprimirPaquetes(2,1);
    // console.log("colas de espera CF");
    // imprimirColaEspera(1,1);
   
    matriz.avanzarTiempo(); //tiempo 2
    
    // console.log("procesando CF");
    // imprimirPaquetes(1,1);
    // console.log("cola de salida CF");
    // imprimirColaSalida(0,1);
    // console.log("procesando CC");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // imprimirPaquetes(2,2);
    // console.log("colas de espera CC");
    // imprimirColaEspera(0,2);
    // imprimirColaEspera(1,2);
    // imprimirColaEspera(2,2);


    matriz.avanzarTiempo(); //tiempo 3



    // console.log("cola de salida CF");
    // imprimirColaSalida(1,1);
    // console.log("procesando CC");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // imprimirPaquetes(2,2);
    // console.log("colas de espera CC");
    // imprimirColaEspera(0,2);
    // imprimirColaEspera(1,2);
    // imprimirColaEspera(2,2);
    // console.log("procesando CD");
    // imprimirPaquetes(0,3);
    // imprimirPaquetes(1,3);
    // imprimirPaquetes(2,3);
    // console.log("colas de espera CD");
    // imprimirColaEspera(0,3);
    // imprimirColaEspera(1,3);
    // imprimirColaEspera(2,3);

    matriz.avanzarTiempo(); //tiempo 4

    // console.log("cola de salida CF");
    // imprimirColaSalida(1,1);
    // console.log("procesando CC");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // imprimirPaquetes(2,2);
    // console.log("colas de espera CC");
    // imprimirColaEspera(0,2);
    // imprimirColaEspera(1,2);
    // imprimirColaEspera(2,2);
    // console.log("procesando CD");
    // imprimirPaquetes(0,3);
    // imprimirPaquetes(1,3);
    // imprimirPaquetes(2,3);
    // console.log("colas de espera CD");
    // imprimirColaEspera(0,3);
    // imprimirColaEspera(1,3);
    // imprimirColaEspera(2,3);

    matriz.avanzarTiempo(); //tiempo 5

    // console.log("cola de salida CF");
    // imprimirColaSalida(1,1);
    // console.log("procesando CC");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // imprimirPaquetes(2,2);
    // console.log("colas de espera CC");
    // imprimirColaEspera(0,2);
    // imprimirColaEspera(1,2);
    // imprimirColaEspera(2,2);
    // console.log("procesando CD");
    // imprimirPaquetes(0,3);
    // imprimirPaquetes(1,3);
    // imprimirPaquetes(2,3);
    // console.log("colas de espera CD");
    // imprimirColaEspera(0,3);
    // imprimirColaEspera(1,3);
    // imprimirColaEspera(2,3);

    matriz.avanzarTiempo(); //tiempo 6

    // console.log("cola de salida CF");
    // imprimirColaSalida(1,1);
    // console.log("procesando CC");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // imprimirPaquetes(2,2);
    // console.log("colas de espera CC");
    // imprimirColaEspera(0,2);
    // imprimirColaEspera(1,2);
    // imprimirColaEspera(2,2);
    // console.log("procesando CD");
    // imprimirPaquetes(0,3);
    // imprimirPaquetes(1,3);
    // imprimirPaquetes(2,3);
    // console.log("colas de espera CD");
    // imprimirColaEspera(0,3);
    // imprimirColaEspera(1,3);
    // imprimirColaEspera(2,3);

    matriz.avanzarTiempo(); //tiempo 7
    
    matriz.locales.forEach(local=>{
        console.log(local.informarPaquetesEnDestino());
    })

} catch(Error) {
    console.log(Error);
}


