// Dark/Light Mode Switch
const modeSwitch = document.getElementById('modeSwitch');
const logo = document.getElementById('logo');
const favicon = document.getElementById('favicon');

function setMode(dark) {
  document.body.classList.toggle('dark-mode', dark);
  if (logo) logo.src = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  if (favicon) favicon.href = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  localStorage.setItem('darkMode', dark ? '1' : '0');
  if (modeSwitch) modeSwitch.checked = dark;
}
if (modeSwitch) {
  modeSwitch.addEventListener('change', () => {
    setMode(modeSwitch.checked);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('darkMode') === '1';
  setMode(dark);
  if (modeSwitch) modeSwitch.checked = dark;
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// Fade-in on Scroll
function handleFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);
