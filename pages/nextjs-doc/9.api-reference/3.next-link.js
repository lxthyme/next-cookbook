import Link from 'next/link'

// import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Button = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <>
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
      {/* <style jsx>{``}</style> */}
    </>
  )
})

const Page = () => {
  const imgTapped = e => {
    console.log('E: ', e)
  }
  return (
    <>
      <Link href="/nextjs/about" passHref>
        <Button />
      </Link>
      <hr />
      <Link href={{ pathname: '/nextjs/about', query: { name: 'ZEIT' } }}>
        <a>About US</a>
      </Link>
      <hr />
      <Link href="/nextjs/about">
        <img src="/static/image.png" alt="image" onClick={imgTapped} />
      </Link>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
