import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  try {
    let { pageSize = 20, page = 1 } = req.query
    pageSize = parseFloat(pageSize)
    page = parseFloat(page)
    const total = await prisma.seed4kw.count()
    const list = await prisma.seed4kw.findMany({
      skip: Math.max(0, (page - 1) * pageSize),
      take: pageSize,
    })
    // const first = await prisma.seed10000x1000.findFirst()
    res.json({
      code: 10000,
      total,
      page,
      pageSize,
      list: list,
      // list: [first]
    })
  } catch (error) {
    res.json({
      code: 10002,
      page,
      pageSize,
      reason: error
      // list: [first]
    })
  }

}
