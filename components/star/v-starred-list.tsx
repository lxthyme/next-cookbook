import React, { useEffect, useState, useRef, FC } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { Icon, InlineIcon } from '@iconify/react'
import gitBranch from '@iconify/icons-octicon/git-branch'
import starIcon from '@iconify/icons-octicon/star'
import { RepoModel } from '../../api/star/model'

// export const config = { amp: true };

interface IStarredListProps {
  list: RepoModel[]
  currentSelected?: RepoModel
  onSelected: (event: React.ChangeEvent<HTMLTextAreaElement>, t: RepoModel) => void
}
const VStarredList: FC<IStarredListProps> = ({ list = [], currentSelected, onSelected }) => {
  return (
    <>
      {/* <div className="v-starred-list"> */}
      <List component="nav" aria-label="main mailbox folders">
        {list.map((t) => (
          <ListItem
            key={t.id}
            selected={t.id === currentSelected.id}
            alignItems="flex-start"
            button
            divider
            className="v-repo-item"
            onClick={onSelected.bind(event, t)}
          >
            {/* <div className="v-starred-item" key={t.id}> */}
            <div className="v-line1">
              <div className="v-left">
                <img src={t.owner.avatar_url} alt="" />
                <span>{t.owner.login}</span>
              </div>
              <span className="v-updated_at">{t.updated_at}</span>
            </div>
            <div className="v-line2">{t.name}</div>
            <div className="v-description">{unescape(t.description)}</div>
            <div className="v-line4">
              <span className="v-language">{t.language}</span>
              <div className="v-right">
                <Icon icon={starIcon} />
                <span className="v-stargazers_count">{t.stargazers_count}</span>
                <Icon
                  icon={gitBranch}
                  style={{
                    marginLeft: 16,
                  }}
                />
                <span className="v-forks_count">{t.forks_count}</span>
              </div>
            </div>
            {/* </div> */}
          </ListItem>
        ))}
      </List>
      {/* </div> */}
      <style jsx>{`
        :global(.v-repo-item) {
          flex-direction: column;
        }
        .v-line1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          color: #888;
        }
        .v-line1 .v-left > img {
          width: 30px;
          border-radius: 15px;
          vertical-align: middle;
        }
        .v-line1 .v-left > span {
          margin-left: 4px;
        }
        .v-line2 {
          margin-top: 8px;
          font-weight: bold;
        }
        .v-description {
          margin-top: 8px;
          color: #333;
        }
        .v-line4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 8px;
          color: #888;
        }
        .v-language,
        .v-line4 .v-right > span,
        :global(.v-line4 .v-right > svg) {
          vertical-align: middle;
        }
      `}</style>
    </>
  )
}

// VStarredList.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// VStarredList.getInitialProps = async ({ req }) => {}
VStarredList.displayName = '🔗 VStarredList - COMPONENT'

export default VStarredList
