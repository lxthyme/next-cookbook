import { Sequelize, Model } from 'sequelize'
import {
  V_Number,
  V_String,
  V_Boolean,
  sequelize,
} from '../../model/mysql/common'
import vLog from '../../plugins/logger'

class User extends Model {
  static vBuild = (json) => {
    // const user = User.build(json)
    // return user.save()
    return new Promise((resolve, reject) => {
      User.upsert(json)
        .then((a, b, c) => {
          const [model, isCreated] = a
          vLog.login(`User: [${model.id} - ${isCreated}]` /** , model*/)
          ;(model && resolve(model)) || reject(new Error(model))
        })
        .catch((e) => {
          vLog.log('User.upsert.error: ', e)
          reject(e)
        })
    })
  }
}
User.init(
  {
    id: { type: V_Number, primaryKey: true, unique: false },
    login: V_String,
    node_id: V_String,
    avatar_url: V_String,
    gravatar_id: V_String,
    url: V_String,
    html_url: V_String,
    followers_url: V_String,
    following_url: V_String,
    gists_url: V_String,
    starred_url: V_String,
    subscriptions_url: V_String,
    organizations_url: V_String,
    repos_url: V_String,
    events_url: V_String,
    received_events_url: V_String,
    type: V_String,
    site_admin: V_Boolean,
    name: V_String,
    company: V_String,
    blog: V_String,
    location: V_String,
    email: V_String,
    hireable: V_String,
    bio: V_String,
    twitter_username: V_String,
    public_repos: V_Number,
    public_gists: V_Number,
    followers: V_Number,
    following: V_Number,
    created_at: V_String,
    updated_at: V_String,
    private_gists: V_Number,
    total_private_repos: V_Number,
    owned_private_repos: V_Number,
    disk_usage: V_Number,
    collaborators: V_Number,
    two_factor_authentication: V_Boolean,
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'owner',
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)
User.sync()
// User.sync({ alter: true })
export default User
