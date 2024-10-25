
for(let i = 1; i < 6; i++){
    let cabecera = document.createElement("h${i}");
    cabecera.textContent= "Cabecera h${i}";
    document.write(cabecera);
}