import React from 'react'
import DocsLayout from '../../../layout/nested-layouts/docs'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const DocsPage2 = (props) => {
  return (
    <>
      <div className="docs">
        <h1>Page 2</h1>

        <p>
          Tristique et egestas quis ipsum suspendisse ultrices. Nunc scelerisque
          viverra mauris in aliquam. Varius sit amet mattis vulputate enim
          nulla. Sem integer vitae justo eget magna fermentum. Viverra mauris in
          aliquam sem. Enim lobortis scelerisque fermentum dui faucibus in.
          Gravida dictum fusce ut placerat orci nulla. Sed adipiscing diam donec
          adipiscing tristique risus. Aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant. Donec ultrices tincidunt
          arcu non sodales neque sodales ut etiam.
        </p>

        <p>
          Lectus urna duis convallis convallis tellus id interdum. Lacus luctus
          accumsan tortor posuere ac. Rhoncus est pellentesque elit ullamcorper.
          Ornare arcu odio ut sem nulla pharetra. Feugiat sed lectus vestibulum
          mattis ullamcorper velit sed ullamcorper morbi. Semper viverra nam
          libero justo laoreet sit amet cursus. Fames ac turpis egestas sed
          tempus urna et pharetra pharetra. Congue eu consequat ac felis donec
          et odio pellentesque. Suspendisse in est ante in nibh mauris. Commodo
          quis imperdiet massa tincidunt.
        </p>

        <p>
          Eu augue ut lectus arcu bibendum at. Quis imperdiet massa tincidunt
          nunc pulvinar sapien et. Nunc consequat interdum varius sit amet
          mattis vulputate. Arcu odio ut sem nulla pharetra diam sit. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Curabitur gravida arcu
          ac tortor dignissim convallis aenean et. Nunc sed id semper risus in
          hendrerit gravida rutrum quisque. Eget duis at tellus at urna. Quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.
          Dolor sit amet consectetur adipiscing elit pellentesque.
        </p>
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// DocsPage2.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// DocsPage2.getInitialProps = async ({ req }) => {}
DocsPage2.displayName = '📌 DocsPage2 - PAGE'

DocsPage2.Layout = DocsLayout
export default DocsPage2
