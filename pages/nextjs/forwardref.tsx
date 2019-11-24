import React from 'react'

import Link from 'next/link'

const MyButton = React.forwardRef(({onClick, href}, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    Click Me
  </a>
))
export default () => (
  <>
    {/* <Link href="/about"> */}
    <Link href={{pathname: '/about', query: {name: 'Zeit'}}}>
      <MyButton />
    </Link>
    <br />
    <Link href={{pathname: '/about', query: {name: 'Zeit'}}} replace>
      <MyButton />
    </Link>
    <Link href="/about">
      <img src="/img/rescure/bg_modal.png" alt="image" />
    </Link>
    <Link href="/about" passHref>
      <a>Unexpected_A</a>
    </Link>
    <br/>
    <Link href={{pathname: '/list', query: {id: '233'}}}>List</Link>
  </>
)
