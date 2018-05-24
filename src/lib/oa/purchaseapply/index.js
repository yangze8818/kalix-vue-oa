import Purchaseapply from './purchaseapply'

const components = [
  Purchaseapply
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
