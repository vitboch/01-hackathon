import {Module} from '@/core/module'
import {
    createModal,
    getScope,
    random,
    createGif
} from '@/utils'
import {predictions} from '@/data/predictions'

export default class PredictionModule extends Module {
    #scope
    #modal

    constructor(type, text) {
        super(type, text)
        this.#scope = getScope('#scope')
        this.#modal = createModal('prediction-modal')
    }

    #showPrediction() {
        this.#modal = createModal('prediction-modal')
        this.#modal.className += ' prediction'

        const crystalBall = createGif('https://i.gifer.com/XDZT.gif')

        const prediction = predictions[random(0, predictions.length - 1)]

        const titlePrediction = document.createElement('h1')
        titlePrediction.id = 'prediction-modal_title'
        titlePrediction.innerHTML = `<p>${prediction}</p>`

        this.#modal.append(crystalBall, titlePrediction)
        this.#scope.append(this.#modal)
    }

    trigger() {
        document.body.children[1].innerHTML = ''
        if (getScope('#prediction-modal')) return

        this.#showPrediction()
        this.#scope.append(this.#modal)
    }
}