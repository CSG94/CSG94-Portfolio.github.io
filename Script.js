var ultimoColor = "";

function cambioColor() {
  
  var colores = ["#F4F466" , "#6666F4" , "#F49166" , "#66C9F4"];
  
  var nuevoColor = colores [Math.floor(Math.random() * colores.length)];
  
  while (nuevoColor === ultimoColor) {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
}
  document.body.style.backgroundColor = nuevoColor;
ultimoColor = nuevoColor;
 
}