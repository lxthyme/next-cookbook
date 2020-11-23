// import Cookies from 'js-cookie'
import HttpApi from '../../plugins/http'
import { NoteModel, ReadmeModel, RepoModel, UserModel } from './model'

HttpApi.baseURL = process.env.NEXT_PUBLIC_Base_URL || ''

HttpApi.header = {
  Accept: 'application/vnd.github.v3.star+json',
  Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
}
// if (process.env.NEXT_PUBLIC_ACCESS_TOKEN) {
//   HttpApi.header.Authorization = process.env.NEXT_PUBLIC_ACCESS_TOKEN
// }

const uri = {
  /// 用户信息
  userInfo: 'api/github/user/get',
  noteList: 'api/github/note/get',
  /// Github api
  starredList: 'https://api.github.com/users/lxthyme/starred',
  readme: 'repos/${fullName}/readme',
}

export const $UserInfo = () => {
  return HttpApi.request<UserModel>({ url: uri.userInfo, method: "POST", data: {} })
}
export const $NoteList = (repo_id: string) => {
  return HttpApi.request<NoteModel>({ url: uri.noteList, method: "POST", data: { repo_id } })
}
export const $ReadME = (fullName: string) => {
  return HttpApi.request<ReadmeModel>({ url: `https://api.github.com/repos/${fullName}/readme`, method: "GET", data: {} })
}
export const $StarredList = (fullName: string) => {
  return HttpApi.request<RepoModel[]>({ url: uri.starredList, method: "GET", data: {} })
}
