import m from 'mithril'
import styles from './counter.module.css'
import { Button } from '../button/button'
import { Blocker } from '../blocker/blocker'

//for example, in vnode
interface CounterAttrs {}

interface CounterState {
  count: number
}

export const Counter = {
  count: 0,
  view: (vnode: m.Vnode<CounterAttrs, CounterState>) => {
    return m(
      'div',
      {
        class: styles.container,
      },
      [
        'Count: ' + vnode.state.count,
        m(Button, {
          counter: vnode.state.count,
          handleCount: () => vnode.state.count++,
        }),
        m(Blocker, { id: 'blocker', fill: 'red' }),
      ]
    )
  },
}
