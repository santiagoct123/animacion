const balon = document.querySelector('.baloncesto');
const titulo = document.querySelector('.titulo');
const letras = titulo.querySelectorAll('span');
let arriba = true;
let angulo = 0;
let colorActual = 0;
let letraActual = 0;
let colores = ['#f2711c', '#f25f0a', '#ff0000', '#00ff00', '#0000ff'];

function animar() {
  // Movimiento vertical del balón
  if (arriba) {
    balon.style.top = 'calc(50% - 50px)';
  } else {
    balon.style.top = '50%';
  }
  arriba = !arriba;

  // Mostrar letras una por una
  if (letraActual < letras.length) {
    letras[letraActual].style.animationPlayState = 'running';
    letraActual++;
  }

  requestAnimationFrame(animar);
}

function cambiarColor() {
  colorActual = Math.floor(Math.random() * colores.length);
  balon.style.backgroundColor = colores[colorActual];
}

// Inicializar el título con las letras separadas
const palabra = "BALONCESTO";
for (let i = 0; i < palabra.length; i++) {
  const span = document.createElement('span');
  span.textContent = palabra[i];
  titulo.appendChild(span);
}

// Agregar un evento de clic al balón
balon.addEventListener('click', cambiarColor);

animar();
