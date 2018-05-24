import Task from './task'
import TaskSearch from './taskSearch'

const components = [
  Task, TaskSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
