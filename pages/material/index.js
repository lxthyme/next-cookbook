import Link from 'next/link'

import MobileLayout from '../../layout/Mobile'

export default () => (
  <MobileLayout title="Material">
    <h2>nextjs-with-typescript</h2>
    <Link href="material/nextjs-with-typescript/typography">
      <a className="btn-x-blue">Typography</a>
    </Link>
    <h2>Material UI</h2>
    <h4>1. layout</h4>
    <Link href="material/layout/box">
      <a className="btn-x-blue">box</a>
    </Link>
    <Link href="material/layout/container">
      <a className="btn-x-blue">container</a>
    </Link>
    <Link href="material/layout/grid">
      <a className="btn-x-blue">Grid</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </MobileLayout>
)
