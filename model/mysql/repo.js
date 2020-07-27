import { Sequelize, Deferrable, Model } from 'sequelize'
import {
  V_Number,
  V_String,
  V_Text,
  V_Boolean,
  sequelize,
} from '../../model/mysql/common'
import User from '../../model/mysql/user'
import License from '../../model/mysql/license'
import Note from './note.js'
import vLog from '../../plugins/logger'

class Repo extends Model {
  static vBuild = async (json) => {
    try {
      let {
        owner: ownerInfo = {},
        license: licenseInfo = {},
        ...repoInfo
      } = json
      // vLog.log('licenseInfo: ', licenseInfo)
      licenseInfo = licenseInfo || {}
      ownerInfo = ownerInfo || {}
      if (!licenseInfo.node_id) {
        // licenseInfo.node_id = repoInfo.id
        licenseInfo.node_id = 'undefined'
      }
      // console.log({ownerInfo, licenseInfo});
      // const repo = await Repo.upsert({
      //   owner: ownerInfo.id,
      //   license: licenseInfo.node_id,
      //   ...repoInfo,
      // })
      const license = await License.vBuild(licenseInfo)
      const user = await User.vBuild(ownerInfo)
      // const repo = Repo.build({
      //   owner: user.id,
      //   license: license.node_id,
      //   ...repoInfo,
      // })
      // return repo.save()
      // Repo.upsert()

      const repoResult = await Repo.upsert({
        owner_id: user.id,
        // license: license.node_id,
        license_node_id: license.node_id,
        ...repoInfo,
      })
      const [model, isCreated] = repoResult
      vLog.login(`Repo: [${model.id} - ${isCreated}]` /** , model*/)
      return model
    } catch (error) {
      vLog.log('Repo.upsert.error: ', error)
    }
  }
  static vUpdate = async (json) => {
    const {
      owner: ownerInfo = {},
      license: licenseInfo = {},
      ...repoInfo
    } = json
    // console.log({ownerInfo, licenseInfo});
    const user = await User.vBuild(ownerInfo)
    const license = await License.vBuild(licenseInfo)
    // const repo = Repo.build({
    //   owner: user.id,
    //   license: license.node_id,
    //   ...repoInfo,
    // })
    // return repo.save()
    return Repo.create({
      owner: user.id,
      license_node_id: license.node_id,
      ...repoInfo,
    })
  }
  // static vBuildList = (array) => {
  //   return new Promise(async (resolve, reject) => {
  //     console.log('begin...')
  //     const result = []
  //     for (let i = 0; i < array.length; i++) {
  //       try {
  //         console.log(`-->👉${i}: `)
  //         const item = array[i]
  //         const tmp = await this.vBuild(item)
  //         console.log(`-->👉${i}保存成功!`)
  //         result.push(tmp)
  //       } catch (error) {
  //         console.log('E: ', error)
  //         reject(error)
  //         break
  //       }
  //     }
  //     console.log('end...')
  //     resolve(result)
  //   })
  // }
  static vBuildList = (array) => {
    return new Promise(async (resolve, reject) => {
      console.log('begin...')
      const result = []
      for (let i = 0; i < array.length; i++) {
        try {
          // console.log(`-->👉${i}: `)
          const item = array[i]
          // Repo.findOne({ where: { id: item.id } })
          // .then(obj => {
          //   let tmp = obj
          //   if(tmp) {
          //     tmp = await tmp.update(item)
          //     console.log(`-->👉[${i}]更新成功!`);
          //   } else {
          //     tmp = await this.vBuild(item)
          //     console.log(`-->👉[${i}]插入成功!`);
          //   }
          // })
          const tmp = await this.vBuild(item)
          vLog.log(`${i}保存成功!`)
          result.push(tmp)
        } catch (error) {
          vLog.error(`${i}保存失败!`, error)
          reject(error)
          break
        }
      }
      vLog.log('end...')
      resolve(result)
    })
  }
  // static vBuildList = (array) => {
  //   return Repo.bulkBuild(array, {
  //     validate: true,
  //   })
  // }
}
Repo.init(
  {
    id: { type: V_Number, primaryKey: true, unique: true },
    note_id: {
      type: V_Number,
      references: {
        model: Note,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    // repo_id: V_Number,
    node_id: V_String,
    name: V_String,
    full_name: V_String,
    private: V_Boolean,
    owner_id: {
      type: V_Number,
      references: {
        model: User,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    html_url: V_String,
    description: V_Text,
    fork: V_Boolean,
    url: V_String,
    forks_url: V_String,
    keys_url: V_String,
    collaborators_url: V_String,
    teams_url: V_String,
    hooks_url: V_String,
    issue_events_url: V_String,
    events_url: V_String,
    assignees_url: V_String,
    branches_url: V_String,
    tags_url: V_String,
    blobs_url: V_String,
    git_tags_url: V_String,
    git_refs_url: V_String,
    trees_url: V_String,
    statuses_url: V_String,
    languages_url: V_String,
    stargazers_url: V_String,
    contributors_url: V_String,
    subscribers_url: V_String,
    subscription_url: V_String,
    commits_url: V_String,
    git_commits_url: V_String,
    comments_url: V_String,
    issue_comment_url: V_String,
    contents_url: V_String,
    compare_url: V_String,
    merges_url: V_String,
    archive_url: V_String,
    downloads_url: V_String,
    issues_url: V_String,
    pulls_url: V_String,
    milestones_url: V_String,
    notifications_url: V_String,
    labels_url: V_String,
    releases_url: V_String,
    deployments_url: V_String,
    created_at: V_String,
    updated_at: V_String,
    pushed_at: V_String,
    git_url: V_String,
    ssh_url: V_String,
    clone_url: V_String,
    svn_url: V_String,
    homepage: V_String,
    size: V_String,
    stargazers_count: V_String,
    watchers_count: V_Number,
    language: V_String,
    has_issues: V_Boolean,
    has_projects: V_Boolean,
    has_downloads: V_Boolean,
    has_wiki: V_Boolean,
    has_pages: V_Boolean,
    forks_count: V_Number,
    mirror_url: V_String,
    archived: V_Boolean,
    disabled: V_Boolean,
    open_issues_count: V_Number,
    license_node_id: {
      type: V_String,
      references: {
        model: License,
        key: 'node_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    forks: V_Number,
    open_issues: V_Number,
    watchers: V_Number,
    default_branch: V_String,
  },
  {
    sequelize,
    timestamps: true,
    // modelName: 'repo',
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)
// Repo.sync()
// Repo.sync({ alter: true })

User.hasMany(Repo, {
  foreignKey: 'owner_id',
})
Repo.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'owner_id',
  as: 'owner',
})
License.hasMany(Repo, {
  foreignKey: 'license_node_id',
})
Repo.belongsTo(License, {
  targetKey: 'node_id',
  foreignKey: 'license_node_id',
  as: 'license',
})
Repo.hasMany(Note, {
  foreignKey: 'id',
  targetKey: 'note_id'
})
export default Repo
