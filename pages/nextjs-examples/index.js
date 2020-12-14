import Link from 'next/link'

import MobileLayout from '../../layout/Mobile'

export default () => (
  <MobileLayout title="Material">
    <Link href="nextjs-examples/no-ssr">
      <a className="btn-x-blue">NO SSR</a>
    </Link>
    <Link href="nextjs-examples/svg">
      <a className="btn-x-blue">SVG</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </MobileLayout>
)
