import React from 'react'
import DefaultLayout from './default'
import MainLayout from './main'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const AppLayout = (props) => {
  const { Component, ...rest } = props
  const Layout = Component.Layout || DefaultLayout
  return (
    <MainLayout>
      <Layout>
        <Component {...rest} />
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
