import {Module} from '../core/module'
import {ModuleClickHTML, moduleClick} from '../utils'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        document.body.children[1].innerHTML = ''
        ModuleClickHTML(document.body.children[1], 5)
        moduleClick()
    }
}