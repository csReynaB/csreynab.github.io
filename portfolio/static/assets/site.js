const menuButton = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.site-nav');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') === 'false');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));

const plotImage = document.querySelector('#signal-image');
const plotButtons = document.querySelectorAll('.plot-button');

plotButtons.forEach((button) => {
  button.addEventListener('click', () => {
    plotImage.src = button.dataset.src;
    plotImage.alt = button.dataset.alt;
    plotButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  });
});

document.documentElement.classList.add('enhanced');
