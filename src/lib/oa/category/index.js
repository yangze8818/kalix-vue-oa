import Category from './category'
import CategoryAdd from './categoryAdd'
import CategorySearch from './categorySearch'
import CategoryView from './categoryView'

const components = [
  Category, CategoryAdd, CategorySearch, CategoryView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
