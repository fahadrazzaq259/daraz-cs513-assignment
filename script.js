const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('demoLogin').addEventListener('click', () => {
  const email = document.getElementById('demoEmail').value.trim();
  const password = document.getElementById('demoPass').value;
  const message = document.getElementById('formMessage');
  if (!email || !password) {
    message.textContent = 'Please enter both fields. This is only a local demonstration.';
    message.style.color = '#b45309';
  } else {
    message.textContent = 'Demo check complete. No login request was sent and no data was saved.';
    message.style.color = '#16804a';
  }
});
