import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  let { pageSize = 20, page = 1, table = 'seed4kw' } = req.query
  pageSize = parseFloat(pageSize)
  page = parseFloat(page)
  try {

    const total = await prisma[table].count()
    const list = await prisma[table].findMany({
      skip: Math.max(0, (page - 1) * pageSize),
      take: pageSize,
      orderBy: [
        { danjicishi: 'desc' },
        { blueStar: 'desc' },
        { O: 'desc' },
      ]
    })
    // const first = await prisma.seed0kw.findMany({
    //   orderBy: {
    //     danjicishi: 'desc',
    //     blueStar: 'desc',
    //     O: 'desc',
    //   }
    // })
    res.json({
      code: 10000,
      total,
      page,
      pageSize,
      list: list,
      // list: [first]
    })
  } catch (error) {
    console.log('Error: ', error)
    res.json({
      code: 10002,
      page,
      pageSize,
      reason: error
      // list: [first]
    })
  }

}
