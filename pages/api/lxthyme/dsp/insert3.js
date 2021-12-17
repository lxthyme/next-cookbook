import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const { table, list } = JSON.parse(req.body)
  const seedList = list.map(t => t.seed)
  let errorSeed = ''
  try {
    // console.log(`💊table: ${table}, seedList: ${seedList}`)
    // prisma.key15.create({
    //   data: {}
    // })
    // const result = await prisma.key15.createMany({
    const result = []
    for (const item of list) {
      errorSeed = item.seed
      // console.log('item: ', item)
      const tmp = await prisma[table].create({
        data: item
      })
      result.push(tmp)
    }
    console.log(`👉${table}->\${seedList} insert success!`)
    res.status(200).json({
      code: 10000,
      seedList,
      result,
    })
  } catch (error) {
    console.log(`❌${table}->\${seedList} insert failure!___: `, error)
    res.status(200).json({
      code: 10003,
      // seed: seedList,
      reason: error,
      errorSeed
    })
  }
}
