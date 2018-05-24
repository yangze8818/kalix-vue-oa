import Myprocesshistory from './myprocesshistory'

const components = [
  Myprocesshistory
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
