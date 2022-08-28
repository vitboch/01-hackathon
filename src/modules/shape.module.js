import { Module } from '../core/module'
import { createCanvas } from '../utils'
import { drawShape } from '../utils'
import { removeElement } from '../utils'

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
