import { Sequelize, Model } from 'sequelize'
import { V_Number, V_String, V_Boolean, sequelize } from './common'
import vLog from '../../plugins/logger'

class Note extends Model {
  static vBuild = (json) => {
    // const note = Note.build(json)
    // return note.save()
    return new Promise((resolve, reject) => {
      Note.upsert(json)
        .then((a) => {
          const [model, isCreated] = a
          vLog.login(`Note: [${model.id} - ${isCreated}]` /** , model*/)
          ;(model && resolve(model)) || reject(new Error(model))
        })
        .catch((e) => {
          vLog.log('Note.upsert.error: ', e)
          reject(e)
        })
    })
  }
  static vBuildList = (array) => {
    return new Promise(async (resolve, reject) => {
      const result = []
      vLog.login('[NOTE]begin...')
      for (let i = 0; i < array.length; i++) {
        try {
          vLog.login(`-->[NOTE]👉${i}: `)
          const item = array[i]
          const tmp = await this.vBuild(item)
          vLog.login(`[Note-${i}]保存成功!`)
          result.push(tmp)
        } catch (error) {
          vLog.errorin(`[Note-${i}]保存失败!`, error)
          reject(error)
          break
        }
      }
      vLog.log('[NOTE]end...')
      resolve(result)
    })
  }
}
Note.init(
  {
    // id: { type: V_Number, primaryKey: true, autoIncrement: true },
    repo_id: { type: V_Number, primaryKey: true },
    content: V_String,
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    // modelName: 'note',
    underscored: true,
    name: {
      singular: 'note',
      plural: 'note',
    },
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)
Note.sync()
// Note.sync({ alter: true })
export default Note
