function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
