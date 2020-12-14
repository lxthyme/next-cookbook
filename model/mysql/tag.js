import { Sequelize, Model } from 'sequelize'
import { V_Number, V_String, V_Boolean, sequelize } from './common'
import vLog from '../../plugins/logger'

class Tag extends Model {
  static vBuild = (json) => {
    // const note = Tag.build(json)
    // return note.save()
    return new Promise((resolve, reject) => {
      Tag.upsert(json)
        .then((a) => {
          const [model, isCreated] = a
          vLog.login(`Tag: [${model.id} - ${isCreated}]` /** , model*/)
          ;(model && resolve(model)) || reject(new Error(model))
        })
        .catch((e) => {
          vLog.login('Tag.upsert.error: ', e)
          reject(e)
        })
    })
  }
  static vBuildList = (array) => {
    return new Promise(async (resolve, reject) => {
      const result = []
      vLog.login('[TAG]begin...')
      for (let i = 0; i < array.length; i++) {
        try {
          vLog.login(`-->[TAG]👉${i}: `)
          const item = array[i]
          const tmp = await this.vBuild(item)
          vLog.login(`[Tag-${i}]保存成功!`)
          result.push(tmp)
        } catch (error) {
          vLog.errorin(`[Tag-${i}]保存失败!`, error)
          reject(error)
          break
        }
      }
      vLog.log('[TAG]end...')
      resolve(result)
    })
  }
}
Tag.init(
  {
    id: { type: V_String, primaryKey: true },
    name: { type: V_String },
    order: V_Number,
    // repo_id: V_Number,
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
      singular: 'tag',
      plural: 'tag',
    },
  },
)
Tag.sync()
// Tag.sync({ alter: true })
export default Tag
