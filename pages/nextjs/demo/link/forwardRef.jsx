import React from 'react'
import Link from 'next/link'

const LXButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className="v-btn" href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

export default () => (
  <>
    <Link href="/about">
      <LXButton />
    </Link>
  </>
)
