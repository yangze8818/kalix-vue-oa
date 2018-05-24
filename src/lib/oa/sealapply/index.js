import Sealapply from './sealapply'
import SealApplyAdd from './sealApplyAdd'
import SealApplySearch from './sealApplySearch'
import SealApplyView from './sealApplyView'

const components = [
  Sealapply, SealApplyAdd, SealApplySearch, SealApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
