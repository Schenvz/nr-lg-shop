//const toggleButton = document.getElementById('bd-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  const themeText = isDarkMode ? 'Dark' : 'Light';
  toggleButton.setAttribute('aria-label', `Toggle theme (${themeText})`);
  document.getElementById('bd-theme-text').innerText = `Toggle theme (${themeText})`;
});
