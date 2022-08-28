import { Module } from '../core/module'
import { randomColor } from '../utils'

export class BoardSquaresModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    const board = document.createElement('div')
    board.classList.add('board')
    const boardInner = document.createElement('div')
    boardInner.classList.add('board__inner')

    board.insertAdjacentElement('beforeend', boardInner)
    document.body.insertAdjacentElement('beforeend', board)

    const squaresNumber = 500

    for (let i = 0; i < squaresNumber; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.addEventListener('mouseover', () => setColor(square))
      square.addEventListener('mouseleave', () => removeColor(square))
      boardInner.append(square)
    }

    function setColor(element) {
      const color = randomColor()
      console.log(color)
      element.style.background = color
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
      element.style.background = '#1d1d1d'
      element.style.boxShadow = `0 0 2px #000`
    }
  }
}
