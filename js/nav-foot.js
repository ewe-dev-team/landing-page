const hamBtn = document.getElementById('ham-btn');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

hamBtn.addEventListener('click', () => {
  navMenu.style.display = 'flex';
  hamBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
  hamBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const slideInLeftElements = document.querySelectorAll('.slide-in-left');
  const slideInRightElements = document.querySelectorAll('.slide-in-right');
  const zoomInElements = document.querySelectorAll('.zoom-in');

  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => observer.observe(element));
  slideInLeftElements.forEach((element) => observer.observe(element));
  slideInRightElements.forEach((element) => observer.observe(element));
  zoomInElements.forEach((element) => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentFile = window.location.pathname.split('/').pop(); // Obtiene solo el nombre del archivo

  navLinks.forEach((link) => {
    const linkFile = link.getAttribute('href').split('/').pop(); // Obtiene solo el nombre del archivo del enlace

    if (linkFile === currentFile) {
      link.style.color = '#ca1217';
    }
  });
});
