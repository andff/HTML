// Função para verificar se um elemento está na viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe 'animated' quando o elemento entrar na viewport
function addAnimationClass() {
  const animatedElements = document.querySelectorAll('.animate__animated');
  animatedElements.forEach(element => {
    if (isElementInViewport(element) && !element.classList.contains('animated')) {
      element.classList.add('animated');
    }
  });
}

// Chamar a função quando a página carregar e durante o scroll
window.addEventListener('load', addAnimationClass);
window.addEventListener('scroll', addAnimationClass);