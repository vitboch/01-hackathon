export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// create scope
export function createScope() {
  const scope = document.createElement('div')
  scope.id = 'scope'
  document.body.append(scope)
}

export function createModal(modalId) {
  const modal = document.createElement('div')
  modal.id = `${modalId}`
  modal.classList.add('modal')

  const modalCloseButton = document.createElement('button')
  modalCloseButton.classList.add('modal_close-button')
  modalCloseButton.textContent = 'X'
  modalCloseButton.style.color = '#0000004C'

  modalCloseButton.addEventListener('click', () => {
    const modal = document.querySelector(`#${modalId}`)
    modal.innerHTML = ''
    modal.remove()
  })

  modal.append(modalCloseButton)
  return modal
}

export function getScope(id = '') {
  return document.querySelector(id)
}

export function randomColor() {
  const randomColorStr = [random(0, 255), random(0, 255), random(0, 255)].join(
    ',',
  )
  const randomColor = `rgb(${randomColorStr})`
  return randomColor
}

export function removeElement(elementName) {
  const elementHtml = document.querySelector(elementName)
  if (elementHtml) {
    elementHtml.remove()
  }
}

export function drawRect() {
  const canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = randomColor()
  ctx.fillRect(random(0, 100), random(0, 100), random(30, 100), random(30, 100))
  return canvas
}

export function drawSquare() {
  const position = random(0, 100)
  const length = random(10, 100)
  const canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = randomColor()
  ctx.fillRect(position, position, length, length)
  return canvas
}

export function drawTrigon() {
  const canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = randomColor()
  ctx.beginPath()
  ctx.moveTo(random(0, 100), random(0, 100))
  ctx.lineTo(random(0, 100), random(0, 100))
  ctx.lineTo(random(0, 100), random(0, 100))
  ctx.fill()
  return canvas
}

export function drawEllipse() {
  const position = random(20, 100)
  const canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = randomColor()
  ctx.beginPath()
  ctx.arc(position, position, random(0, 50), 0, Math.PI * 2, true)
  ctx.fill()
  return canvas
}

export function drawCircle() {
  const position = random(50, 100)
  const canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = randomColor()
  ctx.beginPath()
  ctx.arc(position, position, random(20, 50), 0, Math.PI * 2, true)
  ctx.fill()
  return canvas
}

export function createCanvas() {
  const scopeHtml = document.querySelector('#scope')

  const shapeModule = document.createElement('div')
  shapeModule.id = 'shape_module-div'

  const canvas = document.createElement('canvas')
  canvas.id = 'canvas'
  canvas.className = 'canvas'

  const shapeCloseButton = document.createElement('button')
  shapeCloseButton.className = 'shape_close-button'
  shapeCloseButton.textContent = 'Close shape'

  shapeCloseButton.addEventListener('click', () => {
    const shapeModule = document.querySelector(`#shape_module-div`)
    shapeModule.remove()
  })

  shapeModule.append(shapeCloseButton, canvas)
  scopeHtml.append(shapeModule)

  return canvas
}

export function drawShape() {
  const randomNum = random(1, 5)
  switch (randomNum) {
    case 1:
      drawRect()
      break
    case 2:
      drawSquare()
      break
    case 3:
      drawTrigon()
      break
    case 4:
      drawEllipse()
      break
    default:
      drawCircle()
      break
  }
}

export function getRandomColor() {
  const firstColor = randomColor()
  const secondColor = randomColor()
  document.body.style.background = `linear-gradient(${firstColor},${secondColor})`
}

export function createBackgroundModuleHtml() {
  const backgroundModule = document.createElement('div')
  backgroundModule.classList.add('background-module')

  const backgroundButton = document.createElement('button')
  backgroundButton.classList.add('background-module__btn')
  backgroundButton.classList.add('background-module__btn--change')
  backgroundButton.textContent = 'Change background'
  backgroundButton.type = 'button'

  const backgroundCloseButton = document.createElement('button')
  backgroundCloseButton.classList.add('background-module__btn')
  backgroundCloseButton.classList.add('background-module__btn--close')
  backgroundCloseButton.textContent = 'Close'
  backgroundCloseButton.type = 'button'

  backgroundModule.append(backgroundButton, backgroundCloseButton)
  document.body.children[1].insertAdjacentElement('beforeend', backgroundModule)
}

export function createGif(url) {
  const imgHtml = document.createElement('img')
  imgHtml.id = 'crystal_ball'
  imgHtml.src = url
  imgHtml.alt = 'Crystal Ball'
  imgHtml.className = 'cristal_ball-img'
  return imgHtml
}

// click module
export function moduleClick() {
  const timeEl = document.getElementById('timer')
  const scoreHTML = document.querySelector('.clicks-module__score')
  const infoScore = document.getElementById('score')

  let time = 3
  let score = 0
  timeEl.textContent = time + ' sec.'
  const timer = setInterval(function () {
    time = --time
    if (time <= 0) {
      clearInterval(timer)
      infoScore.textContent = score
      scoreHTML.classList = 'clicks-module__score'
      if (score <= 7) {
        resultText('could have been better')
      } else if (score <= 15) {
        resultText('you are doing well')
      } else if (score <= 28) {
        resultText('is the button still intact?')
      } else if ((score = 35)) {
        resultText('Can you already stop doing nonsense and start working?')
      }
    }

    timeEl.textContent = time + ' sec.'
  }, 1000)

  window.addEventListener('mousedown', event => {
    event.preventDefault()
    if (time > 0) {
      score++
      console.log('click', score)
    }
  })
}

export function ModuleClickHTML(parent) {
  const container = `<div class="clicks-module__container">
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

  parent.insertAdjacentHTML('afterbegin', container)
}

function resultText(text) {
  const resultTextHTML = document.querySelector('.clicks-module__text')
  resultTextHTML.classList = 'clicks-module__text'
  resultTextHTML.textContent = text
}

export function cleanScope() {
  const scope = document.querySelector('#scope')
  scope.innerHTML = ''
}
