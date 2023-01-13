// export const config = { amp: true };

const Page = props => {
  const checkNow = async (all, current) => {
    // const idListFileName = `${all}.js`
    // const detailListFileName = `${current}.js`
    // console.log(`Start detail ${idListFileName} & ${detailListFileName}...`)
    // const idList = (await import(`../../../../data/dsp/10-22/${idListFileName}`)).Data
    // console.log(`${idListFileName}: `, idList)
    // const detailList = (await import(`../../../../data/dsp/10-22/${detailListFileName}`)).Data
    // console.log(`${detailListFileName}: `, detailList)
    // const restList = idList.filter(t => !detailList.includes(t))
    // console.log('restList: ', restList)
    // window.restList = restList
    // // console.log('restList: ', JSON.stringify(restList))
    // window.result = {
    //   idListFileName: idList.count,
    //   detailListFileName: detailList.count,
    //   [idList.count - detailList.count]: restList
    // }
    // return result
  }
  const checkRestAll = async () => {
    console.log('GO!')
    // const rest15 = await checkRest(15)
    // const rest16 = await checkRest(16)
    // const rest17 = await checkRest(17)
    // const rest18 = await checkRest(18)
    // const rest19 = await checkRest(19)
    // const rest20 = await checkRest(20)
    // const rest21 = await checkRest(21)
    // const rest22 = await checkRest(22)
    // const rest23 = await checkRest(23)
    // const rest24 = await checkRest(24)
    return { rest15, rest16, rest17, rest18, rest19, rest20, rest21, rest22, rest23, rest24 }
  }
  const checkRest = async (idx) => {
    // const idListFileName = `id.${idx}.csv`
    // const detailListFileName = `detail.${idx}.csv`
    // console.log(`Start detail ${idListFileName} & ${detailListFileName}...`)
    // const idList = (await import(`../../../../data/dsp/diff/${idListFileName}`)).Data
    // console.log(`${idListFileName}: `, idList)
    // const detailList = (await import(`../../../../data/dsp/diff/${detailListFileName}`)).Data
    // console.log(`${detailListFileName}: `, detailList)
    // const restList = idList.filter(t => !detailList.includes(t))
    // console.log('restList: ', restList)
    // // console.log('restList: ', JSON.stringify(restList))
    // return {
    //   idListFileName: idList.count,
    //   detailListFileName: detailList.count,
    //   [idList.count - detailList.count]: restList
    // }
  }
  return (<>
    <button onClick={() => checkNow('all', 'now')}>Check Now</button>
    <button onClick={() => checkRestAll()}>Check All</button>
    <button onClick={() => checkRest(15)}>Check 15</button>
    <button onClick={() => checkRest(16)}>Check 16</button>
    <button onClick={() => checkRest(17)}>Check 17</button>
    <button onClick={() => checkRest(18)}>Check 18</button>
    <button onClick={() => checkRest(19)}>Check 19</button>
    <button onClick={() => checkRest(20)}>Check 20</button>
    <button onClick={() => checkRest(21)}>Check 21</button>
    <button onClick={() => checkRest(22)}>Check 22</button>
    <button onClick={() => checkRest(23)}>Check 23</button>
    <button onClick={() => checkRest(24)}>Check 24</button>
    {/* <style jsx>{``}</style> */}
  </>)
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page
