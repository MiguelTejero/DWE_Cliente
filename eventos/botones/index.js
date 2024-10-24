const btn = document.getElementsByTagName("button");


btn[0].addEventListener("click",()=>console.log("has clickado en el boton"));

btn[1].addEventListener("click",()=>console.log("has clickado en el nuevo boton"));

btn[2].addEventListener("click",()=>document.body.style.backgroundColor = "blue");
btn[3].addEventListener("click",()=>document.body.style.backgroundColor = "red");
btn[4].addEventListener("click",()=>document.body.style.backgroundColor = "yellow");
btn[5].addEventListener("click",()=>document.body.style.backgroundColor = "white");


btn[6].addEventListener("click",()=>alert("PORQUE TOCAS??"));


btn[7].addEventListener("click",()=>document.body.style.backgroundImage ="url('msn.jpg')");
btn[8].addEventListener("click",()=>document.body.style.backgroundImage = "none");