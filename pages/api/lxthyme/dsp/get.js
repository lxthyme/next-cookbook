import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  let { pageSize = 20, page = 1, table = 'seed4kw' } = req.query
  pageSize = parseFloat(pageSize)
  page = parseFloat(page)
  try {

    // const tab = prisma.detail20
    // console.log('Table: ', tab, table)
    // if(!tab) {
    //   throw Error('table dont exist!')
    // }
    console.log(`-->「${table}」(${page} - 1 ) * ${pageSize} = ${(page - 1) * pageSize}`)
    const total = await prisma[table].count()
    console.log(`-->total: ${total}`)
    const list = await prisma[table].findMany({
      skip: Math.max(0, (page - 1) * pageSize),
      take: pageSize,
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
    // const first = await prisma.seed0kw.findMany({
    //   orderBy: {
    //     danjicishi: 'desc',
    //     blueStar: 'desc',
    //     O: 'desc',
    //   }
    // })
    // console.log('-->list: ', list)
    res.json({
      code: 10000,
      total,
      page,
      pageSize,
      list: list,
      // list: [first]
    })
  } catch (error) {
    console.log('-->Error: ', error)
    res.json({
      code: 10002,
      page,
      pageSize,
      reason: error
      // list: [first]
    })
  }

}
