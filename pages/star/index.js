import React, { useEffect, useState } from 'react'
import { useGet, usePost, post, get, $axios, ax } from '../../plugins/api'
import { Button, Pagination } from 'antd'

// import VLeftSession from '@/components/star/v-left-session'
// import VStarredList from '@/components/star/v-starred-list'
import VLeftSession from '../../components/star/v-left-session'
import VStarredList from '../../components/star/v-starred-list'
import VRightSession from '../../components/star/v-right-session'
import { useRouter } from 'next/router'

// import MockUserInfo from '@/model/mock/lx314'
// import MockStarredList from '@/model/mock/starred'
import MockUserInfo from '../../model/mock/lx314'
import MockStarredList from '../../model/mock/starred'
import GitHub, { insertData } from '../../plugins/github'

// export const config = { amp: true };

const ClientID = 'bce5a494a0aaf5e10b2d'
const ClientSecret = 'fbfa526d1ec6c7bbec98373ac5bf6eaac15f4efc'
const GitHubToken = {
  access_token: '468509e9474a965f14ddd75aea9c076557e79459',
  scope: 'gist,repo,user',
  token_type: 'bearer',
}
// const a = {
//   client_id: 'bce5a494a0aaf5e10b2d',
//   client_secret: 'fbfa526d1ec6c7bbec98373ac5bf6eaac15f4efc',
//   code: '39fec70ced9c9e7e2d0d',
//   scope: 'repo,gist,user',
// }
const Page = (props) => {
  const router = useRouter()
  const [starredData, setStarredData] = useState({
    page: 1,
    current: 0,
    pageSize: 10,
    totalpage: 200,
    total: 1000,
    list: null,
  })
  useEffect(() => {
    window.t = {
      me: this,
      GitHub,
      check,
      test,
      router,
      get,
      a: $axios,
      ax,
    }
    window.GitHub = GitHub
    loadData()
    // get(
    //   'https://raw.githubusercontent.com/rexxars/react-markdown/master/README.md',
    //   {},
    //   {
    //     headers: {
    //       'Content-Type': 'text/plain; charset=utf-8',
    //     },
    //   },
    // ).then((res) => {
    //   console.log('RES: ', res)
    // })
  }, [])
  //   const { data, error } = useGet({ url: 'https://api.github.com/users/lx314' })
  //   const { data, error } = useGet({
  //     url: 'https://github.com/login/oauth/authorize',
  //     params: {
  //       client_id: ClientID,
  //       redirect_uri: 'http://localhost:3003/star',
  //       // login: '',
  //       scope: 'repo,gist,user',
  //       // state: '',
  //       // allow_signup: '',
  //     },
  //   })

  // const router = useRouter()
  // const { data, error } = usePost(
  //   router.query.code
  //     ? {
  //         url: 'https://github.com/login/oauth/access_token',
  //         params: {
  //           client_id: ClientID,
  //           client_secret: ClientSecret,
  //           code: router.query.code || '',
  //           scope: 'repo,gist,user',
  //           // redirect_uri: '',
  //           // state: '',
  //         },
  //       }
  //     : null,
  // )
  const data = MockUserInfo
  //   const { data, error } = useGet('https://api.github.com/users/lx314', {
  //     headers: {
  //       Authorization: `token ${GitHubToken.access_token}`,
  //     },
  //   })

  const [currentSelected, setCurrentSelected] = useState({ id: -1 })
  const currentSelectedFun = {
    onSelected: (item) => {
      router.push(`/star?id=${item.id}`, undefined, { shadllow: true })
      setCurrentSelected(item)
    },
  }
  const test = () => {
    const t = get(
      'https://api.github.com/users/LX314/starred',
      {
        page: 1,
      },
      {
        headers: {
          // Accept: 'application/vnd.github.v3.star+json',
        },
      },
    )
      .then((res) => {
        return res.data || []
      })
      .then((list) => {
        console.log('List: ', list)
      })
  }
  const loadStarredList = (page) => {
    console.log('------------------------->Next: ', page)
    get(
      'https://api.github.com/users/LX314/starred',
      {
        page,
      },
      {
        headers: {
          // Accept: 'application/vnd.github.v3.star+json',
        },
      },
    )
      .then((res) => {
        const { data = [], headers = {} } = res
        const link = headers.link
        if (!link) {
          return { list: data }
        }
        const prev = link.replace(
          /^[\s\S]*?page=([0-9]{1,})>; rel="prev"[\s\S]*$/,
          '$1',
        )
        const next = link.replace(
          /^[\s\S]*?page=([0-9]{1,})>; rel="next"[\s\S]*$/,
          '$1',
        )
        const first = link.replace(
          /^[\s\S]*?page=([0-9]{1,})>; rel="first"[\s\S]*$/,
          '$1',
        )
        const last = link.replace(
          /^[\s\S]*?page=([0-9]{1,})>; rel="last"[\s\S]*$/,
          '$1',
        )
        const page_info = {
          prev: parseInt(prev),
          next: parseInt(next),
          first: parseInt(first),
          last: parseInt(last),
        }
        return { list: data, next: page_info.next }
      })
      .then(({ list, next }) => {
        insertRepoList(list).then((res) => {
          console.log('insertRepoList Result: ', res)
          if (next) {
            loadStarredList(next)
          }
        })
      })
  }
  const repoFun = {
    onChange: (page, pageSize) => {
      console.log('onChange: ', { page, pageSize })
      setStarredData((t) => ({ ...t, page, pageSize }))
      loadData()
    },
    showSizeChanger: (current, pageSize) => {
      setStarredData((t) => ({ ...t, pageSize }))
    },
  }

  const check = () => {
    const link = `<https://api.github.com/user/8361463/starred?page=22>; rel="prev", <https://api.github.com/user/8361463/starred?page=24>; rel="next", <https://api.github.com/user/8361463/starred?page=41>; rel="last", <https://api.github.com/user/8361463/starred?page=1>; rel="first"`
    for (let item of link.matchAll(
      /(?=[\s\S]*?page=)([0-9]{1,})(?=>; rel="(first|last)"[\s\S]*)/g,
    )) {
      console.log('Item: ', item)
    }
  }

  const insertUserList = (list = []) => {
    insertData({
      type: 'user',
      list: list,
    })
  }
  const insertLicenseList = (list = []) => {
    insertData({
      type: 'license',
      list: list,
    })
  }
  const insertRepoList = (list = []) => {
    return insertData({
      type: 'repo',
      list: list,
    })
  }
  const loadData = (tag_id = -1) => {
    const page = starredData.page
    const from = Math.max(0, starredData.pageSize * (page - 1))
    const to = from + starredData.pageSize
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list2',
      params: { type: 'repo', tag_id, from, to },
    })
      .then(({ data }) => {
        setStarredData((t) => ({ ...t, list: [...data] }))
      })
      .catch((e) => {
        setStarredData((t) => ({ ...t, page: t.page - 1 }))
      })
  }
  const refreshRepoList = (tag_id) => {
    setStarredData((t) => ({ ...t, page: 1 }))
    loadData(tag_id)
  }
  return (
    <>
      <session className="v-session-star">
        <session className="v-session-left">
          {/* <VLeftSession data={data} refreshRepoList={refreshRepoList} /> */}
        </session>
        <session className="v-session-middle">
          <div className="v-top-wrapper">
            <a href="https://github.com/login/oauth/authorize?client_id=bce5a494a0aaf5e10b2d&scope=repo,gist,user">
              Login
            </a>
            <div className="v-test-wrapper">
              <button onClick={loadStarredList.bind(this, 1)}>
                Load Starred List
              </button>
              <button onClick={insertRepoList}>Insert Repo</button>
              <button onClick={insertLicenseList}>Insert License</button>
              <button onClick={insertUserList}>Insert User</button>
            </div>
          </div>
          <div className="v-repo-wrapper">
            {starredData.list && (
              <VStarredList
                list={starredData.list}
                currentSelected={currentSelected}
                onSelected={currentSelectedFun.onSelected}
              />
            )}
          </div>
          <div className="v-pagination-wrapper">
            <Pagination
              current={starredData.page}
              defaultCurrent={1}
              total={starredData.total}
              responsive
              hideOnSinglePage
              showSizeChanger
              pageSizeOptions={[10, 30, 50]}
              onChange={repoFun.onChange}
              onShowSizeChange={repoFun.onShowSizeChange}
              // showTotal={(total, range) =>
              //   `${range[0]}-${range[1]} of ${starredData.total} repos`
              // }
            />
          </div>
        </session>
        <session className="v-session-right">
          {/* <VRightSession repo={currentSelected} /> */}
        </session>
      </session>
      <style jsx>{`
        .v-session-star {
          display: flex;
          justify-content: stretch;
          align-items: stretch;
          height: 100vh;
        }
        .v-session-left {
          flex: 1 1 20%;
          max-width: 20%;
          overflow: auto;
        }
        .v-session-middle {
          flex: 1 1 25%;
          // max-width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          align-items: stretch;
        }
        .v-repo-wrapper {
          flex: 1 1;
          overflow: auto;
        }
        .v-pagination-wrapper {
          padding: 8px 0 10px;
          box-shadow: 0px 0px 10px 0 rgba(0, 118, 255, 0.39);
        }
        .v-session-right {
          flex: 1 1 55%;
          max-width: 55%;
          display: flex;
          justify-content: stretch;
          flex-direction: column;
          align-items: stretch;
          // overflow: auto;
          padding: 16px;
          overflow: auto;
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
