
test("Crear centro de Calidad", () =>{
    var calidad= new CentroCalidad();
    expect(calidad.paquetes.length).toBe(0);
})