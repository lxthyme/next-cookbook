// import prisma from '../../../../plugin/prisma'
import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  const prisma = new PrismaClient();
  // await prisma.post.findMany
  // await prisma.$connect()
  // const posts = await prisma.post.findMany()
  const seed10000x1000s = await prisma.seed10000x1000.findMany({
    take: 20
  })
  // const first = await prisma.seed10000x1000.findFirst()
  res.json({
    list: seed10000x1000s,
    // list: [first]
  })
}
