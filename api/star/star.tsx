// import Cookies from 'js-cookie'
import HttpApi, { AxiosRequest } from '../../plugins/http'
import {
  LanguageModel,
  NoteModel,
  ReadmeModel,
  RepoListModel,
  RepoModel,
  TagListModel,
  TagModel,
  UserModel,
} from './model'

HttpApi.baseURL = process.env.NEXT_PUBLIC_Base_URL || ''

if (HttpApi.baseURL.includes('api.github.com')) {
  console.log('---------------111111---------------')
}
// if (process.env.NEXT_PUBLIC_ACCESS_TOKEN) {
//   HttpApi.header.Authorization = process.env.NEXT_PUBLIC_ACCESS_TOKEN
// }

const uri = {
  /// 用户信息
  userInfo: 'api/github/user/get',
  noteList: 'api/github/note/get',
  tagBindList: 'api/github/tag/bindList',
  tagList: 'api/github/tag/list',
  repoList: 'api/github/repo/list',
  languageList: 'api/github/repo/language',
  /// Github api
  starredList: 'users/lxthyme/starred',
  readme: 'repos/${fullName}/readme',
}

HttpApi.beforeRequest = ({ url: uri }) => {
  if (uri.startsWith('api')) {
    HttpApi.baseURL = 'http://0.0.0.0:3003'
  } else {
    HttpApi.baseURL = 'https://api.github.com'
    HttpApi.header = {
      Accept: 'application/vnd.github.v3.star+json',
      Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    }
  }
}

/// 0.0.0.0:3003
export const $UserInfo = (id: number) => {
  return HttpApi.request<UserModel>({
    url: uri.userInfo,
    method: 'POST',
    data: { id },
  })
}
export const $NoteList = (repo_id: number) => {
  return HttpApi.request<NoteModel>({
    url: uri.noteList,
    method: 'POST',
    data: { repo_id },
  })
}
export const $StarredList = (page: number) => {
  return HttpApi.request<RepoModel[]>({
    url: uri.starredList,
    method: 'POST',
    data: { page },
  })
}
export const $TagBindList = (repo_id: number) => {
  return HttpApi.request<RepoModel[]>({
    url: uri.tagBindList,
    method: 'POST',
    data: { repo_id },
  })
}
export const $TagList = () => {
  return HttpApi.request<TagListModel>({
    url: uri.tagList,
    method: 'POST',
    data: {},
  })
}
export const $RepoList = ({
  repo_id = -1,
  tag_id = '',
  language = '',
  search_value = '',
  search_key = '',
  from = 0,
  pageSize = 10,
}: {
  repo_id: number
  language: string
  search_value: string
  search_key: string
  tag_id: string
  from: number
  pageSize: number
}) => {
  return HttpApi.request<RepoListModel>({
    url: uri.repoList,
    method: 'POST',
    data: {
      repo_id,
      tag_id: tag_id.trim(),
      language: language.trim(),
      search_key: search_key.trim(),
      search_value: search_value.trim(),
      from,
      pageSize,
    },
  })
}
export const $LanguageList = () => {
  return HttpApi.request<LanguageModel[]>({
    url: uri.languageList,
    method: 'POST',
    data: {},
  })
}
/// Github api
export const $Starred = (page: number) => {
  return HttpApi.request<ReadmeModel>({
    url: `https://api.github.com/users/lxthyme/starred`,
    method: 'GET',
    data: { page },
  })
}
export const $ReadME = (fullName: string) => {
  return HttpApi.request<ReadmeModel>({
    url: `https://api.github.com/repos/${fullName}/readme`,
    method: 'GET',
    data: {},
  })
}
