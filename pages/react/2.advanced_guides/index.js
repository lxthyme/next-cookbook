import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Link href="/react/2.advanced_guides/context" as="/react/2.advanced_guides/context">
        <a className="v-btn">Context</a>
      </Link>
      <Link href="/react/2.advanced_guides/refs" as="/react/2.advanced_guides/refs">
        <a className="v-btn">Refs</a>
      </Link>
      <Link href="/react/2.advanced_guides/hoc" as="/react/2.advanced_guides/hoc">
        <a className="v-btn">HOC</a>
      </Link>
      <Link href="/react/2.advanced_guides/portals" as="/react/2.advanced_guides/portals">
        <a className="v-btn">Portals</a>
      </Link>
      <Link href="/react/2.advanced_guides/default-props" as="/react/2.advanced_guides/default-props">
        <a className="v-btn">Default Props</a>
      </Link>
      <Link href="/react/2.advanced_guides/mixin" as="/react/2.advanced_guides/mixin">
        <a className="v-btn">Mixin</a>
      </Link>
    </>
  )
}
export default Index
