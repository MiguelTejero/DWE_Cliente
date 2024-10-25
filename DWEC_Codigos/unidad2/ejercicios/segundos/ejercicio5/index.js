
function miFuncion(){
    var fecha = new Date;
    document.write(fecha.toLocaleString() + "<br>")
    setTimeout(miFuncion, 1000);
}
setTimeout(miFuncion, 1000);
