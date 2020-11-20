import { connectToSQL, sequelize } from '../../../../model/mysql/common'
import User from '../../../../model/mysql/user'
import License from '../../../../model/mysql/license'
import Repo from '../../../../model/mysql/repo'
import Note from '../../../../model/mysql/note'
import Tag from '../../../../model/mysql/tag'
import vLog from '../../../../plugins/logger'
import { Op } from 'sequelize'
import RepoTag from '../../../../model/mysql/RepoTag'

export default async (req, res) => {
  let {
    repo_id,
    language,
    search_key = '',
    search_value = '',
    tag_id = '',
    from,
    pageSize,
  } = req.body
  console.log('-->[repo/list]req.body: ', req.body)
  repo_id = parseInt(repo_id)
  const tag = tag_id.trim()
  try {
    await connectToSQL()
    let repoIdFilter = {},
      tagFilter = {},
      taggedRepoIDList = []
    if (repo_id > 0) {
      console.log(`filter by 「repo_id: ${repo_id}」...`)
      repoIdFilter = {
        where: {
          id: {
            [Op.eq]: repo_id,
          },
        },
      }
    } else if (language.length > 0) {
      console.log(`filter by language: ${language}」...`)
      repoIdFilter = {
        where: {
          language:
            language === 'undefined'
              ? { [Op.is]: null }
              : { [Op.like]: `%${language}%` },
        },
      }
    } else if (search_key.length > 0 || search_value.length > 0) {
      console.log(
        `filter by 「search_key: ${search_key}」-「search_value: ${search_value}」...`,
      )
      repoIdFilter = {
        where: {
          [search_key]: {
            [Op.like]: `%${search_value}%`,
          },
        },
      }
    } else if (tag) {
      console.log(`filter by 「tag: ${tag}」...`)
      if (tag === '999') {
        const taggedList = await RepoTag.findAll({
          distinct: true,
          attributes: ['repo_id'],
        })
        taggedRepoIDList = taggedList.map((t) => t.repo_id)
        console.log('taggedRepoIDList: ', JSON.stringify(taggedRepoIDList))
        repoIdFilter = {
          where: {
            id: {
              [Op.notIn]: taggedRepoIDList,
            },
          },
        }
      } else {
        tagFilter = {
          where: {
            id: {
              [Op.eq]: tag,
            },
          },
        }
      }
    }
    const result = await Repo.findAndCountAll({
      offset: from,
      limit: pageSize,
      distinct: true,
      order: [['starred_at', 'DESC']],
      // where,
      ...repoIdFilter,
      // group: {},

      include: [
        {
          model: User,
          as: 'owner',
          // through: {
          //   as: 'ownerr'
          // }
        },
        {
          model: License,
          as: 'license',
          // through: {
          //   as: 'license'
          // }
        },
        {
          model: Note,
        },
        {
          model: Tag,
          as: 'tag',
          ...tagFilter,
        },
      ],
    })

    console.log(`result.count: `, result.count)
    res.status(200).json({
      code: 10000,
      msg: '',
      runtime: 0.18198108673095703,
      // data: ,
      data: {
        total: result.count,
        list: result.rows,
      },
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
