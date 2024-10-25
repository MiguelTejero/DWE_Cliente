let limite = parseInt(prompt("Introduce un numero limite"));
for(let i= 0; i <= limite; i++){
document.write("<table bordercolor='black'>" +
            "<thead>" +
                "<tr>" +
                    "<th>Número</th>" +
                    "<th>Seno</th>" +
                "</tr>" +
           " </thead>" +
           " <tbody>" +
           "<tr>" +
           
           
           "<th>" + i + "</th>"+
           "<th>" + Math.sin(i) + "</th>"+
        
        
           "</tr>"+
            "</tbody>" +
        "</table>" +
   "</div>")};
