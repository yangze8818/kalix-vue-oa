import Reimbursementapply from './reimbursementapply'
import ReimbursementApplyAdd from './reimbursementApplyAdd'
import ReimbursementApplySearch from './reimbursementApplySearch'
import ReimbursementApplyView from './reimbursementApplyView'
import Detail from './detail'
import DetailAdd from './detailAdd'

const components = [
  Reimbursementapply, ReimbursementApplyAdd, ReimbursementApplySearch, ReimbursementApplyView, Detail, DetailAdd
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
