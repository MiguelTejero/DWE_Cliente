var fechaHoy = new Date();
document.write("La fecha actual es: " + fechaHoy.toLocaleString() + "<br>");
var fecha85 = new Date();
fecha85.setDate=(fechaHoy.getDate() + 85);
document.write("La fecha actual más 85 dias es: " + fecha85.toLocaleString()  + "<br>");

var fecha187 = new Date();
fecha187.setDate=(fechaHoy.getDate() - 187);
document.write("La fecha actual menos 187 dias es: " + fecha187.toLocaleString() + "<br>"); 

var fecha2años = new Date();
fecha2años.setFullYear(fecha85.getFullYear() + 2);
document.write("La fecha85 mas 2 años es: " + fecha2años.toLocaleString() + "<br>")

var fecha24horas = new Date();
fecha24horas.setHours(fecha187.getHours() + 24);
document.write("La fecha187 mas 24 horas es: " + fecha24horas.toLocaleString() + "<br>")


var fechaResto = (fecha85 - fecha187);

document.write("La resta de la fecha85 - fecha187 es " + fechaResto)