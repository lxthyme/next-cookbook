// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <div className="v-scss-wrapper">
        <div className="v-btn-group">
          <button className="v-btn-confirm">Confirm</button>
          <button className="v-btn-cancel">Cancel</button>
        </div>
      </div>
      <style jsx>{`
        .v-scss-wrapper {
          .v-btn-group {
            .v-btn-confirm {
              color: #525eff;
            }
            .v-btn-cancel {
              color: #bfbfbf;
            }
          }
        }
      `}</style>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
