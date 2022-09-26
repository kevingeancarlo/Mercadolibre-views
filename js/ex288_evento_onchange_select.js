function seleccionarunidades(){
  let unidades_disponibles = document.getElementById('unidades_disponibles');
  let unidades = unidades_disponibles.value;

  /* document.getElementById('unidades_seleccionadas').innerText = `Ud. ha seleccionado ${unidades}.`; */

if(document.getElementById('unidades_disponibles').value == "Más de 3 unidades") {
    alert("Sin stock");
}
document.getElementById('boton1').onclick = function(){
    if(document.getElementById('unidades_disponibles').value == "1 unidad") {
        alert("Costo: $140.190");
    }
    else if(document.getElementById('unidades_disponibles').value == "2 unidades") {
        alert("Costo: $280.380");
    }
    else if(document.getElementById('unidades_disponibles').value == "3 unidades") {
        alert("Costo: $420.570");
    }
}
}