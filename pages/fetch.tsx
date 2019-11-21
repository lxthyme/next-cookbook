import fetch from 'isomorphic-unfetch'
import Error from './_error'
import { NextPage } from 'next'


export const Fetch: NextPage<{star: number, code: number}> = ({star, code}) => {
  //   console.log('props: ', props)
  if (code) {
    return <Error statusCode={code} />
  }
  return (
    <>
      <div>Next stars: {star}</div>
      <style jsx>{``}</style>
    </>
  )
}

Fetch.getInitialProps = async ({pathname, query, asPath, err}) => {
  // console.log(`>>>pathanem: `, pathname)
  // console.log(`>>>query: `, query)
  // console.log(`>>>asPath: `, asPath)
  // console.log(`>>>err: `, err)
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const code = res.status > 200 ? res.status : 0
  const json = await res.json()
  return {code, star: json.stargazers_count}
}

export default Fetch
