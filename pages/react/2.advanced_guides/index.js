import Link from 'next/link'

const info = [
  {
    name: 'Context',
    route: 'context'
  },
  {
    name: 'Default Props',
    route: 'default-props'
  },
  {
    name: 'HOC',
    route: 'hoc'
  },
  {
    name: 'mixin',
    route: 'Mixin'
  },
  {
    name: 'Portals',
    route: 'portals'
  },
  {
    name: 'Refs',
    route: 'refs'
  },
  {
    name: 'Refs & Dom',
    route: 'refs&dom'
  },
  {
    name: 'Render Props(MouseTracker)',
    route: 'render_props.MouseTracker'
  },
  {
    name: 'Uncontrolled Components',
    route: 'uncontrolled_components'
  },
  {
    name: 'Web Components',
    route: 'web_components'
  },
  {
    name: '',
    route: ''
  }
]
const Index = () => {
  return (
    <>
      {info
        .filter(t => t.name)
        .map(t => (
          <Link key={t.name} href={`/react/2.advanced_guides/${t.route}`}>
            <a className="btn-x-blue">{t.name}</a>
          </Link>
        ))}
    </>
  )
}
export default Index
