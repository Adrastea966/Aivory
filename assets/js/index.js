//Scroll entre secciones
$(function () {
  $.scrollify({
    section: "section",
    scrollSpeed: 150,
    easing: "easeOutExpo",
    scrollbars: false,
    setHeights: false,
    updateHash: false,
    passive: false
  });
});

//Seccion AI - dialogos
document.addEventListener('DOMContentLoaded', function () {
  let bloqueSecundario = document.querySelector('.container-dialogos-secundarios');
  let bloqueSecundarioDos = document.querySelector('.container-dialogos-secundarios-2');
  let bloqueSecundarioTres = document.querySelector('.container-dialogos-secundarios-3');
  let bloquePrimario = document.querySelector('.container-dialogos-principales');
  let decisiones = document.querySelector('.decisiones');
  let curiosidad = document.querySelector('.curiosidad');
  let trabajo = document.querySelector('.trabajo');
  let ocio = document.querySelector('.ocio');

  trabajo.addEventListener('click', function (event) {
      event.preventDefault();
      bloqueSecundario.classList.remove('display-none');
      bloquePrimario.classList.add('display-none');
      decisiones.classList.add('display-none');
  });

  ocio.addEventListener('click', function (event) {
      event.preventDefault();
      bloqueSecundarioDos.classList.remove('display-none');
      bloquePrimario.classList.add('display-none');
      decisiones.classList.add('display-none');
  });

  curiosidad.addEventListener('click', function (event) {
      event.preventDefault();
      bloqueSecundarioTres.classList.remove('display-none');
      bloquePrimario.classList.add('display-none');
      decisiones.classList.add('display-none');
  });
});
