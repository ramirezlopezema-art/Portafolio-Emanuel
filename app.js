// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// getElementById busca en el documento el único elemento que tiene este id.
// Usamos 'btn-toggle-tema' porque identifica exactamente el botón que debe cambiar el tema.
const btnTema = document.getElementById('btn-toggle-tema');

// document.body da acceso directo al contenedor de toda la página; así la clase
// del tema afecta a todas las secciones sin tener que modificar una por una.
const body = document.body;

// El evento click sucede cuando la persona presiona el botón. La función anónima
// es la instrucción que el navegador guarda y ejecuta solamente en ese momento.
if (btnTema) {
  btnTema.addEventListener('click', function () {
    // toggle agrega 'tema-oscuro' si no existe y la quita si ya existe,
    // funcionando como un interruptor entre los dos temas visuales.
    body.classList.toggle('tema-oscuro');

    // El texto del botón indica cuál será el tema al que se cambiará con el próximo clic.
    if (body.classList.contains('tema-oscuro')) {
      btnTema.textContent = '☀ Modo Claro';
      btnTema.setAttribute('aria-pressed', 'true');
    } else {
      btnTema.textContent = '🌙 Modo Oscuro';
      btnTema.setAttribute('aria-pressed', 'false');
    }
  });
}

// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

const textoSaludo = document.getElementById('saludo-tiempo-real');
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
let mensaje = '';

if (horaActual >= 6 && horaActual < 12) {
  mensaje = '¡Buenos días! Espero que tengas una excelente mañana.';
} else if (horaActual >= 12 && horaActual < 18) {
  mensaje = '¡Buenas tardes! Gracias por visitar mi perfil.';
} else {
  mensaje = '¡Buenas noches! Descubre mi trabajo.';
}

// textContent inserta solo texto literal, mientras que innerHTML interpreta etiquetas HTML.
// Aquí usamos textContent porque el saludo es texto plano y no necesita crear elementos HTML.
if (textoSaludo) {
  textoSaludo.textContent = mensaje;
}
