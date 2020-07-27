import React, { useState, useEffect } from 'react'

import { List } from 'antd'
import { post } from '../../plugins/api'

// export const config = { amp: true };

const Page = ({ data = {}, refreshRepoList }) => {
  const [tagData, setTagData] = useState({
    list: [],
    current: -1,
  })
  useEffect(() => {
    loadTagList()
  }, [])
  const loadTagList = (from = 0, to = 100) => {
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list',
      params: { type: 'tag', from, to },
    }).then(({ data }) => {
      setTagData((t) => ({ ...t, list: data || [] }))
    })
  }
  const onTagTapped = (id) => {
    setTagData((t) => ({ ...t, current: id }))
    refreshRepoList && refreshRepoList(id)
  }
  return (
    <>
      <img src={data.avatar_url} alt="" className="v-avatar" />
      <div className="v-user-info">
        <a className="v-blog" href={data.blog}>
          blog: {data.blog}
        </a>
        <a className="v-public-gists">public_gists: {data.public_gists}</a>
        <a className="v-public-repos" href={data.repos_url}>
          public_repos: {data.public_repos}
        </a>
        <a href="" className="v-private_gists">
          private_gists: {data.private_gists}
        </a>
        <a href="" className="v-total_private_repos">
          total_private_repos: {data.total_private_repos}
        </a>
        <a href="" className="v-owned_private_repos">
          owned_private_repos: {data.owned_private_repos}
        </a>
        <div className="v-follow-info">
          <div className="v-followers">
            <a href={data.followers_url}>{data.followers}</a>
            <span>followers</span>
          </div>
          <div className="v-following">
            <a>{data.following}</a>
            <span>Following</span>
          </div>
        </div>
        <a className="v-subscriptions" href={data.subscriptions_url}>
          Subscriptions
        </a>
        <a className="v-organizations" href={data.organizations_url}>
          Organizations
        </a>
        <a className="v-received-events" href={data.received_events_url}>
          Events
        </a>
      </div>
      <div className="v-account-info"></div>
      <div className="v-tag-wrapper">
        <List
          header={<div onClick={onTagTapped.bind(this, -1)}>Tag List</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={tagData.list}
          sel
          renderItem={(item) => (
            <List.Item
              onClick={onTagTapped.bind(this, item.id)}
              style={{
                backgroundColor:
                  tagData.current === item.id ? 'rgba(0, 0, 0, 0.08)' : '',
              }}
            >
              {item.name}
            </List.Item>
          )}
        />
      </div>
      <style jsx>{`
        :global(.ant-list-item) {
          cursor: pointer;
        }
        .v-avatar {
          width: 70px;
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
Page.displayName = 'v-left-session'

export default Page

/**
{
  "login": "LX314",
  "id": 8361463,
  "node_id": "MDQ6VXNlcjgzNjE0NjM=",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/8361463?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/LX314",
  "html_url": "https://github.com/LX314",
//   "followers_url": "https://api.github.com/users/LX314/followers",
//   "following_url": "https://api.github.com/users/LX314/following{/other_user}",
  "gists_url": "https://api.github.com/users/LX314/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/LX314/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/LX314/subscriptions",
//   "organizations_url": "https://api.github.com/users/LX314/orgs",
//   "repos_url": "https://api.github.com/users/LX314/repos",
  "events_url": "https://api.github.com/users/LX314/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/LX314/received_events",
  "type": "User",
  "site_admin": false,
  "name": "lxthyme",
  "company": null,
//   "blog": "http://lxthyme.com",
  "location": null,
  "email": "lx314333@gmail.com",
  "hireable": null,
  "bio": null,
  "twitter_username": null,
//   "public_repos": 36,
//   "public_gists": 0,
//   "followers": 15,
//   "following": 19,
  "created_at": "2014-08-05T09:48:33Z",
  "updated_at": "2020-06-12T07:20:52Z",
//   "private_gists": 3,
//   "total_private_repos": 6,
//   "owned_private_repos": 6,
  "disk_usage": 796234,
  "collaborators": 1,
  "two_factor_authentication": false,
  "plan": {
    "name": "free",
    "space": 976562499,
    "collaborators": 0,
    "private_repos": 10000
  }
}

 */
