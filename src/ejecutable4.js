const MatrizLocales=require('./matrizLocales');
const Paquete= require('./paquete');

try {
    var matriz= new MatrizLocales(["CD","CF"],[[23,4,3],[24,5,2],[24,5,5]]);
    var P1=new Paquete(2,"muy rapido",4);
    var P2=new Paquete(1,"rapido",4);
    var P3=new Paquete(1,"normal",4);
    var P4=new Paquete(1,"muy rapido",4);
    var P5=new Paquete(3,"normal",4);
    var lista=[P1,P2,P3,P4,P5];
    matriz.agregarPaquetes(lista,"A");
      
    var imprimirPaquetes= function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centros[nroCentro].paquetes.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    var imprimirColaSalida= function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centros[nroCentro].colaSalida.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    var imprimirColaEspera = function(nroLocal,nroCentro) {
        var idPaquetes="";
        matriz.locales[nroLocal].centros[nroCentro].cola.forEach(element => {
            idPaquetes=idPaquetes+element.id+"-----";
        });
        console.log(idPaquetes);
    }

    //imprimirPaquetes(0,0);
   
    matriz.avanzarTiempo(); //tiempo 1

    // console.log("procesando CD");
    // imprimirPaquetes(0,1);
    
    // console.log(matriz.locales[0].centros[1].paquetes[1].productos);
    // console.log(matriz.locales[0].centros[1].paquetes[1].tiempo);
    // console.log(matriz.locales[0].centros[1].paquetes[1].urgencia);
    // console.log(matriz.locales[0].centros[1].paquetes[1].destino);

    matriz.avanzarTiempo(); //tiempo 2
    
    // console.log("procesando CD");
    // imprimirPaquetes(0,1);
    // console.log("cola de salida CD");
    // imprimirColaSalida(0,1);
    // console.log("procesando CF");
    // imprimirPaquetes(0,2);
    // imprimirPaquetes(1,2);
    // console.log("colas de espera CF");
    // imprimirColaEspera(0,2);


    matriz.avanzarTiempo(); //tiempo 3



    // console.log("cola de salida CD");
    // imprimirColaSalida(0,1);
    // console.log("procesando CF");
    // imprimirPaquetes(0,2);
    // console.log("procesando CC");
    // imprimirPaquetes(0,3);
    // imprimirPaquetes(1,3);
    // imprimirPaquetes(2,3);

    matriz.avanzarTiempo(); //tiempo 4

   
    matriz.locales.forEach(local=>{
        console.log(local.informarPaquetesEnDestino());
    })

} catch(Error) {
    console.log(Error);
}


