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
import Note from './note'
import Tag from './tag'
import vLog from '../../plugins/logger'
import RepoTag from './RepoTag'

class Repo extends Model {
  static vBuild = async (json) => {
    try {
      let {
        owner: ownerInfo = {},
        license: licenseInfo = {},
        tag: tagInfo = [],
        note: noteInfo = [],
        ...repoInfo
      } = json
      // vLog.log('licenseInfo: ', licenseInfo)
      licenseInfo = licenseInfo || {}
      ownerInfo = ownerInfo || {}
      let license = null,
        user = null,
        tagList = null,
        noteList = null
      if (Object.keys(licenseInfo).length > 0) {
        // if (!licenseInfo.node_id) {
        //   // licenseInfo.node_id = repoInfo.id
        //   licenseInfo.node_id = 'undefined'
        // }
        license = await License.vBuild(licenseInfo)
      }
      if (Object.keys(ownerInfo).length > 0) {
        user = await User.vBuild(ownerInfo)
      }
      // tagInfo = {
      //   id: `Swift-300135838`,
      //   repo_id: 300135838,
      //   name: 'Swift',
      // }
      if (Object.keys(tagInfo).length > 0) {
        tagList = await Tag.vBuild(tagInfo)
      }
      if (Object.keys(noteInfo).length > 0) {
        noteList = await Note.vBuildList(noteInfo)
      }
      // console.log({ownerInfo, licenseInfo});
      // const repo = await Repo.upsert({
      //   owner: ownerInfo.id,
      //   license: licenseInfo.node_id,
      //   ...repoInfo,
      // })
      // const license = await License.vBuild(licenseInfo)
      // const user = await User.vBuild(ownerInfo)
      // const tagList = await Tag.vBuildList(tagInfo)
      // const noteList = await Note.vBuildList(noteInfo)
      // vLog.log('tag: ', tagList)
      // const repo = Repo.build({
      //   owner: user.id,
      //   license: license.node_id,
      //   ...repoInfo,
      // })
      // return repo.save()
      // Repo.upsert()
      const repoResult = await Repo.upsert({
        // owner_id: user.id,
        // license: license.node_id,
        // license_node_id: license.node_id,
        ...repoInfo,
      })
      // const repoResult = await Repo.upsert(json, {
      //   // inc
      // })
      const [model, isCreated] = repoResult
      user && model.setOwner(user)
      license && model.setLicense(license)
      // vLog.log('model.setTags: ', {
      //   setTag: model.setTag,
      //   setTags: model.setTags,
      //   setTagList: model.setTagList,
      //   setTagsList: model.setTagsList,
      //   setTag_list: model.setTag_list,
      //   setTags_list: model.setTags_list,
      //   tagList: model.tagList,
      //   tagList2: model.tagsList,
      //   // tagList2: await model.getTags(),
      // })
      // model.setTag_list(tagList)
      // model.setNote_list(noteList)
      // model.setTag(tagList)
      tagList && model.addTag(tagList)
      // model.setNote(noteList)
      await model.save()
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
      vLog.login('begin...')
      const result = []
      for (let i = 0; i < array.length; i++) {
        try {
          vLog.login(`-->👉${i}: `)
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
          vLog.login(`${i}保存成功!`)
          result.push(tmp)
        } catch (error) {
          vLog.errorin(`${i}保存失败!`, error)
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
    // note_id: {
    //   type: V_Number,
    //   references: {
    //     model: Note,
    //     key: 'id',
    //     deferrable: Deferrable.INITIALLY_IMMEDIATE,
    //   },
    // },
    // owner_id: V_Number,
    // tag_id: V_Number,
    // license_node_id: V_String,
    node_id: V_String,
    name: V_String,
    full_name: V_String,
    starred_at: V_String,
    private: V_Boolean,
    // owner_id: V_Number,
    // owner_id: {
    //   type: V_Number,
    //   references: {
    //     model: User,
    //     key: 'id',
    //     deferrable: Deferrable.INITIALLY_IMMEDIATE,
    //   },
    // },
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
    // license_node_id: {
    //   type: V_String,
    //   references: {
    //     model: License,
    //     key: 'node_id',
    //     deferrable: Deferrable.INITIALLY_IMMEDIATE,
    //   },
    // },
    forks: V_Number,
    open_issues: V_Number,
    watchers: V_Number,
    default_branch: V_String,
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    // modelName: 'repo',
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)


User.hasMany(Repo, {
  foreignKey: 'owner_id',
  targetKey: 'id',
  allowNull: false,
})
Repo.belongsTo(User, {
  // targetKey: 'id',
  // foreignKey: 'owner_id',
  // as: 'owner',
})
License.hasMany(Repo, {
  foreignKey: 'license_node_id',
  targetKey: 'node_id',
  allowNull: false,
})
Repo.belongsTo(License, {
  // targetKey: 'node_id',
  // foreignKey: 'license_node_id',
  // as: 'license',
})
Repo.hasOne(Note, {
  // foreignKey: 'repo_id',
  // targetKey: 'id',
  // constraints: false,
  allowNull: false,
})
Note.belongsTo(Repo, {
//   // through: 'rn_repo_tag',
//   // foreignKey: 'id',
//   // targetKey: 'repo_id'
})
// Note.belongsTo(Repo, {})
// Repo.hasMany(Tag, {
//   as: {
//     singular: 'tag',
//     plural: 'tag',
//   },
// })
Repo.belongsToMany(Tag, {
  through: RepoTag,
  as: 'tags',
  foreignKey: 'repo_id',
  // targetKey: 'id',
  // targetKey: 'name',
  // otherKey: 'tag_id',
  allowNull: false,
  // uniqueKey: 'ukey',
  as: {
    singular: 'tag',
    plural: 'tag',
  },
})
Tag.belongsToMany(Repo, {
  through: RepoTag,
  as: 'repos',
  foreignKey: 'tag_id',
  // targetKey: 'name',
  // otherKey: 'repo_id',
  allowNull: false,
  as: {
    singular: 'repo',
    plural: 'repo',
  },
})
// Tag.hasMany(Repo, {
//   foreignKey: 'tag_id',
//   targetKey: 'id',
//   constraints: false,
//   allowNull: false
// })

Repo.sync()
// Repo.sync({ alter: true })
export default Repo
