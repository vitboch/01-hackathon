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
  const canvas = document.createElement('canvas')
  canvas.id = 'canvas'
  canvas.className = 'canvas'
  scopeHtml.append(canvas)

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

// Predict the future

export function createPredictDiv(text) {
  const scopeHtml = document.querySelector('#scope')
  const predictDiv = document.createElement('div')
  predictDiv.id = 'predict_div'
  predictDiv.className = 'predict_div'
  predictDiv.textContent = text
  scopeHtml.append(predictDiv)

  return predictDiv
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
  document.body.insertAdjacentElement('beforeend', backgroundModule)
}
