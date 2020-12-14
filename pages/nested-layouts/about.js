import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const About = (props) => {
  return (
    <>
      <div className="page">
        <h1>About Us</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          est euismod, iaculis ante efficitur, sodales nisl. Nulla non orci
          vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis,
          aliquet neque. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <p>
          Praesent gravida a diam ut faucibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Sed sed
          nibh a ipsum sagittis finibus ac in magna. Curabitur id mauris quis
          nulla commodo tristique.
        </p>

        <p>
          Nunc eu mi et justo sodales vehicula. Vestibulum velit erat, tincidunt
          sed tortor id, viverra egestas felis. Cras in ullamcorper ex. Etiam
          diam lacus, interdum sed rhoncus vel, ultricies ut nisi. Nam ut orci
          at ante auctor mollis. Phasellus eget augue ac nibh vestibulum
          pellentesque. Nulla enim augue, placerat id malesuada at, maximus sed
          tortor.
        </p>
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// About.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// About.getInitialProps = async ({ req }) => {}
About.displayName = '📌 About - PAGE'

export default About
