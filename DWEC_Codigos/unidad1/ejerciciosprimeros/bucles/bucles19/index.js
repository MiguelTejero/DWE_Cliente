let columnas = 8;
let filas = 8;
let ancho = prompt("Introduce el ancho):");
let alto = ancho;

document.write("<table border='1' cellspacing ='0' bgcolor='white' width='200'><tr>");


for (let i = 0; i < filas; i++) {
    if(i % 2==0){
        document.write("<tr bgcolor='white' height='"+alto+"'>")
    }
   for(let j = 0; j < columnas; j++)
    document.write("<td bgcolor='black'  width='"+ancho+"'></td>")
   document.write("</tr>");
}   
document.write("</table>");