import m from 'mithril'
import styles from './button.module.css'

interface ButtonAttrs {
  counter: number
  handleCount: () => void
}

export const Button = {
  view: (vnode: m.Vnode<ButtonAttrs>) =>
    m(
      'button',
      {
        onclick: vnode.attrs.handleCount,
        class: styles.button,
      },
      vnode.attrs.counter + ' clicks'
    ),
}
