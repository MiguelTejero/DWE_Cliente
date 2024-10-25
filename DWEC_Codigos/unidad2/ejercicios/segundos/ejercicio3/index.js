var tiempo = 6;

function miFuncion(){
    if(tiempo >= 0){
        document.write(tiempo + "<br>");
    tiempo--;
    setTimeout(miFuncion, 1000)
    }else{
        document.alert("Final")
    }
}
    setTimeout(miFuncion, 1000);


