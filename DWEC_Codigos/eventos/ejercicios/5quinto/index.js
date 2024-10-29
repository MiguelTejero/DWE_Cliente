pablo.onmousedown = function(event) {
    // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
    pablo.style.position = 'absolute';
    pablo.style.zIndex = 1000;
  
    // quitar cualquier padre actual y moverlo directamente a body
    // para posicionarlo relativo al body
    document.body.append(pablo);
  
    // centrar la pelota en las coordenadas (pageX, pageY)
    function moveAt(pageX, pageY) {
      pablo.style.left = pageX - pablo.offsetWidth / 2 + 'px';
      pablo.style.top = pageY - pablo.offsetHeight / 2 + 'px';
    }
  
    // mover nuestra pelota posicionada absolutamente bajo el puntero
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) mover la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) soltar la pelota, quitar cualquier manejador de eventos innecesario
    pablo.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      pablo.onmouseup = null;
    };
  
  };