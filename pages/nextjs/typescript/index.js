import Link from 'next/link'
import withLayout from '../../../layout/withLayout'

const Index = () => (
  <>
    <Link href="/nextjs/typescript/1.layout">
      <a className="btn-x-blue">1.layout</a>
    </Link>
    <Link href="/nextjs/typescript/1.withLayout">
      <a className="btn-x-blue">1.withLayout</a>
    </Link>
    <Link href="/nextjs/typescript/dynamic">
      <a className="btn-x-blue">dynamic</a>
    </Link>
    <Link href="/nextjs/typescript/dynamic2">
      <a className="btn-x-blue">dynamic2</a>
    </Link>
    <Link href="/nextjs/typescript/dynamic3">
      <a className="btn-x-blue">dynamic3</a>
    </Link>
    <Link href="/nextjs/typescript/dynamic4">
      <a className="btn-x-blue">dynamic4</a>
    </Link>
    <Link href="/nextjs/typescript/fetch-ua">
      <a className="btn-x-blue">fetch-ua</a>
    </Link>
    <Link href="/nextjs/typescript/fetch">
      <a className="btn-x-blue">fetch</a>
    </Link>
    <Link href="/nextjs/typescript/forwardref">
      <a className="btn-x-blue">/forwardref</a>
    </Link>
    <Link href="/nextjs/typescript/hello">
      <a className="btn-x-blue">hello</a>
    </Link>
    <Link href="/nextjs/typescript/list">
      <a className="btn-x-blue">list</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </>
)

export default withLayout(Index)
