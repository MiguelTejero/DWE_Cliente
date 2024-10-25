let numeroColumnas = parseInt(prompt("Introduce el número de columnas"));
let altura = parseInt(prompt("Introduce la altura de las celdas"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas"));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr  height='" + altura + "'>");

for (let i = 0; i < numeroColumnas; i++) {
    if(i % 2 == 0){
        document.write("<td bgcolor='white' width='" + ancho + "'>&nbsp;</td>");
    }
    else{  
          document.write("<td bgcolor='black' width='" + ancho + "'>&nbsp;</td>");
    }
}

document.write("</tr>");
document.write("</table>");
