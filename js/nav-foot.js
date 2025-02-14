const hamBtn = document.getElementById('ham-btn');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');
const footer = document.querySelector('footer');
const subfooter = document.querySelector('.sub-footer');
const sections = document.querySelectorAll('.inicio-sections');

hamBtn.addEventListener('click', () => {
  navMenu.style.display = 'flex';
  hamBtn.style.display = 'none';
  closeBtn.style.display = 'flex';
  sections.forEach((section) => { section.style.display = 'none'; });
  footer.style.display = 'none';
  subfooter.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
  hamBtn.style.display = 'flex';
  closeBtn.style.display = 'none';
  sections.forEach((section) => { section.style.display = 'flex'; });
  footer.style.display = 'flex';
  subfooter.style.display = 'flex';
});