import React, { useEffect } from 'react'
import { query } from '../../../../plugins/db'
import GitHub from '../../../../plugins/github'

export default async (req, res) => {
  const { type, from, to, repo_id, tag_id } = req.body

  try {
    let sqlString = ''
    if (type === 'user') {
      sqlString = GitHub.user.search(from, to)
    } else if (type === 'repo') {
      sqlString = GitHub.repo.search(tag_id, from, to)
    } else if (type === 'license') {
      sqlString = GitHub.license.search(from, to)
    } else if (type === 'tag') {
      sqlString = GitHub.tag.search(from, to)
    } else if (type === 'repo_tag') {
      sqlString = GitHub.repo_tag.search(repo_id)
    } else if (type === 'repo_note') {
      sqlString = GitHub.repo_note.search(repo_id)
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
      data: result.map((t) => {
        t.owner = {}
        t.license = {}
        return t
      }),
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
