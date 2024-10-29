const table = document.getElementsByTagName("td");

for(let celda of table){
    celda.addEventListener("mouseover",(event)=> {
        if (event.ctrlKey){
            event.target.style.backgroundColor = "red";
        } else if (event.shiftKey){
            event.target.style.backgroundColor = "blue";
        } else if (event.altKey){
            event.target.style.backgroundColor = "white";
        }
    })
    }

const button = document.getElementsByTagName("button") ;
button[0].addEventListener("click",()=>{
    for(let celda of table){
        celda.style.backgroundColor = "white";
    }
});

