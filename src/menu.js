import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    add(module) {
        this.el.insertAdjacentHTML('afterbegin', module.toHTML())
        const li = this.el.querySelector('.menu-item')

        li.addEventListener('click', () => {
            module.trigger()
        })
    }

    open(event) {
        event.preventDefault()
        this.el.style.left = `${event.clientX}px`
        this.el.style.top = `${event.clientY}px`
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }
}