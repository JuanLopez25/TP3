const Paquete= require('../src/paquete');

var paquete;

beforeEach(()=> {
    paquete = new Paquete("1");
});

test("Paquete inicia en el local", () =>{
    expect(paquete.estadoPaquete()).toBe("Local");
})



test("Paquete se mueve hacia el centro de facturacion", () =>{
    paquete.siguienteEtapa();
    expect(paquete.estadoPaquete()).toBe("Centro de facturacion");
})



test("Paquete se mueve hacia el cento de calidad", () =>{
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    expect(paquete.estadoPaquete()).toBe("Centro de calidad");
})



test("Paquete se mueve hacia el centro de distribucion", () =>{
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    expect(paquete.estadoPaquete()).toBe("Centro de distribucion");
})

test("El paquete llega a destino identificado por un id", () =>{
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    expect(paquete.estadoPaquete()).toBe(paquete.destino);
})


test("El paquete llega a destino y debe mantenerse alli", () =>{
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();   
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();
    paquete.siguienteEtapa();

    expect(paquete.estadoPaquete()).toBe(paquete.destino);
})
