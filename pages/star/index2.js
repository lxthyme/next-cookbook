import React, { useEffect } from 'react'
import { Octokit } from '@octokit/rest'
import { request } from '@octokit/request'
import { createOAuthAppAuth } from '@octokit/auth'
import { createTokenAuth } from '@octokit/auth-token'
// import { getStarredRepoList } from '../../plugins/octokit'
import vLog, { vlog } from '../../plugins/logger'
// export const config = { amp: true };

const TOKEN = '6956ebd4620f3e4bc3e8d06d67756d3612c78f70'
const octokit = new Octokit({
  log: vLog,
  auth: TOKEN,
  userAgent: 'Oh My Star v0.0.1',
  previews: ['jean-grey', 'symmetra'],
  timeZone: 'Asia/Shanghai',
  baseUrl: 'https://api.github.com',
})
const RepoListPage = (props) => {
  useEffect(() => {
    window.octokit = octokit
    vLog.log(octokit)
    // getToken()
    // getToken2()
    // getToken3()
    // getToken4()
    // checkAuth()
    // getStarringList()
    // getStarredRepoList()
    console.log('TOKEN: ', {
      token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      a: process.env.NEXT_PUBLIC_ANOTHER_SECRET,
      env: process.env
    })
  }, [])
  // const getToken = async () => {
  //   const auth = createBasicAuth({
  //     username: 'LX314',
  //     password: 'lx25292933',
  //     //   username: 'octocat',
  //     //   password: 'secret',
  //     on2Fa() {
  //       return prompt('Two-factor authentication Code:')
  //     },
  //   })
  //   // vLog.log('111')
  //   // const { token } = await auth({ type: 'token' })
  //   const token = '6956ebd4620f3e4bc3e8d06d67756d3612c78f70'
  //   const requestWithAuth = request.defaults({
  //     request: {
  //       hook: auth.hook,
  //     },
  //   })

  //   const result = await requestWithAuth('GET /authorizations')
  //   const { data: authorizations } = result
  //   vLog.log('auth: ', { auth, token, requestWithAuth, result })
  // }
  const getToken2 = async () => {
    const auth = createOAuthAppAuth({
      clientId: '1234567890abcdef1234',
      clientSecret: '1234567890abcdef1234567890abcdef12345678',
      code: '3e32fa7f388e874ff115', // code from OAuth web flow, see https://git.io/fhd1D
    })

    const appAuthentication = await auth({
      type: 'oauth-app',
      url: '/orgs/:org/repos',
    })
    const tokenAuthentication = await auth({ type: 'token' })
    vLog.log('auth: ', { auth, appAuthentication, tokenAuthentication })
  }
  const getToken3 = async () => {
    const auth = createTokenAuth(TOKEN)
    const authentication = await auth()

    const response = await request('HEAD /', {
      //   owner: 'octocat',
      //   repo: 'hello-world',
      headers: authentication.headers,
    })
    vLog.log('Res: ', response)

    const scopes = response.headers['x-oauth-scopes'].split(/,\s+/)

    if (scopes.length) {
      console.log(
        `"${TOKEN}" has ${scopes.length} scopes enabled: ${scopes.join(', ')}`,
      )
    } else {
      console.log(`"${TOKEN}" has no scopes enabled`)
    }
  }
  const getToken4 = async () => {
    const auth = createTokenAuth(TOKEN)
    const authentication = await auth()

    vLog.log('auth: ', auth, authentication)
  }
  const checkAuth = async () => {
    const res = await octokit.request('/user')
    vLog.log('User: ', res)
  }
  const getStarringList = () => {
    octokit.activity
      .listReposStarredByUser({
        username: 'lx314',
      })
      .then((res) => {
        vLog.log('RES: ', res)
      })
      .catch((e) => {
        vLog.error('E: ', e)
      })
  }
  return (
    <>
      <h4>Hi</h4>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// RepoListPage.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// RepoListPage.getInitialProps = async ({ req }) => {}
RepoListPage.displayName = 'RepoListPage'

export default RepoListPage
