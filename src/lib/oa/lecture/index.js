import Lecture from './lecture'
import LectureAdd from './lectureAdd'
import LectureSearch from './lectureSearch'
import LectureView from './lectureView'

const components = [
  Lecture, LectureAdd, LectureSearch, LectureView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
