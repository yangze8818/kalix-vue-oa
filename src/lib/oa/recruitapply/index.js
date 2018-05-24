import Recruitapply from './recruitapply'
import RecruitApplyAdd from './recruitApplyAdd'
import RecruitApplySearch from './recruitApplySearch'
import RecruitApplyView from './recruitApplyView'

const components = [
  Recruitapply, RecruitApplyAdd, RecruitApplySearch, RecruitApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
