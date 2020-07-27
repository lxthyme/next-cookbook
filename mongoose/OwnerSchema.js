import mongoose from 'mongoose'

const Schema = mongoose.Schema

const OwnerSchema = new Schema({
  login: String,
  id: Int,
  node_id: String,
  avatar_url: String,
  gravatar_id: String,
  url: String,
  html_url: String,
  followers_url: String,
  following_url,
  gists_url: String,
  starred_url: String,
  subscriptions_url,
  organizations_url: String,
  repos_url: String,
  events_url: String,
  received_events_url: String,
  type: String,
  site_admin: Bool,
})

module.exports = mongoose.model('Owner', OwnerSchema)
