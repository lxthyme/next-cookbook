import React, { useEffect, useState, useRef } from 'react'
import { useGet, usePost, post, get, $axios, ax } from '../../plugins/api'
import { Button, Pagination, Input, Select, Affix, Tag } from 'antd'

// import VLeftSession from '@/components/star/v-left-session'
// import VStarredList from '@/components/star/v-starred-list'
import VLeftSession from '../../components/star/v-left-session'
import VStarredList from '../../components/star/v-starred-list'
import VRightSession from '../../components/star/v-right-session'
import { useRouter } from 'next/router'

// import MockUserInfo from '@/model/mock/lx314'
// import MockStarredList from '@/model/mock/starred'
// import MockUserInfo from '../../model/mock/lx314'
// import MockStarredList from '../../model/mock/starred'
import GitHub, { insertData } from '../../plugins/github'
// import MockStarredList2 from '../../model/mock/starred.2020-10-28'

// export const config = { amp: true };
const { Option } = Select

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

const QueryKeys = ['full_name', 'name', 'description']
const Page = (props) => {
  const router = useRouter()
  const [starredData, setStarredData] = useState({
    page: 1,
    current: 0,
    pageSize: 30,
    // totalpage: 200,
    total: 100,
    list: null,
  })
  const [tagList, setTagList] = useState({
    count: 0,
    list: [],
  })
  const [languageList, setLanguageList] = useState({
    count: 0,
    list: [],
  })
  const [repoQueryKey, setRepoQueryKey] = useState(QueryKeys[0])
  const [info, setInfo] = useState({
    curSelectedTag: '',
    curSelectedRepo: '',
  })
  // const rightSessionWrapper = useRef(null)
  const [rightSessionWrapper, setRightSessionWrapper] = useState(null)
  useEffect(() => {
    window.t = {
      me: this,
      GitHub,
      check,
      test,
      router,
      get,
      post,
      a: $axios,
      ax,
      // MockStarredList,
      // MockStarredList2,
      starredData,
      currentSelected,
      loadData,
      loadStarredList,
      insertRepoList,
      loadUserData,
      loadRepoTags,
    }
    window.GitHub = GitHub
    loadData()
    loadUserData()
    loadRepoTags()
    loadRepoLanguageList()
  }, [])
  // useEffect(() => {
  //   const repo_id = router.query.id
  //   console.log('currentSelected: ', currentSelected.id, '\tNEW: ', repo_id)
  //   if (Object.keys(currentSelected).length <= 1) {
  //     loadData({ repo_id }, repo_id)
  //   }
  // }, [router.query.id])
  const [currentSelected, setCurrentSelected] = useState({ id: -1 })
  const currentSelectedFun = {
    onSelected: (item) => {
      setCurrentSelected(item)
      router.push(`/star?id=${item.id}`, undefined, { shadllow: true })
    },
  }
  const test = () => {
    const t = get(
      'https://api.github.com/users/lxthyme/starred',
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
  const [userData, setUserData] = useState({})
  const loadUserData = () => {
    // get(
    //   'https://api.github.com/users/lxthyme',
    //   {},
    //   {
    //     headers: {
    //       Accept: 'application/vnd.github.v3.star+json',
    //       Authorization: 'token 5357fb77f46b31b93b14869cab3c648b3e1bb0cd',
    //     },
    //   },
    // ).then((data) => {
    //   setUserData(data)
    // })
    t.post({
      url: 'http://0.0.0.0:3003/api/github/user/get',
      params: {
        id: 8361463,
      },
    }).then(({ data }) => {
      setUserData(data)
    })
  }
  const loadStarredList = (page) => {
    console.log('------------------------->Next: ', page)
    get(
      'https://api.github.com/users/lxthyme/starred',
      {
        page,
      },
      {
        headers: {
          Accept: 'application/vnd.github.v3.star+json',
          Authorization: 'token 5357fb77f46b31b93b14869cab3c648b3e1bb0cd',
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
          console.log(`insertRepoList Result[${next}]: `, res)
          if (res && next) {
            loadStarredList(next)
          }
        })
      })
  }
  const loadRepoTags = () => {
    return post({
      url: 'http://0.0.0.0:3003/api/github/tag/list',
      params: {},
    }).then(({ data }) => {
      const { count, list } = data
      // const first = data[0] || {}
      // let tag_list = JSON.parse(first.tag_id || '[]')
      // tag_list = tag_list
      //   .flatMap((t) => currentTags.list.find((tmp) => tmp.id === t))
      //   .filter((t) => t)
      //   .flatMap((t) => t.name)
      setTagList({ count, list })
    })
  }
  const loadRepoLanguageList = () => {
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/language',
      params: {},
    }).then(({ data }) => {
      const fmt = data.map((t) => !t.language && (t.language = 'undefined'))
      setLanguageList({ count: data.length, list: data })
    })
  }
  const repoFun = {
    onChange: (page, pageSize) => {
      console.log('onChange: ', {
        page,
        pageSize,
      })
      setStarredData((t) => ({
        ...t,
        page,
        pageSize,
      }))
      const from = Math.max(0, pageSize * (page - 1))
      loadData({ from, pageSize })
    },
    onShowSizeChange: (current, pageSize) => {
      console.log('onShowSizeChange: ', {
        current,
        pageSize,
      })
      setStarredData((t) => ({
        ...t,
        pageSize,
      }))
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
  const loadData = (p = {}, initialID = 0) => {
    const {
      repo_id = -1,
      language = '',
      search_value = '',
      search_key = '',
      tag_id = '',
      from = 0,
      pageSize = starredData.pageSize,
    } = p
    setInfo({ curSelectedTag: tag_id.trim(), curSelectedRepo: repo_id })
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list',
      params: {
        repo_id,
        tag_id: tag_id.trim(),
        language,
        search_key,
        search_value,
        from,
        pageSize,
      },
    })
      .then(({ data }) => {
        const { total, list } = data
        if (repo_id > 0) {
          const first = list[0]
          setStarredData((t) => {
            const tlist = t.list || []
            const idx = tlist.findIndex((tmp) => tmp.id === repo_id)
            if (idx >= 0) {
              tlist.splice(idx, 1, first)
            }
            return {
              ...t,
              list: tlist,
            }
          })
        } else {
          setStarredData((t) => ({
            ...t,
            total,
            list: [...list],
          }))
        }

        if (initialID > 0) {
          setCurrentSelected(list[0])
        }
      })
      .catch((e) => {
        setStarredData((t) => ({
          ...t,
          page: t.page - 1,
        }))
      })
  }
  const onRefresh = (e) => {
    e.stopPropagation()
    loadRepoTags()
  }
  const onRepoSearch = (value, e) => {
    loadData({ search_value: value, search_key: repoQueryKey })
  }
  const onQueryKeySelect = (value) => {
    console.log('search key: ', value)
    console.log('search key: ', value)
    setRepoQueryKey(value)
  }
  const onLanguageRefresh = (e) => {
    e.stopPropagation()
    loadRepoLanguageList()
  }
  return (
    <>
      <session className="v-session-star">
        <session className="v-session-left">
          <VLeftSession
            data={userData}
            tagList={tagList}
            languageList={languageList}
            loadData={loadData}
            onRefresh={onRefresh}
            onLanguageRefresh={onLanguageRefresh}
          />
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
              <button onClick={insertRepoList}> Insert Repo </button>
              <button onClick={insertLicenseList}> Insert License </button>
              <button onClick={insertUserList}> Insert User </button>
              <Input.Group compact>
                <Select
                  defaultValue={QueryKeys[0]}
                  onSelect={onQueryKeySelect}
                  style={{ width: '40%' }}
                >
                  {QueryKeys.map((tmp) => (
                    <Option value={tmp} key={tmp}>{tmp}</Option>
                  ))}
                </Select>
                <Input.Search
                  placeholder="请输入 repo 名字进行搜索"
                  onSearch={onRepoSearch}
                  style={{ width: '60%' }}
                />
              </Input.Group>
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
          {starredData.total > starredData.pageSize && (
            <div className="v-pagination-wrapper">
              <Pagination
                current={starredData.page}
                defaultCurrent={1}
                defaultPageSize={starredData.pageSize}
                total={starredData.total}
                responsive
                hideOnSinglePage
                showSizeChanger
                pageSizeOptions={[10, 30, 50]}
                onChange={repoFun.onChange}
                onShowSizeChange={repoFun.onShowSizeChange}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${starredData.total}`
                }
              />
            </div>
          )}
        </session>
        <session className="v-session-right" ref={setRightSessionWrapper}>
          <Affix
            offsetTop={20}
            target={() => rightSessionWrapper}
            style={{
              position: 'absolute',
              top: '200px',
              left: '20px',
            }}
          >
            <a
              className="btn-x-blue"
              href={currentSelected.html_url}
              target="__blank"
            >
              {currentSelected.full_name}
            </a>
          </Affix>
          <Affix
            offsetTop={60}
            target={() => rightSessionWrapper}
            style={{
              position: 'absolute',
              top: '240px',
              left: '20px',
            }}
          >
            <a
              className="btn-x-blue"
              href={currentSelected.homepage}
              target="__blank"
            >
              homepage
            </a>
          </Affix>
          <br />
          <VRightSession
            repo={currentSelected}
            tagList={tagList.list}
            onUpdate={loadData}
          />
        </session>
      </session>
      <style jsx>
        {`
          .v-session-star {
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            height: 100vh;
          }
          .v-session-left {
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            flex-direction: column;
            flex: 1 1 20%;
            max-width: 20%;
            // overflow-y: auto;
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
            position: relative;
            display: flex;
            justify-content: stretch;
            flex-direction: column;
            align-items: stretch;
            // overflow: auto;
            max-width: 55%;
            padding: 16px;
            overflow: auto;
          }
          .btn-x-blue {
            opacity: 0.2;
          }
          .btn-x-blue:hover {
            color: #fff;
            opacity: 1;
          }
        `}
      </style>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = '📌 Index - PAGE'
export default Page
