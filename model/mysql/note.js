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
}
Note.init(
  {
    id: { type: V_Number, primaryKey: true, unique: true },
    repo_id: V_Number,
    content: V_String,
  },
  {
    sequelize,
    timestamps: true,
    // modelName: 'Note',
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)
// Note.sync()
// Note.sync({ alter: true })
export default Note
