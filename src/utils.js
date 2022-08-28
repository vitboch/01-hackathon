export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function createScope() {
  const scope = document.createElement('div');
  scope.id = 'scope';
  document.body.append(scope);
}

export function createModal(modalId) {
  const modal = document.createElement('div');
  modal.id = `${modalId}`;
  modal.classList.add('modal');

  const modalCloseButton = document.createElement('button');
  modalCloseButton.classList.add('modal_close-button');
  modalCloseButton.textContent = 'X';
  modalCloseButton.style.color = '#0000004C';

  modalCloseButton.addEventListener('click', () => {
    const modal = document.querySelector(`#${modalId}`);
    modal.innerHTML = '';
    modal.remove();
  });

  modal.append(modalCloseButton);
  return modal;
}

export function getScope(id = '') {
  return document.querySelector(id);
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
  document.body.children[1].insertAdjacentElement('beforeend', backgroundModule);
}

// click module
export function moduleClick() {
    const clickModule = document.querySelector('.clicks-module__container')
    const timeEl = document.getElementById('timer')
    const scoreHTML = document.querySelector('.clicks-module__score')
    const infoScore = document.getElementById('score')

    let time = 5
    let score = 0
    timeEl.textContent = time + ' сек'
    const timer = setInterval(function () {
        time = --time
        if (time <= 0) {
            clearInterval(timer)
            infoScore.textContent = score
            scoreHTML.classList = 'clicks-module__score'
            if (score <= 10) {
                resultText('можно было и лучше')
            } else if (score <= 20) {
                resultText('у вас хорошо получается')
            } else if (score <= 35) {
                resultText('кнопка еще цела?')
            } else if (score = 40) {
                resultText('Может уже перестанешь заниматься ерундой и начнешь работать?')
            }
        }

        timeEl.textContent = time + ' сек.'
    }, 1000)

    window.addEventListener('mousedown', (event) => {
        event.preventDefault()
        if (time > 0) {
            score++
            console.log('click', score)
        }
    })
}

export function ModuleClickHTML(parent) {
    const container =
        `<div class="clicks-module__container">
                        <div class="clicks-module">
                            <h1 class="clicks-module__title">Кликай быстрей, осталось:</h1>
                        </div>
                        <div
                            <span id="timer">сек.</span>
                        </div>
                        <div class="clicks-module__score hidden">
                            <h3>Ваш счет:</h3>
                            <span id="score"></span>
                        </div>
                        <div class="clicks-module__text hidden">
                            <p></p>
                        </div>
                    </div>`

    parent.insertAdjacentHTML("afterbegin", container)
}

function resultText(text) {
    const resultTextHTML = document.querySelector('.clicks-module__text')
    resultTextHTML.classList = 'clicks-module__text'
    resultTextHTML.textContent = text
}