import { Module } from '../core/module';
import { randomColor } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.createHtml();
    const backgroundModule = document.querySelector('.background-module');
    backgroundModule.classList.add('open');

    const colorBtn = document.querySelector('.background-module__btn');
    colorBtn.addEventListener('click', this.getRandomColor);
  }

  getRandomColor() {
    const firstColor = randomColor();
    const secondColor = randomColor();
    document.body.style.background = `linear-gradient(${firstColor},${secondColor})`;
  }

  createHtml() {
    const backgroundModule = document.createElement('div');
    backgroundModule.classList.add('background-module');

    const backgroundButton = document.createElement('button');
    backgroundButton.classList.add('background-module__btn');
    backgroundButton.textContent = 'Change background';
    backgroundButton.type = 'button';

    backgroundModule.append(backgroundButton);
    document.body.insertAdjacentElement('beforeend', backgroundModule);
  }
}
