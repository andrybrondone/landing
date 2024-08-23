
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

document.addEventListener('DOMContentLoaded', function () {
  const fadeInElement = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  fadeInElement.forEach(item => {
      observer.observe(item)
  })
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.remove('default');
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
      header.classList.add('default');
  }
});
