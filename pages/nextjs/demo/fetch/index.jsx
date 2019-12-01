import fetch from 'isomorphic-unfetch'

const Page = ({ stars }) => {
  return (
    <>
      <div>Next stars: {stars}</div>
    </>
  )
}

Page.getInitialProps = async props => {
  ;(() => {
    const { err, req = {}, res = {}, pathname, query, asPath, AppTree } = props
    console.log('Props: ', JSON.stringify(Object.keys(props)))
    console.log('Req: ', JSON.stringify(Object.keys(req)))
    console.log('Res: ', JSON.stringify(Object.keys(res)))
    console.log('Res: ', { err, pathname, query, asPath, AppTree })
  })()

  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
