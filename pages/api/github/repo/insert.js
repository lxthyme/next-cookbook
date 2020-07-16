import React, { useEffect } from 'react'
import { query } from '../../../../plugins/db'
import GitHub from '../../../../plugins/github'

export default async (req, res) => {
  const { type, data, list } = req.body

  try {
    let sqlString = ''
    if (type === 'user') {
      sqlString = GitHub.user.insert(list)
    } else if (type === 'repo') {
      sqlString = GitHub.repo.insert(list)
    } else if (type === 'license') {
      sqlString = GitHub.license.insert(list)
    } else if (type === 'repo_note') {
      sqlString = GitHub.repo_note.insert(data)
    } else if (type === 'tag') {
      sqlString = GitHub.tag.insert(data)
    } else if (type === 'repo_tag') {
      sqlString = GitHub.repo_tag.insert(data)
    }
    if (!sqlString) {
      res.status(200).json({
        code: 10001,
        msg: 'SQL语句有误! -->sql: ${sqlString}',
        runtime: 0.18198108673095703,
        data: {},
      })
      return
    }
    const result = await query(sqlString)

    res.status(200).json({
      code: 10000,
      msg: '',
      runtime: 0.18198108673095703,
      data: result,
    })
  } catch (err) {
    if (err.sql) {
      err.sql = err.sql.slice(0, 200)
    }
    console.error('Error: ', err)
    res.status(200).json({
      code: 10002,
      msg: JSON.stringify(err),
      runtime: 0.18198108673095703,
      data: {},
    })
  }
}
