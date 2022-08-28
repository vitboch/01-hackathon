import { Module } from '../core/module'
import { random } from '../utils'
import { createPredictDiv } from '../utils'
import { removeElement } from '../utils'

export class PredictModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    const predictions = [
      'Тебя ждет успех',
      'Ждет счастье',
      'Выиграешь в лотерею',
    ]
    const prediction = predictions[random(0, predictions.length - 1)]

    removeElement('#predict_div')
    const predictDiv = createPredictDiv(prediction)
    predictDiv.classList.add('open')
  }
}
