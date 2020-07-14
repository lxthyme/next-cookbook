import StarrdedList from '../model/mock/starred'
import { useGet, usePost } from '../plugins/api'
// import { query } from '../plugins/db'

const LX_Regex_Remove_Comment = /\/\/\/[a-zA-Z0-9_ ]*\n/gs

export const repo = {
  sqlColumns: () => {
    return `
        \`id\`,
        \`node_id\`,
        \`name\`,
        \`full_name\`,
        \`private\`,
        \`owner_id\`,
        \`html_url\`,
        \`description\`,
        \`fork\`,
        \`url\`,
        \`forks_url\`,
        \`keys_url\`,
        \`collaborators_url\`,
        \`teams_url\`,
        \`hooks_url\`,
        \`issue_events_url\`,
        \`events_url\`,
        \`assignees_url\`,
        \`branches_url\`,
        \`tags_url\`,
        \`blobs_url\`,
        \`git_tags_url\`,
        \`git_refs_url\`,
        \`trees_url\`,
        \`statuses_url\`,
        \`languages_url\`,
        \`stargazers_url\`,
        \`contributors_url\`,
        \`subscribers_url\`,
        \`subscription_url\`,
        \`commits_url\`,
        \`git_commits_url\`,
        \`comments_url\`,
        \`issue_comment_url\`,
        \`contents_url\`,
        \`compare_url\`,
        \`merges_url\`,
        \`archive_url\`,
        \`downloads_url\`,
        \`issues_url\`,
        \`pulls_url\`,
        \`milestones_url\`,
        \`notifications_url\`,
        \`labels_url\`,
        \`releases_url\`,
        \`deployments_url\`,
        \`created_at\`,
        \`updated_at\`,
        \`pushed_at\`,
        \`git_url\`,
        \`ssh_url\`,
        \`clone_url\`,
        \`svn_url\`,
        \`homepage\`,
        \`size\`,
        \`stargazers_count\`,
        \`watchers_count\`,
        \`language\`,
        \`has_issues\`,
        \`has_projects\`,
        \`has_downloads\`,
        \`has_wiki\`,
        \`has_pages\`,
        \`forks_count\`,
        \`mirror_url\`,
        \`archived\`,
        \`disabled\`,
        \`open_issues_count\`,
        \`license_id\`,
        \`forks\`,
        \`open_issues\`,
        \`watchers\`
        `
  },
  sqlValues: (repo) => {
    return `
        /// id
        ${repo.id || 0},
        /// node_id
        "${repo.node_id || ''}",
        /// name
        "${repo.name || ''}",
        /// full_name
        "${repo.full_name || ''}",
        /// private
        ${repo.private || 0},
        /// owner_id
        ${(repo.owner && repo.owner.id) || 0},
        /// html_url
        "${repo.html_url || ''}",
        /// description
        "${escape(repo.description || '')}",
        /// fork
        ${repo.fork || 0},
        /// url
        "${repo.url || ''}",
        /// forks_url
        "${repo.forks_url || ''}",
        /// keys_url
        "${repo.keys_url || ''}",
        /// collaborators_url
        "${repo.collaborators_url || ''}",
        /// teams_url
        "${repo.teams_url || ''}",
        /// hooks_url
        "${repo.hooks_url || ''}",
        /// issue_events_url
        "${repo.issue_events_url || ''}",
        /// events_url
        "${repo.events_url || ''}",
        /// assignees_url
        "${repo.assignees_url || ''}",
        /// branches_url
        "${repo.branches_url || ''}",
        /// tags_url
        "${repo.tags_url || ''}",
        /// blobs_url
        "${repo.blobs_url || ''}",
        /// git_tags_url
        "${repo.git_tags_url || ''}",
        /// git_refs_url
        "${repo.git_refs_url || ''}",
        /// trees_url
        "${repo.trees_url || ''}",
        /// statuses_url
        "${repo.statuses_url || ''}",
        /// languages_url
        "${repo.languages_url || ''}",
        /// stargazers_url
        "${repo.stargazers_url || ''}",
        /// contributors_url
        "${repo.contributors_url || ''}",
        /// subscribers_url
        "${repo.subscribers_url || ''}",
        /// subscription_url
        "${repo.subscription_url || ''}",
        /// commits_url
        "${repo.commits_url || ''}",
        /// git_commits_url
        "${repo.git_commits_url || ''}",
        /// comments_url
        "${repo.comments_url || ''}",
        /// issue_comment_url
        "${repo.issue_comment_url || ''}",
        /// contents_url
        "${repo.contents_url || ''}",
        /// compare_url
        "${repo.compare_url || ''}",
        /// merges_url
        "${repo.merges_url || ''}",
        /// archive_url
        "${repo.archive_url || ''}",
        /// downloads_url
        "${repo.downloads_url || ''}",
        /// issues_url
        "${repo.issues_url || ''}",
        /// pulls_url
        "${repo.pulls_url || ''}",
        /// milestones_url
        "${repo.milestones_url || ''}",
        /// notifications_url
        "${repo.notifications_url || ''}",
        /// labels_url
        "${repo.labels_url || ''}",
        /// releases_url
        "${repo.releases_url || ''}",
        /// deployments_url
        "${repo.deployments_url || ''}",
        /// created_at
        "${repo.created_at || ''}",
        /// updated_at
        "${repo.updated_at || ''}",
        /// pushed_at
        "${repo.pushed_at || ''}",
        /// git_url
        "${repo.git_url || ''}",
        /// ssh_url
        "${repo.ssh_url || ''}",
        /// clone_url
        "${repo.clone_url || ''}",
        /// svn_url
        "${repo.svn_url || ''}",
        /// homepage
        "${repo.homepage || ''}",
        /// size
        ${repo.size || 0},
        /// stargazers_count
        ${repo.stargazers_count || 0},
        /// watchers_count
        ${repo.watchers_count},
        /// language
        "${repo.language || ''}",
        /// has_issues
        ${repo.has_issues},
        /// has_projects
        ${repo.has_projects || 0},
        /// has_downloads
        ${repo.has_downloads || 0},
        /// has_wiki
        ${repo.has_wiki || 0},
        /// has_pages
        ${repo.has_pages || 0},
        /// forks_count
        ${repo.forks_count || 0},
        /// mirror_url
        "${repo.mirror_url || ''}",
        /// archived
        ${repo.archived || 0},
        /// disabled
        ${repo.disabled || 0},
        /// open_issues_count
        ${repo.open_issues_count || 0},
        /// license_id
        ${repo.license_id || 0},
        /// forks
        ${repo.forks || 0},
        /// open_issues
        ${repo.open_issues || 0},
        /// watchers
        "${repo.watchers || ''}"
        `
  },
  search: (from, to) => {
    return `SELECT * FROM \`repo\` LIMIT ${from}, ${to}`
  },
  insert: (list) => {
    // const values = repo.sqlValues(model)
    // const sqlString = `REPLACE INTO \`repo\` ( ${sqlColumns()} ) VALUES ( ${values} )`
    const values = list
      .map((t) => repo.sqlValues(t).replace(LX_Regex_Remove_Comment, ''))
      .reduce((prev, cur) => (prev += `(${cur}),`), '')
      .slice(0, -1)
    return `REPLACE INTO \`repo\` ( ${repo.sqlColumns()} ) VALUES ${values}`
  },
}

export const user = {
  sqlColumns: () => {
    return `
        \`id\`,
        \`login\`,
        \`node_id\`,
        \`avatar_url\`,
        \`gravatar_id\`,
        \`url\`,
        \`html_url\`,
        \`followers_url\`,
        \`following_url\`,
        \`gists_url\`,
        \`starred_url\`,
        \`subscriptions_url\`,
        \`organizations_url\`,
        \`repos_url\`,
        \`events_url\`,
        \`received_events_url\`,
        \`type\`,
        \`site_admin\`,
        \`NAME\`,
        \`company\`,
        \`blog\`,
        \`location\`,
        \`email\`,
        \`hireable\`,
        \`bio\`,
        \`twitter_username\`,
        \`public_repos\`,
        \`public_gists\`,
        \`followers\`,
        \`following\`,
        \`created_at\`,
        \`updated_at\`
        `
  },
  sqlValues: (item) => {
    return `
      /// id
      ${item.id || 0},
      /// login
      "${item.login || ''}",
      /// node_id
      "${item.node_id || ''}",
      /// avatar_url
      "${item.avatar_url || ''}",
      /// gravatar_id
      "${item.gravatar_id || ''}",
      /// url
      "${item.url || ''}",
      /// html_url
      "${item.html_url || ''}",
      /// followers_url
      "${item.followers_url || ''}",
      /// following_url
      "${item.following_url || ''}",
      /// gists_url
      "${item.gists_url || ''}",
      /// starred_url
      "${item.starred_url || ''}",
      /// subscriptions_url
      "${item.subscriptions_url || ''}",
      /// organizations_url
      "${item.organizations_url || ''}",
      /// repos_url
      "${item.repos_url || ''}",
      /// events_url
      "${item.events_url || ''}",
      /// received_events_url
      "${item.received_events_url || ''}",
      /// type
      "${item.type || ''}",
      /// site_admin
      ${item.site_admin || 0},
      /// NAME
      "${item.NAME || ''}",
      /// company
      "${item.company || ''}",
      /// blog
      "${item.blog || ''}",
      /// location
      "${item.location || ''}",
      /// email
      "${item.email || ''}",
      /// hireable
      "${item.hireable || ''}",
      /// bio
      "${item.bio || ''}",
      /// twitter_username
      "${item.twitter_username || ''}",
      /// public_repos
      ${item.public_repos || 0},
      /// public_gists
      ${item.public_gists || 0},
      /// followers
      ${item.followers || 0},
      /// following
      ${item.following || 0},
      /// created_at
      "${item.created_at || ''}",
      /// updated_at
      "${item.updated_at || ''}"
      `
  },
  search: (from, to) => {
    // return `SELECT * FROM \`user\` LIMIT ${from}, ${to}`
    return `SELECT * FROM \`user\` LIMIT ${from}, ${to}`
  },
  insert: (list) => {
    const values = list
      .map((t) => user.sqlValues(t).replace(LX_Regex_Remove_Comment, ''))
      .reduce((prev, cur) => (prev += `(${cur}),`), '')
      .slice(0, -1)
    return `REPLACE INTO \`user\` ( ${user.sqlColumns()} ) VALUES ${values}`
  },
}

export const license = {
  sqlColumns: () => {
    return `
    \`id\`,
    \`key\`,
    \`name\`,
    \`spdx_id\`,
    \`url\`,
    \`node_id\`
    `
  },
  sqlValues: (item) => {
    return `
    ${item.id},
    "${item.key || ''}",
    "${item.name || ''}",
    "${item.spdx_id || ''}",
    "${item.url || ''}",
    "${item.node_id || ''}"
    `
  },
  search: (from, to) => {
    return `SELECT * FROM \`license\` LIMIT ${from}, ${to}`
  },
  insert: (list) => {
    const values = list
      .map((t) => license.sqlValues(t).replace(LX_Regex_Remove_Comment, ''))
      .reduce((prev, cur) => (prev += `(${cur}),`), '')
      .slice(0, -1)
    return `REPLACE INTO \`license\` ( ${license.sqlColumns()} ) VALUES ${values}`
  },
}

export const repo_note = {
  sqlColumns: () => {
    return `
        \`repo_id\`, \`note\`, \`create_at\`, \`update_at\`
        `
  },
  sqlValues: (item) => {
    const timestamp = new Date().getTime()
    return `
        /// repo_id
        ${item.id},
        /// note
        "${item.note || ''}",
        /// create_at
        "${timestamp}",
        /// update_at
        "${timestamp}"
        `
  },
  insert: (item) => {
    const values = repo_note.sqlValues(item).replace(LX_Regex_Remove_Comment, '')
    return `REPLACE INTO \`repo_note\` ( ${repo_note.sqlColumns()} ) VALUES ( ${values} )`
  },
}

export default {
  repo,
  repo_note,
  user,
  license,
}
