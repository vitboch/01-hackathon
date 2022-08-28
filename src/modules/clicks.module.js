import { Module } from '../core/module'
import { ModuleClickHTML, moduleClick, cleanScope } from '../utils'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    cleanScope()
    ModuleClickHTML(document.body.children[1], 5)
    moduleClick()
  }
}
