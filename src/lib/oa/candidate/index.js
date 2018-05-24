import Candidate from './candidate'
import CandidateAdd from './candidateAdd'
import CandidateView from './candidateView'
import CandidateSearch from './candidateSearch'

const components = [
  Candidate, CandidateAdd, CandidateView, CandidateSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
