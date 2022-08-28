import { Module } from '../core/module'
import { createModal, getScope } from '../utils'

export default class HelloModule extends Module {
  #scope
  #modal

  constructor(type, text) {
    super(type, text)
    this.#scope = getScope('#scope')
    this.#modal = createModal('hello-modal')
  }

  #sayHello() {
    this.#modal = createModal('hello-modal')

    const titleHello = document.createElement('h1')
    titleHello.id = 'hello-modal_title'
    titleHello.innerHTML = `<p>A team of novice developers is glad to see you on our website!</p>`

    this.#modal.append(titleHello)
    this.#scope.append(this.#modal)
  }

  trigger() {
    document.body.children[1].innerHTML = ''
    if (getScope('#hello-modal')) return

    this.#sayHello()
    this.#scope.append(this.#modal)
  }
}