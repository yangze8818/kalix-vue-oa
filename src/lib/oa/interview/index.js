import Interview from './interview'
import InterviewAdd from './interviewAdd'
import InterviewSearch from './interviewSearch'
import InterviewView from './interviewView'

const components = [
  Interview, InterviewAdd, InterviewSearch, InterviewView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
