let examen1=parseInt(prompt("dime la nota del primer examen"));
let examen2=parseInt(prompt("dime la nota del segundo examen"));
let trabajo1=parseInt(prompt("dime la nota del primer trabajo"));
let trabajo2=parseInt(prompt("dime la nota del segundo trabajo"));

mediaExamenes = (examen1 + examen2) / 2;
mediaTrabajos = (trabajo1 + trabajo2) / 2;

mediaAsignatura = ((mediaExamenes * 0.75) + (mediaTrabajos * 0.25)) / 2;

if (mediaAsignatura > 5 ){
    document.write("La media es superior o igual a 5 , está aprovada la asignatura")
}

/*NO ME HA SALIDO*/