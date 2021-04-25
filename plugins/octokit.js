// import { Octokit } from '@octokit/rest'
const {
  createBasicAuth,
  createAppAuth,
  createOAuthAppAuth,
  createTokenAuth,
  createActionAuth,
} = require('@octokit/auth')
// import vLog from './logger'

const { Octokit } = require('@octokit/rest')
const vLog = console
// const vLog = require('./logger')

const username = 'LX314'
const password = 'lx25292933'
const clientId = 'Iv1.6de315b2ad832076'
const clientSecret = '6956ebd4620f3e4bc3e8d06d67756d3612c78f70'
const code = 'random123'
const TOKEN = 'b3cc3432ae40d7dcb6ab74aac018f7fa3a741249'

const octokit = new Octokit({
  log: vLog,
  auth: TOKEN,
  userAgent: 'Oh My Star v0.0.1',
  previews: ['jean-grey', 'symmetra'],
  //   timeZone: 'Asia/Shanghai',
  baseUrl: 'https://api.github.com',
})

// vLog.log('octokit: ', octokit)
// export
const getStarredRepoList = () => {
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
// getStarredRepoList()

const listSelfHostedRunnersForRepo = () => {
  octokit.actions
    .listSelfHostedRunnersForRepo({
      owner: true,
      repo: true,
    })
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
// listSelfHostedRunnersForRepo()

const listForUser = (username) => {
  octokit.repos
    // .listForUser({
    //   username,
    // })
    .listForAuthenticatedUser()
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
// listForUser('lx314')

const checkFollowingForUser = (user, target_user) => {
  octokit.users
    // .checkFollowingForUser({
    //   username,
    //   target_user,
    // })
    .listFollowersForAuthenticatedUser()
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
checkFollowingForUser('lx314')

const request = () => {
  octokit
    .request('/user')
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
// request()

const getToken = () => {
  //   const auth = createBasicAuth({
  //     username,
  //     password,
  //     on2Fa() {
  //       return prompt('Two-factor authentication Code:')
  //     },
  //   })
  const auth = createTokenAuth(TOKEN)
  auth({ type: 'token' })
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
// getToken()

const getToken2 = () => {
  //   const auth = createAppAuth({
  //     type: 'oauth-app',
  //     clientId,
  //     clientSecret,
  //     code,
  //     headers: {},
  //     query: {
  //       clientId,
  //       clientSecret,
  //       code
  //     },
  //   })
  const auth = createOAuthAppAuth({
    // clientId,
    // clientSecret,
    clientId: 'LX314',
    clientSecret: 'lx25292933',
    // code: 'random123', // code from OAuth web flow, see https://git.io/fhd1D
  })
//   const appAuthentication = auth({
//     type: 'oauth-app',
//     url: '/orgs/:org/repos',
//   })
  auth({ type: 'token' })
    .then((res) => {
      vLog.log('RES: ', res)
    })
    .catch((e) => {
      vLog.error('E: ', e)
    })
}
// getToken2()

/**{
  type: 'token',
  tokenType: 'oauth',
  id: 479751294,
  token: '00002f70f8acf5ebd48e3590abca7b7b7ecad762',
  username: 'LX314'
} */
