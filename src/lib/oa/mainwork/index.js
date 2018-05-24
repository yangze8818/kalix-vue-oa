import Mainwork from './mainwork'

const components = [
  Mainwork
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
