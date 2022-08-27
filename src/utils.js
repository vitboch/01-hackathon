export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function createScope() {
  const scope = document.createElement('div');
  scope.id = 'scope';
  document.body.append(scope);
}

export function randomColor() {
  const randomColorStr = [random(0, 255), random(0, 255), random(0, 255)].join(
    ',',
  );
  return `rgb(${randomColorStr})`;
}

export function getRandomColor() {
  const firstColor = randomColor();
  const secondColor = randomColor();
  document.body.style.background = `linear-gradient(${firstColor},${secondColor})`;
}

export function createBackgroundModuleHtml() {
  const backgroundModule = document.createElement('div');
  backgroundModule.classList.add('background-module');

  const backgroundButton = document.createElement('button');
  backgroundButton.classList.add('background-module__btn');
  backgroundButton.classList.add('background-module__btn--change');
  backgroundButton.textContent = 'Change background';
  backgroundButton.type = 'button';

  const backgroundCloseButton = document.createElement('button');
  backgroundCloseButton.classList.add('background-module__btn');
  backgroundCloseButton.classList.add('background-module__btn--close');
  backgroundCloseButton.textContent = 'Close';
  backgroundCloseButton.type = 'button';

  backgroundModule.append(backgroundButton, backgroundCloseButton);
  document.body.insertAdjacentElement('beforeend', backgroundModule);
}
