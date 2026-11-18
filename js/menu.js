const boton = document.getElementById('menu');
const nav = document.getElementById('botonera');

function cerrarMenu() {
    nav.classList.remove('abierto');
    boton.classList.replace('fa-xmark', 'fa-bars');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
}

boton.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    boton.classList.toggle('fa-bars', !abierto);
    boton.classList.toggle('fa-xmark', abierto);
    boton.setAttribute('aria-expanded', abierto);
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar al elegir una sección
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarMenu));

// Cerrar con Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarMenu();
});

// Si se agranda la ventana, resetear el estado
window.matchMedia('(min-width: 981px)').addEventListener('change', cerrarMenu);
