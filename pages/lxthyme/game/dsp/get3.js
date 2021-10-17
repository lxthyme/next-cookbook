import { useEffect } from 'react'
import { getList } from '../../../../plugin/sql'
import { formatList } from '../../../../plugin/dsp.format3'

// export const config = { amp: true };

const Get3 = props => {
  useEffect(() => {
    window.info = {
      getList,
      getAllList
    }
  })
  const getAllList = (page = 1, pageSize = 20, table = 'detail20', idx = 1) => {
    return getList(page, pageSize, table, idx)
      .then(res => {
        const { list, ...rest } = res
        console.log('res: ', res)
        window.info.res = {
          ...rest,
          list: formatList(list)
        }
      })
      .catch(error => {
        console.log('-->Error: ', error)
      })
  }
  return (<>
    <p>123</p>
    {/* <style jsx>{``}</style> */}
  </>)
}

// Get3.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Get3.getInitialProps = async ({ req }) => {}
Get3.displayName = "📌 Page - Get3"

export default Get3
