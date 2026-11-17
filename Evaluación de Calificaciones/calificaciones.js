function calcular() {

    let nombre = document.getElementById("nombre").value;
    let cal1 = document.getElementById("cal1").value;
    let cal2 = document.getElementById("cal2").value;
    let cal3 = document.getElementById("cal3").value;

    if (nombre == "" || cal1 == "" || cal2 == "" || cal3 == ""){
        alert("Todos los campos son obligatorios");
        return;
    } 

    cal1 = Number(cal1);
    cal2 = Number(cal2);
    cal3 = Number(cal3);

    if (!Number.isFinite(cal1) || !Number.isFinite(cal2) || !Number.isFinite(cal3)
    || 
        cal1 < 0 || cal1 > 10 ||
        cal2 < 0 || cal2 > 10 ||
        cal3 < 0 || cal3 > 10 ) 
    {
            alert("Las calificaiones deben ser entre 1 y 10");
            return;
    }

    let promedio = (cal1 + cal2 + cal3) / 3;
    let estado;
    let observacion;

    if (promedio >= 6){
        estado = "APROBADO";
    } else {
        estado = "REPROBADOOO"
    }

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    document.getElementById("resultado").innerHTML =
    "<h1>Resultados</h1>" +
    "Estudiante: " + nombre + "<br>" +
    "Primera calificación: " + cal1 + "<br>" +
    "Segunda calificación: " + cal2 + "<br>" +
    "Tercera calificación: " + cal3 + "<br>" +
    "Promedio: " + promedio.toFixed(2) + "<br>" +
    "Estado: " + estado + "<br>" +
    "Observación: " + observacion;

}