import Processhistory from './processhistory'

const components = [
  Processhistory
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
