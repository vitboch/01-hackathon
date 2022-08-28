import './styles.css'
import { createScope } from '@/utils'
import { ContextMenu } from '@/menu'
import { BackgroundModule } from '@/modules/background.module'
import { ClicksModule } from '@/modules/clicks.module'
import { ShapeModule } from '@/modules/shape.module'
import { PredictModule } from '@/modules/predict.module'

const contextMenu = new ContextMenu('.menu')
const backgroundModule = new BackgroundModule('#', 'Background module')
const clicksModule = new ClicksModule('#', 'Clicks module')
const shapeModule = new ShapeModule('#', 'Shape module')
const predictModule = new PredictModule('#', 'Predict the future')

createScope()
const scope = document.querySelector('#scope')
scope.addEventListener('contextmenu', e => contextMenu.open(e))
document.body.addEventListener('click', e => contextMenu.close(e))

contextMenu.add(backgroundModule)
contextMenu.add(clicksModule)
contextMenu.add(shapeModule)
contextMenu.add(predictModule)

import HelloModule from '@/modules/hello.module'

const helloModule = new HelloModule('helloModule', 'Hello module')
contextMenu.add(helloModule)
