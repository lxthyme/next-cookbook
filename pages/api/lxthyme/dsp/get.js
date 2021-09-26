import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  let { pageSize = 20, page = 1 } = req.query
  pageSize = parseFloat(pageSize)
  page = parseFloat(page)
  const total = await prisma.seed10000x1000.count()
  const seed10000x1000s = await prisma.seed10000x1000.findMany({
    skip: Math.max(0, (page - 1) * pageSize),
    take: pageSize,
  })
  // const first = await prisma.seed10000x1000.findFirst()
  res.json({
    total,
    page,
    pageSize,
    list: seed10000x1000s,
    // list: [first]
  })
}
