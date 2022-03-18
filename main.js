//Diego Mauricio Mendoza Mollinedo
let pantalla = document.getElementById("pantalla");
let btns = document.querySelectorAll(".boton");

//imprimir valor en la pantalla
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnTexto = btn.innerText;
    if (btnTexto === "=") return;
    pantalla.value += btnTexto;
  });
});

//funciones trigonométricas
function sin() {
  pantalla.value = Math.sin(pantalla.value);
}
function cos() {
  pantalla.value = Math.cos(pantalla.value);
}
function tan() {
  pantalla.value = Math.tan(pantalla.value);
}

function potencia() {
  pantalla.value = Math.pow(pantalla.value, 2);
}
function raiz() {
  pantalla.value = Math.sqrt(pantalla.value, 2);
}

function eliminar() {
  // pantalla.value = pantalla.value.substr(0, pantalla.value.lenght - 1);
  pantalla.value = pantalla.value.slice(0, -1);
}
