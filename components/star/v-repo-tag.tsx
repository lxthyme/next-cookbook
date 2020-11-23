import React, { useEffect, FC } from 'react'

import { Select, Divider, Input, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { TagOutlined } from '@ant-design/icons'

import { insertTag } from '../../plugins/github'
import { post } from '../../plugins/api'
import { useRouter } from 'next/router'
import { TagModel } from '../../api/star/model'
import { useImmer } from 'use-immer'

const { Option } = Select

// export const config = { amp: true };
declare global {
  interface Window {
    tag: {
      currentTags: {
        list: TagModel[]
        selected: string[]
        name: string
      }
      addItem: () => void
      loadRepoTags: () => void
      loadRepoBindedTags: () => void
      onSelectChange: (key: string) => void
    }
  }
}
interface IRepoTagProps {
  sTag?: TagModel[]
  tagList: TagModel[]
  onUpdate: (p: object, initialID: number) => void
}
const Page: FC<IRepoTagProps> = ({ sTag, tagList = [], onUpdate }) => {
  const router = useRouter()
  const [currentTags, setCurrentTags] = useImmer<{
    list: TagModel[]
    selected: string[]
    name: string
  }>({
    list: [],
    selected: [],
    name: '',
  })
  useEffect(() => {
    // loadRepoTags()
    // loadRepoBindedTags()
    window.tag = {
      currentTags,
      addItem,
      loadRepoTags,
      loadRepoBindedTags,
      onSelectChange,
    }
  }, [])
  useEffect(() => {
    if (!sTag) {
      return
    }
    if (
      new Set([...currentTags.selected, ...sTag.map((t) => t.id)]).size ==
      currentTags.list.length
    ) {
      return
    }
    if (sTag && sTag.length > 0) {
      setCurrentTags((d) => {
        d.selected = sTag.map((tmp) => tmp.name)
      })
    } else {
      setCurrentTags((d) => {
        d.selected = []
      })
    }
  }, [sTag])
  useEffect(() => {
    setCurrentTags(d => {
      d.list = tagList
    })
  }, [tagList])
  // useEffect(() => {
  //   // loadRepoTags()
  //   // loadRepoBindedTags()
  // }, [router.query.id])
  useEffect(() => {
    const repo_id = parseInt(router.query.id)
    console.log('[auto]router.query.id: ', repo_id)
    if (repo_id > 0 && currentTags.selected.length <= 0) {
      // loadData({ repo_id }, repo_id)
      onUpdate && onUpdate({ repo_id }, repo_id)
    }
  }, [router.query.id])
  // useEffect(() => {
  //   const repo_id = parseInt(router.query.id)
  //   if (repo_id) {
  //     onUpdate && onUpdate({ repo_id: repo_id })
  //   }
  // }, [currentTags.selected])
  const loadRepoTags = () => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    return post({
      url: 'http://0.0.0.0:3003/api/github/tag/list',
      params: {
        // repo_id,
        offset: 0,
        limit: 20,
      },
    }).then(({ data }) => {
      // const first = data[0] || {}
      // let tag_list = JSON.parse(first.tag_id || '[]')
      // tag_list = tag_list
      //   .flatMap((t) => currentTags.list.find((tmp) => tmp.id === t))
      //   .filter((t) => t)
      //   .flatMap((t) => t.name)
      setCurrentTags(d => {
        d.list = data
      })
    })
  }
  const loadRepoBindedTags = () => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    return post({
      url: 'http://0.0.0.0:3003/api/github/tag/bindList',
      params: {
        repo_id,
      },
    }).then(({ data }) => {
      // const first = data[0] || {}
      // let tag_list = JSON.parse(first.tag_id || '[]')
      // tag_list = tag_list
      //   .flatMap((t) => currentTags.list.find((tmp) => tmp.id === t))
      //   .filter((t) => t)
      //   .flatMap((t) => t.name)
      console.log('bindList: ', data)
      setCurrentTags(d => {
        d.selected = data.map((tmp) => tmp.name)
      })
    })
  }
  const onTagNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setCurrentTags(d => {
      d.name = name
    })
  }
  const addItem = () => {
    const name = currentTags.name
    insertTag({
      tag: name,
    })
      .then((res) => {
        console.log('Res: ', res)
        message.success('新增 repo tag 成功!')
        const data = (res.data && res.data.dataValues) || {}
        if (currentTags.list.findIndex((tmp) => tmp.name === name) < 0) {
          setCurrentTags(d => {
            d.list = [...d.list, { id: data.id, name: data.name }]
            d.name = ''
          })
        }
      })
      .catch((e) => {
        message.error('新增 repo tag 失败!')
      })
  }

  const onDeSelectChange = (key: string) => {
    console.log('onDeSelectChange: ', { key })
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    // const tagInfo = currentTags.list
    //   .find((tmp) => tmp.name === key)
    // if (!tagInfo) {
    //   return Promise.reject(`tagInfo: ${tagInfo}`)
    // }
    // tagInfo.id = `${tagInfo.name}-${repo_id}`
    // tagInfo.repo_id = repo_id
    return post({
      url: 'http://0.0.0.0:3003/api/github/tag/bind',
      params: { type: 'del', repo_id: repo_id, tag: key },
    }).then((res) => {
      setCurrentTags((d) => {
        const sel = d.selected
        const deselectedIdx = sel.findIndex((tmp) => tmp === key)
        const rest = sel.splice(deselectedIdx, 1)
        onUpdate && onUpdate({ repo_id }, -1)
        d.selected = sel
      })
    })
  }
  const onSelectChange = (key: string) => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    // const tagInfo = currentTags.list
    //   .find((tmp) => tmp.name === key)
    // if (!tagInfo) {
    //   return Promise.reject(`tagInfo: ${tagInfo}`)
    // }
    // tagInfo.id = `${tagInfo.name}-${repo_id}`
    // tagInfo.repo_id = repo_id
    return post({
      url: 'http://0.0.0.0:3003/api/github/tag/bind',
      params: { repo_id: repo_id, tag: key },
    }).then((res) => {
      onUpdate && onUpdate({ repo_id: repo_id }, -1)
      if (!currentTags.selected.includes(key)) {
        setCurrentTags(d => {
          d.selected = [...d.selected, key]
        })
      }
    })
  }
  return (
    <>
      <div className="v-tag-wrapper">
        <TagOutlined />
        <Select
          mode="multiple"
          value={currentTags.selected}
          onSelect={onSelectChange}
          onDeselect={onDeSelectChange}
          placeholder="type the repo's tag..."
          style={{ marginLeft: 8, flex: '1 1' }}
          dropdownRender={(menu) => (
            <>
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    padding: 8,
                  }}
                >
                  <Input
                    style={{ flex: 'auto' }}
                    value={currentTags.name}
                    onChange={onTagNameChanged}
                  />
                  <a
                    style={{
                      flex: 'none',
                      padding: 8,
                      display: 'block',
                      cursor: 'pointer',
                    }}
                    onClick={addItem}
                  >
                    <PlusOutlined />
                    Add New Tag
                  </a>
                </div>
              </div>
            </>
          )}
        >
          {currentTags.list
            .filter((t) => !currentTags.selected.find((s) => s === t.name))
            .map((t) => (
              <Option key={t.id} value={t.name}>
                {t.name}
              </Option>
            ))}
        </Select>
      </div>
      <style jsx>{`
        .v-tag-wrapper {
          display: flex;
          justify-content: stretch;
          align-items: center;
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
Page.displayName = '🔗 RepoTag - COMPONENT'

export default Page
