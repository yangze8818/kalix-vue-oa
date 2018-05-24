import Meetingroomapply from './meetingroomapply'
import MeetingroomApplyAdd from './meetingroomApplyAdd'
import MeetingroomApplySearch from './meetingroomApplySearch'
import MeetingroomApplyEdit from './meetingroomApplyEdit'
import MeetingroomApplyView from './meetingroomApplyView'

const components = [
  Meetingroomapply, MeetingroomApplyAdd, MeetingroomApplySearch, MeetingroomApplyEdit, MeetingroomApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
