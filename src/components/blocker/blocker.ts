import m from 'mithril'
import { Svg } from '../svg/svg'

interface BlockerAttrs {
  id: string
  fill: string
}

export const Blocker = {
  view: ({ attrs }: m.Vnode<BlockerAttrs>) =>
    m(Svg, { viewBox: '0 0 16px 16px' }, [
      m('circle', {
        id: attrs.id,
        r: 8,
        cx: '50%',
        cy: '50%',
        fill: attrs.fill,
      }),
    ]),
}
