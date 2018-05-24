import Document from './document'
import DocumentPublish from './documentPublish'
import DocumentSearch from './documentSearch'
import DocumentView from './documentView'

const components = [
  Document, DocumentPublish, DocumentSearch, DocumentView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
