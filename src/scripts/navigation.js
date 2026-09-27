const header = document.querySelector('#site-header');
const toggle = header?.querySelector('.menu-toggle');
const menu = header?.querySelector('#primary-menu');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 40);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  menu?.classList.toggle('is-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open menu');
  });
});

const dropdowns = header?.querySelectorAll('.nav-dropdown');

dropdowns?.forEach((selected) => {
  selected.addEventListener('toggle', () => {
    if (!selected.open) return;

    dropdowns.forEach((other) => {
      if (other !== selected) other.open = false;
    });
  });
});