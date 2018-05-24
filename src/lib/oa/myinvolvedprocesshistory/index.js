import Myinvolvedprocesshistory from './myinvolvedprocesshistory'

const components = [
  Myinvolvedprocesshistory
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
