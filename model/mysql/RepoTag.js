import { Sequelize, Model } from 'sequelize'
import { V_Number, V_String, V_Boolean, sequelize } from './common'
import vLog from '../../plugins/logger'

class RepoTag extends Model {
  static vBuild = (json) => {
    // const note = Tag.build(json)
    // return note.save()
    return new Promise((resolve, reject) => {
      RepoTag.upsert(json)
        .then((a) => {
          const [model, isCreated] = a
          vLog.login(`RepoTag: [${model.id} - ${isCreated}]` /** , model*/)
          ;(model && resolve(model)) || reject(new Error(model))
        })
        .catch((e) => {
          vLog.login('RepoTag.upsert.error: ', e)
          reject(e)
        })
    })
  }
  static vBuildList = (array) => {
    return new Promise(async (resolve, reject) => {
      const result = []
      vLog.login('[RepoTag]begin...')
      for (let i = 0; i < array.length; i++) {
        try {
          vLog.login(`-->[RepoTag]👉${i}: `)
          const item = array[i]
          const tmp = await this.vBuild(item)
          vLog.login(`[RepoTag-${i}]保存成功!`)
          result.push(tmp)
        } catch (error) {
          vLog.errorin(`[RepoTag-${i}]保存失败!`, error)
          reject(error)
          break
        }
      }
      vLog.log('[RepoTag]end...')
      resolve(result)
    })
  }
}
RepoTag.init(
  {
    // id: { type: V_Number, primaryKey: true, autoIncrement: true },
    // name: { type: V_String },
    repo_id: { type: V_Number, primaryKey: true },
    tag_id: V_String,
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    // modelName: 'note',
    underscored: true,
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
    name: {
      singular: 'RepoTag',
      plural: 'RepoTag',
    },
  },
)
RepoTag.sync()
// RepoTag.sync({ alter: true })
export default RepoTag
