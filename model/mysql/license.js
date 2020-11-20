import { Sequelize, Model } from 'sequelize'
import { V_Number, V_String, V_Boolean, sequelize } from './common'
import vLog from '../../plugins/logger'

class License extends Model {
  static vBuild = (json) => {
    // const license = License.build(json)
    // return license.save()
    return new Promise((resolve, reject) => {
      License.upsert(json)
        .then((a, b, c) => {
          const [model, isCreated] = a
          vLog.login(`License: [${model.node_id} - ${isCreated}]`/** , model*/)
          ;(model && resolve(model)) || reject(new Error(model))
        })
        .catch((e) => {
          vLog.log('License.upsert.error: ', e)
          reject(e)
        })
    })
  }
}
License.init(
  {
    node_id: { type: V_String, primaryKey: true, unique: true },
    key: V_String,
    name: V_String,
    spdx_id: V_String,
    url: V_String,
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'license',
    createdAt: 'f_created_at',
    updatedAt: 'f_updated_at',
  },
)
License.sync()
// License.sync({ alter: true })
export default License
