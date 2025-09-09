import type { NextApiRequest, NextApiResponse } from 'next'
import prismaNote from '@/plugin/prisma'
// import { PrismaClient } from "@prisma/client";

const API = async (req: NextApiRequest, res: NextApiResponse) => {

  // const { table, list } = JSON.parse(req.body)
  const { op } = req.body
  // const body = JSON.parse(req.body)
  console.log(`-->body[${op}]: `)
  try {
    if (op == 'insert') {
      console.log(`-->param: `, req.body.list.length)
      const result = await prismaNote.$transaction(
        req.body.list.map(t => prismaNote.note_game.create({ data: t }))
      )
      // const result = await prismaNote.$transaction([
        // prismaNote.note_game.create({ data: req.body.list[0] }),
        // prismaNote.note_game.create({ data: req.body.list[1] }),
        // prismaNote.note_game.create({ data: req.body.list[2] }),
      // ])
      // const result = await prismaNote.note_game.createMany({
      //   data: req.body.list,
      // })
      return res.status(200).json({
        code: 10000,
        result,
      })
    } else {
      console.log(`-->param: `, param)
      const list = await prismaNote['note_game'].findMany({
        // where: {
        //   danjicishi: {
        //     gt: '15'
        //   }
        // },
        // orderBy: [
        //   { danjicishi: 'desc' },
        //   { blueStar: 'desc' },
        //   { O: 'desc' },
        // ],
      })
      console.log(`👉list: ${list}`)
      return res.status(200).json({
        code: 10000,
        list,
      })
    }
  } catch (error) {
    console.log(`❌query fail: ${error}`)
    return res.status(200).json({
      code: 10003,
      // seed: seedList,
      reason: error,
    })
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json({})
    })
}

export default API
