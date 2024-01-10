let who = ["el gato", "el perro", "el loro", "la gallina"];
let action = ["daño", "rompio", "comio", "perdio"];
let what = ["la tarea", "el trabajo", "las llaves", "los folios", "la maqueta"];
let when = ["Antes de venir","Anoche","Ayer","Mientras comia","Mientras me bañaba"];

function generadorExcusas(quien, que, cuando, accion) {
  Actquien = Math.floor(Math.random() * quien.lenght);
  Actaccion = Math.floor(Math.random() * accion.lenght);
  Actque = Math.floor(Math.random() * que.lenght);
  Actcuando = Math.floor(Math.random() * cuando.lenght);

  return (quien[Actquien] +" " +accion[Actaccion] +" " + que[Actque]+" " +cuando[Actcuando]);
}

function onLoad() {
  var excuse = document.getElementById("excusa");
  excuse.innerHTML = generadorExcusas(who, action, what, when);
}
window.onload = onLoad;
