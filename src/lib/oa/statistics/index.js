import Statistics from './statistics'
import StatisticsSearch from './statisticsSearch'

const components = [
  Statistics, StatisticsSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
