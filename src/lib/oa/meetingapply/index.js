import Meetingapply from './meetingapply'
import MeetingApplyAdd from './meetingApplyAdd'
import MeetingApplySearch from './meetingApplySearch'
import MeetingApplyView from './meetingApplyView'

const components = [
  Meetingapply, MeetingApplyAdd, MeetingApplySearch, MeetingApplyView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
