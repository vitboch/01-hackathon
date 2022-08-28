import { Module } from '../core/module'
import { createCanvas, drawShape, removeElement, cleanScope } from '../utils'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    cleanScope()
    removeElement('#shape_module-div')
    const canvas = createCanvas()
    canvas.classList.add('open')
    drawShape()
  }
}
