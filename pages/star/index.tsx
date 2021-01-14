import React, { useEffect, useState, useRef, FC } from 'react'
import { useGet, usePost, post, get, $axios, ax } from '../../plugins/api'
import { Button, Pagination, Input, Select, Affix, Tag } from 'antd'

// import VLeftSession from '@/components/star/v-left-session'
// import VStarredList from '@/components/star/v-starred-list'
import VLeftSession from '../../components/star/v-left-session'
import VStarredList from '../../components/star/v-starred-list'
import VRightSession from '../../components/star/v-right-session'
import { useRouter } from 'next/router'
import { useImmer } from 'use-immer'
// import MockUserInfo from '@/model/mock/lx314'
// import MockStarredList from '@/model/mock/starred'
// import MockUserInfo from '../../model/mock/lx314'
// import MockStarredList from '../../model/mock/starred'
import GitHub, { insertData } from '../../plugins/github'
import {
  LanguageListModel,
  LanguageModel,
  LicenseModel,
  RepoModel,
  TagListModel,
  TagModel,
  UserModel,
} from '../../api/star/model'
import {
  $LanguageList,
  $RepoList,
  $Starred,
  $StarredList,
  $TagList,
  $UserInfo,
} from '../../api/star/star'
// import MockStarredList2 from '../../model/mock/starred.2020-10-28'

// export const config = { amp: true };
const { Option } = Select

// const a = {
//   client_id: 'bce5a494a0aaf5e10b2d',
//   client_secret: 'fbfa526d1ec6c7bbec98373ac5bf6eaac15f4efc',
//   code: '39fec70ced9c9e7e2d0d',
//   scope: 'repo,gist,user',
// }

const QueryKeys = ['full_name', 'name', 'description']
declare global {
  interface Window {
    t: {
      me: any
      GitHub: any
      test: any
      router: any
      get: any
      post: any
      a: any
      ax: any
      // MockStarredList,
      // MockStarredList2,
      starredData: any
      currentSelected: any
      loadData: any
      loadStarredList: any
      loadStarredList2: any
      insertRepoList: any
      loadUserData: any
      loadRepoTags: any
    }
  }
}
interface IStarredData {
  page: number
  current: number
  pageSize: number
  // totalpage: 200,
  total: number
  list?: RepoModel[]
}
interface ILanguageList {
  count: number
  list: TagModel[]
}
interface IInfo {
  curSelectedTag: string
  curSelectedRepo: number
}
const Page: FC = ({}) => {
  const router = useRouter()
  const [starredData, updateStarredData] = useImmer<IStarredData>({
    page: 1,
    current: 0,
    pageSize: 30,
    // totalpage: 200,
    total: 100,
    list: undefined,
  })
  const [tagList, updateTagList] = useImmer<TagListModel>({
    count: 0,
    list: [],
  })
  const [languageList, updateLanguageList] = useImmer<LanguageListModel>({
    count: 0,
    list: [],
  })
  const [repoQueryKey, updateRepoQueryKey] = useImmer(QueryKeys[0])
  const [info, updateInfo] = useImmer<IInfo>({
    curSelectedTag: '',
    curSelectedRepo: -1,
  })
  // const rightSessionWrapper = useRef(null)
  const [rightSessionWrapper, setRightSessionWrapper] = useState(null)
  useEffect(() => {
    window.t = {
      me: this,
      GitHub,
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
      loadStarredList2,
      insertRepoList,
      loadUserData,
      loadRepoTags,
    }
    loadData({})
    loadUserData()
    loadRepoTags()
    loadRepoLanguageList()
  }, [])
  const [currentSelected, updateCurrentSelected] = useImmer<RepoModel>()
  const currentSelectedFun = {
    onSelected: (item: RepoModel) => {
      updateCurrentSelected((d) => (d = item))
      router.push(`/star?id=${item.id}`, undefined, { shallow: true })
    },
  }
  const test = () => {
    $Starred(1)
      .then((res) => {
        return res.model.data || []
      })
      .then((list) => {
        console.log('List: ', list)
      })
  }
  const [userData, updateUserData] = useImmer<UserModel>()
  const loadUserData = () => {
    $UserInfo(8361463).then((res) => {
      updateUserData((d) => (d = res.model.data))
    })
  }
  const loadStarredList2 = (page: number) => {
    get(
      'https://api.github.com/users/lxthyme/starred',
      {
        page,
      },
      {
        headers: {
          Accept: 'application/vnd.github.v3.star+json',
          Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
      },
    )
      .then(({ data, headers }) => {
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
            // loadStarredList2(next)
            console.log('-->next: ', next)
          }
        })
      })
  }
  const loadStarredList = (page: number) => {
    console.log('------------------------->Next: ', page)
    $StarredList(page)
      .then((res) => {
        const data = res.model.data
        const headers = res.headers
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
    return $TagList().then((res) => {
      const data = res.model.data
      updateTagList((d) => {
        d.count = data.count
        d.list = data.list
      })
    })
  }
  const loadRepoLanguageList = () => {
    return $LanguageList().then((res) => {
      const data = res.model.data
      const fmt = data.map((t) => !t.language && (t.language = 'undefined'))
      updateLanguageList((d) => {
        d.count = data.length
        d.list = data
      })
    })
  }
  const repoFun = {
    onChange: (page: number, pageSize: number = 10) => {
      console.log('onChange: ', {
        page,
        pageSize,
      })
      updateStarredData((d) => {
        d.page = page
        d.pageSize = pageSize
      })
      const from = Math.max(0, pageSize * (page - 1))
      loadData({ from, pageSize })
    },
    onShowSizeChange: (current: number, pageSize: number) => {
      console.log('onShowSizeChange: ', {
        current,
        pageSize,
      })
      updateStarredData((d) => {
        d.pageSize = pageSize
      })
    },
  }

  // const check = () => {
  //   const link = `<https://api.github.com/user/8361463/starred?page=22>; rel="prev", <https://api.github.com/user/8361463/starred?page=24>; rel="next", <https://api.github.com/user/8361463/starred?page=41>; rel="last", <https://api.github.com/user/8361463/starred?page=1>; rel="first"`
  //   for (let item of link.matchAll(
  //     /(?=[\s\S]*?page=)([0-9]{1,})(?=>; rel="(first|last)"[\s\S]*)/g,
  //   )) {
  //     console.log('Item: ', item)
  //   }
  // }

  const insertUserList = (list = []) => {
    insertData({
      type: 'user',
      list: list,
    })
  }
  const insertLicenseList = (list: LicenseModel[]) => {
    insertData({
      type: 'license',
      list: list,
    })
  }
  const insertRepoList = (list: RepoModel[]) => {
    return insertData({
      type: 'repo',
      list: list,
    })
  }
  // : FC<{
  //   repo_id?: number
  //   language?: string
  //   search_value?: string
  //     search_key?: string
  //     tag_id?: string
  //     from?: number
  //     pageSize?: number
  // }>
  const loadData = (
    {
      repo_id = -1,
      language = '',
      search_value = '',
      search_key = '',
      tag_id = '',
      from = 0,
      pageSize = starredData.pageSize,
    },
    initialID = 0,
  ) => {
    updateInfo((d) => {
      d.curSelectedRepo = repo_id
      d.curSelectedTag = tag_id.trim()
    })
    return $RepoList({
      repo_id,
      tag_id,
      language,
      search_key,
      search_value,
      from,
      pageSize,
    })
      .then((res) => {
        const { total, list } = res.model.data
        if (repo_id > 0) {
          const first = list[0]
          updateStarredData((d) => {
            const tlist = d.list || []
            const idx = tlist.findIndex((tmp) => tmp.id === repo_id)
            if (idx >= 0) {
              tlist.splice(idx, 1, first)
            }
            d.list = list
          })
        } else {
          updateStarredData((d) => {
            d.total = total
            d.list = list
          })
        }

        if (initialID > 0) {
          updateCurrentSelected((d) => (d = list[0]))
        }
      })
      .catch((e) => {
        updateStarredData((d) => {
          d.page -= 1
        })
      })
  }
  const onRefresh = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
    loadRepoTags()
  }
  const onRepoSearch = (
    value: string,
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    loadData({ search_value: value, search_key: repoQueryKey })
  }
  const onQueryKeySelect = (value: string) => {
    console.log('search key: ', value)
    console.log('search key: ', value)
    updateRepoQueryKey((d) => (d = value))
  }
  const onLanguageRefresh = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.stopPropagation()
    loadRepoLanguageList()
  }
  return (
    <>
      <div className="v-session-star">
        <div className="v-session-left">
          <VLeftSession
            data={userData}
            tagList={tagList}
            languageList={languageList}
            loadData={loadData}
            onRefresh={onRefresh}
            onLanguageRefresh={onLanguageRefresh}
          />
        </div>
        <div className="v-session-middle">
          <div className="v-top-wrapper">
            <a href="https://github.com/login/oauth/authorize?client_id=bce5a494a0aaf5e10b2d&scope=repo,gist,user">
              Login
            </a>
            <div className="v-test-wrapper">
              <button onClick={loadStarredList.bind(this, 42)}>
                Load Starred List
              </button>
              <button onClick={insertRepoList.bind(this, [])}>
                {' '}
                Insert Repo{' '}
              </button>
              <button onClick={insertLicenseList.bind(this, [])}>
                {' '}
                Insert License{' '}
              </button>
              <button onClick={insertUserList.bind(this, [])}>
                {' '}
                Insert User{' '}
              </button>
              <Input.Group compact>
                <Select
                  defaultValue={QueryKeys[0]}
                  onSelect={onQueryKeySelect}
                  style={{ width: '40%' }}
                >
                  {QueryKeys.map((tmp) => (
                    <Option value={tmp} key={tmp}>
                      {tmp}
                    </Option>
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
                pageSizeOptions={['10', '30', '50']}
                onChange={repoFun.onChange}
                onShowSizeChange={repoFun.onShowSizeChange}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${starredData.total}`
                }
              />
            </div>
          )}
        </div>
        <div className="v-session-right" ref={setRightSessionWrapper}>
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
              href={currentSelected?.html_url}
              target="__blank"
            >
              {currentSelected?.full_name}
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
              href={currentSelected?.homepage}
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
        </div>
      </div>
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
