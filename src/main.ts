import { Counter } from './components/counter/counter'
import './styles/main.css'
import m from 'mithril'

const Main = {
  view: () => {
    return m('main', m(Counter))
  },
}

m.mount(document.body, Main)
