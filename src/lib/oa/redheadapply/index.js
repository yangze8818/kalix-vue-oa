import Redheadapply from './redheadapply'
import RedheadApplyAdd from './redheadApplyAdd'
import RedheadApplySearch from './redheadApplySearch'
import RedheadApplyView from './redheadApplyView'

const components = [
  Redheadapply, RedheadApplyAdd, RedheadApplySearch, RedheadApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
