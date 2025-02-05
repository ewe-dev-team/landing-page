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