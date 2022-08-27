import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  getRandomColor() {
    console.log('hello');
    const randomColorStr = [
      random(0, 255),
      random(0, 255),
      random(0, 255),
    ].join(',');
    const randomColor = `rgb(${randomColorStr})`;
    document.body.style.backgroundColor = randomColor;

    const colorName = document.querySelector('.background-module__color');
    colorName.textContent = randomColor;
  }

  trigger() {
    const backgroundModule = document.querySelector('.background-module');
    backgroundModule.classList.add('open');

    const colorBtn = document.querySelector('.background-module__btn');
    colorBtn.addEventListener('click', this.getRandomColor);
  }
}
