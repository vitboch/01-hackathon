import { Module } from '../core/module'
import { getRandomColor, createBackgroundModuleHtml } from '../utils'

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    createBackgroundModuleHtml()
    const backgroundModule = document.querySelector('.background-module')
    backgroundModule.classList.add('open')

    const colorBtn = document.querySelector('.background-module__btn--change')
    colorBtn.addEventListener('click', getRandomColor)

    const closeBtn = document.querySelector('.background-module__btn--close')
    closeBtn.addEventListener('click', () => {
      backgroundModule.remove()
      document.body.style.background = 'inherit'
    })
  }
}
