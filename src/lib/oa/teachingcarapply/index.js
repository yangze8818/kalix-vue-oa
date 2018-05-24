import Teachingcarapply from './teachingcarapply'
import TeachingCarApplyAdd from './teachingCarApplyAdd'
import TeachingCarApplySearch from './teachingCarApplySearch'
import TeachingCarApplyView from './teachingCarApplyView'

const components = [
  Teachingcarapply, TeachingCarApplyAdd, TeachingCarApplySearch, TeachingCarApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
