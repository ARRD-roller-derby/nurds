import m from 'mithril'

interface SvgAttrs {
  viewBox?: string
}

export const Svg = {
  view: (vnode: m.Vnode<SvgAttrs>) => {
    return m('svg', { viewBox: vnode.attrs.viewBox || '0 0 500 500' }, [
      vnode.children,
    ])
  },
}
