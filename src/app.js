import './styles.css'
import {createScope} from '@/utils'
import {ContextMenu} from '@/menu'
import {BackgroundModule} from '@/modules/background.module'
import {ClicksModule} from '@/modules/clicks.module'
import {ShapeModule} from '@/modules/shape.module'

const contextMenu = new ContextMenu('.menu')
const backgroundModule = new BackgroundModule('#', 'Background module')
const clicksModule = new ClicksModule('#', 'Clicks module')
const shapeModule = new ShapeModule('#', 'Shape module')

createScope()
const scope = document.querySelector('#scope')
scope.addEventListener('contextmenu', e => contextMenu.open(e))
document.body.addEventListener('click', e => contextMenu.close(e))

contextMenu.add(backgroundModule)
contextMenu.add(clicksModule)
contextMenu.add(shapeModule)