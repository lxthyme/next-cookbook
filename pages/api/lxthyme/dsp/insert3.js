import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const { table, list } = JSON.parse(req.body)
  const seedList = list.map(t => t.seed)
  try {
    // console.log(`💊table: ${table}, item.seed: ${item.seed}`)
    // prisma.key15.create({
    //   data: {}
    // })
    // const result = await prisma.key15.createMany({
    const result = list.map(async item => await prisma[table].create({
      data: item,
      // data: JSON.stringify(fmt_seedInfo)
    }))
    console.log(`👉${table}->${seedList} insert success!`)
    res.status(200).json({
      code: 10000,
      seedList,
      result,
    })
  } catch (error) {
    console.log(`❌${table}->${seedList} insert failure!___: `, error)
    res.status(200).json({
      code: 10003,
      seed: seedList,
      reason: error,
    })
  }
}
