import Processdefinition from './processdefinition'
import ProcessDefinitionSearch from './processDefinitionSearch'

const components = [
  Processdefinition, ProcessDefinitionSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
