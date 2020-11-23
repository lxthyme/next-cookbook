/// User Info

export interface UserModel {
  id: number
  login: string
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: false
  name: string
  company?: string
  blog: string
  location?: string
  email: string
  hireable?: string
  bio?: string
  twitter_username?: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  private_gists: number
  total_private_repos: number
  owned_private_repos: number
  disk_usage: number
  collaborators: number
  two_factor_authentication: boolean
  f_created_at: string
  f_updated_at: string
}

/// ReadME
export interface ReadmeLinkModel {
  self: string
  git: string
  html: string
}
export interface ReadmeModel {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: ReadmeLinkModel
}

/// Tag
export interface RepoTagModel {
  repo_id: number
  tag_id: string
  f_created_at: string
  f_updated_at: string
}
export interface TagModel {
  id: string
  name: string
  order: number
  f_created_at: string
  f_updated_at: string
  RepoTag: RepoTagModel
  /// only for 3003
  count: number
}

/// Note
export interface NoteModel {
  RepoId: number
  content: string
  f_created_at: string
  f_updated_at: string
  repo_id: number
}
/// license
export interface LicenseModel {
  node_id: string
  key: string
  name: string
  spdx_id: string
  url: string
  f_created_at: string
  f_updated_at: string
}
/// Repo
export interface RepoModel {
  id: number
  node_id: string
  name: string
  full_name: string
  starred_at: string
  private: false
  html_url: string
  description: string
  fork: false
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string
  size: string
  stargazers_count: string
  watchers_count: number
  language: string
  has_issues: true
  has_projects: false
  has_downloads: true
  has_wiki: false
  has_pages: false
  forks_count: number
  mirror_url: string
  archived: false
  disabled: false
  open_issues_count: number
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
  f_created_at: string
  f_updated_at: string
  owner_id: number
  ownerId: number
  license_node_id: string
  licenseNodeId: string
  owner: UserModel
  license: LicenseModel
  note: NoteModel
  tag: TagModel[]
}
