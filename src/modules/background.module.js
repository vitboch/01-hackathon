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
    const backgroundColor = randomColor();
    document.body.style.backgroundColor = backgroundColor;

    const colorName = document.querySelector('.background-module__color');
    colorName.textContent = backgroundColor;
  }

  createHtml() {
    const backgroundHtml = `<div class="background-module">
    <button class="background-module__btn" type="button">Сменить фон</button>
    <p class="background-module__color"><span>Цвет в RGB</span></p>
  </div>`;
    document.body.insertAdjacentHTML('beforeend', backgroundHtml);
  }
}
