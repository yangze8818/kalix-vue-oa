import Employapply from './employapply'
import EmployApplySearch from './employApplySearch'
import EmployApplyView from './employApplyView'

const components = [
  Employapply, EmployApplySearch, EmployApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
