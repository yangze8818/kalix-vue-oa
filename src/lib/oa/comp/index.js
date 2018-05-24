import ProcessDefinitionView from './processDefinitionView'
import ProcessHistorySearch from './processHistorySearch'
import ProcessHistoryView from './processHistoryView'
import TaskComplete from './taskComplete'
import TaskView from './taskView'

const components = [
  ProcessDefinitionView, ProcessHistorySearch, ProcessHistoryView, TaskComplete, TaskView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
