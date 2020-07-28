import { connectToSQL } from '../../../../model/mysql/common'
import User from '../../../../model/mysql/user'
import License from '../../../../model/mysql/license'
import Repo from '../../../../model/mysql/repo'
import Note from '../../../../model/mysql/note'
import Tag from '../../../../model/mysql/tag'
import vLog from '../../../../plugins/logger'

export default async (req, res) => {
  const { type, from, to, repo_id, tag_id } = req.body

  try {
    await connectToSQL()
    const result = await Repo.findAll({
      offset: 0,
      limit: 20,
      include: [
        {
          model: User,
          // as: 'owner',
          // through: {
          //   as: 'ownerr'
          // }
        },
        {
          model: License,
          // as: 'license',
          // through: {
          //   as: 'license'
          // }
        },
        {
          model: Note,
        },
        {
          model: Tag,
        },
      ],
    })
    const first = result[0]
    vLog.log('first.getOwner: ', {
      user: first.user,
      owner: first.owner,
      getOwner: first.getOwner,
      getOwnerF: await first.getOwner(),
      getUser: first.getUser,
      getOwners: first.getOwners,
      getUsers: first.getUsers,

    })
    // const resultObj = JSON.parse(JSON.stringify(result))
    // vLog.log('Result: ', result[0].toJSON())
    // vLog.log('Result: ', result.map)
    // vLog.log('Result: ', JSON.stringify(result))
    // vLog.log('Result: ', result.toJSON())
    res.status(200).json({
      code: 10000,
      msg: '',
      runtime: 0.18198108673095703,
      // data: ,
      data: result,
    })
  } catch (err) {
    vLog.error('Error: ', err)
    res.status(200).json({
      code: 10002,
      msg: JSON.stringify(err),
      runtime: 0.18198108673095703,
      data: {},
    })
  }
}
