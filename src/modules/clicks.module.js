import {Module} from '../core/module'
import {ModuleClickHTML, moduleClick} from '../utils'


export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        ModuleClickHTML(document.body, 5)
        moduleClick()
    }
}