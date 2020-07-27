import React, { useState, useEffect } from 'react'

import { Select, Divider, Input, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { TagOutlined } from '@ant-design/icons'

import { insertData } from '../../plugins/github'
import { post } from '../../plugins/api'
import { useRouter } from 'next/router'

const { Option } = Select

// export const config = { amp: true };

const Page = (props) => {
  const router = useRouter()
  const [currentTags, setCurrentTags] = useState({
    list: [],
    selected: [],
    name: '',
  })
  useEffect(() => {
    loadData()
    window.r = router
  }, [])
  useEffect(() => {
    loadRepoTags()
  }, [router.query.id])
  const loadData = (from = 0, to = 100) => {
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list',
      params: { type: 'tag', from, to },
    }).then(({ data }) => {
      setCurrentTags((t) => ({ ...t, list: data || [] }))
    })
  }
  const loadRepoTags = () => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list',
      params: { type: 'repo_tag', repo_id },
    }).then(({ data }) => {
      const first = data[0] || {}
      let tag_list = JSON.parse(first.tag_id || '[]')
      tag_list = tag_list
        .flatMap((t) => currentTags.list.find((tmp) => tmp.id === t))
        .filter((t) => t)
        .flatMap((t) => t.name)
      setCurrentTags((t) => ({ ...t, selected: tag_list }))
    })
  }
  const onTagNameChanged = (e) => {
    const name = e.target.value
    setCurrentTags((t) => ({ ...t, name }))
  }
  const addItem = () => {
    const name = currentTags.name
    insertData({
      type: 'tag',
      data: name,
    }).then((res) => {
      message.success('新增 repo tag 成功!')
      const data = res.data || {}
      setCurrentTags((t) => ({
        ...t,
        list: [...t.list, { id: data.insertId, name: t.name }],
        name: '',
      })).catch((e) => {
        message.error('新增 repo tag 失败!')
      })
    })
  }
  const onSelectChange = (items) => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    const tag_list = items
      .flatMap((t) => currentTags.list.find((tmp) => tmp.name === t))
      .filter((t) => t)
      .map((t) => t.id)
    console.log(
      'items: ',
      tag_list.flatMap((t, idx) => ({ [t]: items[idx] })),
    )
    insertData({
      type: 'repo_tag',
      data: {
        repo_id,
        tag_list: JSON.stringify(tag_list),
      },
    })
      .then((res) => {
        message.success('tag 设置成功!')
        setCurrentTags((t) => ({ ...t, selected: items }))
      })
      .catch((e) => {
        message.error('tag 设置失败!')
      })
  }
  return (
    <>
      <div className="v-tag-wrapper">
        <TagOutlined />
        <Select
          mode="multiple"
          value={currentTags.selected}
          onChange={onSelectChange}
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
Page.displayName = 'Page'

export default Page
