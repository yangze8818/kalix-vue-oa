import Evectionapply from './evectionapply'
import EvectionApplyAdd from './evectionApplyAdd'
import EvectionApplySearch from './evectionApplySearch'
import EvectionApplyView from './evectionApplyView'

const components = [
  Evectionapply, EvectionApplyAdd, EvectionApplySearch, EvectionApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
