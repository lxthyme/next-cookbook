import React from 'react'
import DefaultLayout from '../layout/nested-layouts/default'
import MainLayout from '../layout/nested-layouts/main'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const AppLayout = (props) => {
  const { Component, pageProps } = props
  const Layout = Component.Layout || DefaultLayout
  console.log('AppLayout: ', props)
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  )
}

// AppLayout.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// AppLayout.getInitialProps = async ({ req }) => {}
AppLayout.displayName = '🌍 AppLayout - LAYOUT'

export default AppLayout
