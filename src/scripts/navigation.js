const header = document.querySelector('#site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  const menuOpen = header.querySelector('details[open]');
  header.classList.toggle('is-hidden', currentY > 120 && currentY > lastY && !menuOpen);
  lastY = currentY;
}, { passive: true });
