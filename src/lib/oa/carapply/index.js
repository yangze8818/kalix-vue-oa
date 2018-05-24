import Carapply from './carapply'
import CarApplyAdd from './carApplyAdd'
import CarApplySearch from './carApplySearch'
import CarApplyView from './carApplyView'

const components = [
  Carapply, CarApplyAdd, CarApplySearch, CarApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
