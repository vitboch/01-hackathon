import './styles.css'
import { createScope } from '@/utils'
import ContextMenu from '@/menu'
import BackgroundModule from '@/modules/background.module'
import ClicksModule from '@/modules/clicks.module'
import ShapeModule from '@/modules/shape.module'
import PredictionModule from '@/modules/prediction.module'
import HelloModule from '@/modules/hello.module'


const contextMenu = new ContextMenu('.menu')
const backgroundModule = new BackgroundModule('background', 'Background module')
const clicksModule = new ClicksModule('#', 'Clicks module')
const shapeModule = new ShapeModule('#', 'Shape module')

createScope()
const scope = document.querySelector('#scope')
scope.addEventListener('contextmenu', e => contextMenu.open(e))
document.body.addEventListener('click', e => contextMenu.close(e))

contextMenu.add(backgroundModule)
contextMenu.add(clicksModule)
contextMenu.add(shapeModule)


const helloModule = new HelloModule('helloModule', 'Hello module')
contextMenu.add(helloModule)

import { BoardSquaresModule } from '@/modules/board_squares.module'

const boardSquaresModule = new BoardSquaresModule('#', 'Squares board')
contextMenu.add(boardSquaresModule)

const predictionModule = new PredictionModule('#', 'Prediction module')
contextMenu.add(predictionModule)