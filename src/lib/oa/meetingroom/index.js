import Meetingroom from './meetingroom'
import MeetingroomAdd from './meetingroomAdd'
import MeetingroomSearch from './meetingroomSearch'
import MeetingroomView from './meetingroomView'

const components = [
  Meetingroom, MeetingroomAdd, MeetingroomSearch, MeetingroomView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
