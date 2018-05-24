import Tempapply from './tempapply'
import TempApplyAdd from './tempApplyAdd'
import TempApplySearch from './tempApplySearch'
import TempApplyView from './tempApplyView'

const components = [
  Tempapply, TempApplyAdd, TempApplySearch, TempApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
