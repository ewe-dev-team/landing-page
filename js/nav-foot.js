document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const slideInElements = document.querySelectorAll('.slide-in-left');

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
  slideInElements.forEach((element) => observer.observe(element));
});
