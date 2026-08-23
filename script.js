const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('parsa-theme');
if (savedTheme === 'light') document.body.classList.add('light');

function updateThemeIcon() {
  themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
}
updateThemeIcon();

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('parsa-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  updateThemeIcon();
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
