import Oadict from './oadict'

const components = [
  Oadict
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
