import { useEffect } from 'react'
import { getList } from '../../../../plugin/sql'
import { formatList } from '../../../../plugin/dsp.format3'
import { insertList } from "../../../../plugin/sql.insert";

// export const config = { amp: true };

const Get3 = props => {
  useEffect(() => {
    window.info = {
      getList,
      getAllList,
      insertList
    }
  })
  const getAllList = async (page = 1, pageSize = 20, idx, to = -1) => {
    return getList(page, pageSize, `detail${idx}`, idx)
      .then(res => {
        const { page, pageSize, total, list, ...rest } = res
        const restSize = total - page * pageSize
        console.log(`-->[${total} - ${page} * ${pageSize} = ${restSize}]res: `, res)
        // window.info.res = {
        //   ...rest,
        //   originList: list,
        //   list: formatList(list)
        // }
        return insertList(`key${idx}`, formatList(list).map(t => ({ seed: t.seed, ...t.sum })))
          .then(({ code }) => {
            if (code === 10000) {
              if (to > -1 && page >= to) {
                return '-->Done!!!'
              } else if (restSize > 0) {
                return getAllList(page + 1, pageSize, idx, to)
                // } else if (idx >= 20) {
                // return getAllList(1, pageSize, idx - 1, to)
              } else {
                return '-->Done!!!'
              }
            } else {
              return Promise.reject('->Insert Error!!!')
            }
          })
          .catch(error => {
            return Promise.reject('->Insert Error!!!')
          })

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