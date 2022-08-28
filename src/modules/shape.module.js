import { Module } from '../core/module'
import { createCanvas, drawShape, removeElement } from '../utils'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    removeElement('canvas')
    const canvas = createCanvas()
    canvas.classList.add('open')
    drawShape()
  }
}
