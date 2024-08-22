
document.addEventListener('DOMContentLoaded', () => {
  // Lorsque le contenu de la page est complètement chargé
  const loadingScreen = document.getElementById('loading-screen');

  // Attendez que tout le contenu de la page (y compris les images) soit chargé
  window.addEventListener('load', () => {
    // Cachez l'écran de chargement
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease';

    // Retirer l'élément de l'affichage après la transition
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); // Correspond à la durée de la transition
  });
});

document.addEventListener('scroll', function () {
  const mentionContainer = document.querySelector('.main-container-mention');
  const rect = mentionContainer.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    mentionContainer.classList.add('animate');
  }
});
