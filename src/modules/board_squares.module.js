import { Module } from '../core/module'
import { randomColor, createModal, getScope } from '../utils'

export class BoardSquaresModule extends Module {
  #scope
  #modal

  constructor(type, text) {
    super(type, text)
    this.#scope = getScope('#scope')
    this.#modal = createModal('squares_board-modal')
  }

  #createBoard() {
    this.#modal = createModal('squares_board-modal')

    const board = document.createElement('div')
    board.classList.add('board')
    const boardInner = document.createElement('div')
    boardInner.classList.add('board__inner')

    board.insertAdjacentElement('beforeend', boardInner)
    this.#modal.append(board)
    this.#scope.append(this.#modal)
    this.#modal.style.background = 'inherit'

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
      element.style.background = color
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
      element.style.background = '#ccc'
      element.style.boxShadow = `0 0 2px #333`
    }
  }

  trigger() {
    if (getScope('#squares_board-modal')) return

    this.#createBoard()
    this.#scope.append(this.#modal)
  }
}
