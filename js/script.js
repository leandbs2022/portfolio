function mens(){
    alert('Recurso não disponível no momento!')
}
//direcionar

//planos
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function (element) {
      if ((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);

      } else {
        element.classList.remove(animationClass);
      }
    })
  }

  animeScroll();

  if (target.length) {
    window.addEventListener('scroll', debounce(function () {
      animeScroll();
    }, 200));
  }

  //slide
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide img');

  function showSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
  }

  function changeSlide(n) {
    showSlide(n);
  }

  showSlide(0);

  //timer
  let imagem = 0;
  function Temporizador() {
    imagem++;
    showSlide(imagem);
    if (imagem === 2) imagem = 0;
  }
  // Define um temporizador para executar a função a cada 2 segundos (2000 milissegundos)
  setInterval(Temporizador, 5000);
