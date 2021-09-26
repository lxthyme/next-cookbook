import prisma from '../../../../plugin/prisma'
// import { PrismaClient } from "@prisma/client";

const fmtStar2 = (id, item) => {
  return {
    seed: id,
    MKGF_PuTongXingXi: item.MKGF普通星系 ?? 'undefined',
    others: item.others.filter(t => t.length > 0).join(','),
    type: Object.keys(item.type).filter(key => item.type[key] >= 0).map(key => `${key}:${item.type[key]}`).flat().join(','),
    GuangDu: item.光度,
    ChuShiXingXi: item.初始星系 ?? '',
    ChuShiJuLi: item.初始距离,
    WeiXing: item.卫星,
    ZuiDaZhongQing: item.最大重氢,
    QiTaiJuQing: item.气态巨星 ?? 0,
    Shui: item.水,
    ChaoXiSuoDing: item.潮汐,
    LiuSuan: item.硫酸,
    DiYiXingXing: item.第一行星,
    DiErXingXing: item.第二行星,
  }
}

export default async (req, res) => {
  let fmt_seed = req.body
  fmt_seed = JSON.parse(fmt_seed)
  try {
    /// 1. format_seed
    // const result_format_seed = prisma.format_seed.create({
    //   data: {
    //     seed: fmt_seed.seed,
    //     O: fmt_seed.O,
    //     blueStar: fmt_seed.blueStar,
    //     danjicishi: fmt_seed.danjicishi,
    //     xingqu_count: fmt_seed.xingqu_count,
    //     star1: fmt_seed.star1,
    //     star2: fmt_seed.star2,
    //     star3: fmt_seed.star3,
    //     star4: fmt_seed.star4,
    //     star5: fmt_seed.star5,
    //     star6: fmt_seed.star6,
    //     star7: fmt_seed.star7,
    //     star8: fmt_seed.star8,
    //     star9: fmt_seed.star9,
    //     star10: fmt_seed.star10,
    //     star11: fmt_seed.star11,
    //   }
    // })
    /// 1. format_star1
    // const result_format_star1 = await prisma.format_star1.create({
    //   data: {
    //     seed: fmt_seed.seed,
    //     star1: fmt_seed.fmt_star1.star1.join(','),
    //     star2: fmt_seed.fmt_star1.star2.join(','),
    //     star3: fmt_seed.fmt_star1.star3.join(','),
    //     star4: fmt_seed.fmt_star1.star4.join(','),
    //     star5: fmt_seed.fmt_star1.star5.join(','),
    //     star6: fmt_seed.fmt_star1.star6.join(','),
    //     star7: fmt_seed.fmt_star1.star7.join(','),
    //     star8: fmt_seed.fmt_star1.star8.join(','),
    //     star9: fmt_seed.fmt_star1.star9.join(','),
    //     star10: fmt_seed.fmt_star1.star10.join(','),
    //     star11: fmt_seed.fmt_star1.star11.join(','),
    //   }
    // })

    /// 2. format_star2
    // const result_fmtStar2_content1 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star1`, fmt_seed.fmt_star2.star1)
    // })
    // const result_fmtStar2_content2 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star2`, fmt_seed.fmt_star2.star2)
    // })
    // const result_fmtStar2_content3 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star3`, fmt_seed.fmt_star2.star3)
    // })
    // const result_fmtStar2_content4 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star4`, fmt_seed.fmt_star2.star4)
    // })
    // const result_fmtStar2_content5 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star5`, fmt_seed.fmt_star2.star5)
    // })
    // const result_fmtStar2_content6 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star6`, fmt_seed.fmt_star2.star6)
    // })
    // const result_fmtStar2_content7 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star7`, fmt_seed.fmt_star2.star7)
    // })
    // const result_fmtStar2_content8 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star8`, fmt_seed.fmt_star2.star8)
    // })
    // const result_fmtStar2_content9 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star9`, fmt_seed.fmt_star2.star9)
    // })
    // const result_fmtStar2_content10 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star10`, fmt_seed.fmt_star2.star10)
    // })
    // const result_fmtStar2_content11 = await prisma.format_star2_content.create({
    //   data: fmtStar2(`${fmt_seed.seed}_star11`, fmt_seed.fmt_star2.star11)
    // })
    // const result_format_star2 = await prisma.format_star2.create({
    //   data: {
    //     seed: fmt_seed.seed,
    //     star1: `${fmt_seed.seed}_star1`,
    //     star2: `${fmt_seed.seed}_star2`,
    //     star3: `${fmt_seed.seed}_star3`,
    //     star4: `${fmt_seed.seed}_star4`,
    //     star5: `${fmt_seed.seed}_star5`,
    //     star6: `${fmt_seed.seed}_star6`,
    //     star7: `${fmt_seed.seed}_star7`,
    //     star8: `${fmt_seed.seed}_star8`,
    //     star9: `${fmt_seed.seed}_star9`,
    //     star10: `${fmt_seed.seed}_star10`,
    //     star11: `${fmt_seed.seed}_star11`,
    //   }
    // })

    /// 3. Summary

    res.status(200).json({
      code: 10000,
      // result_format_seed,
      // result_format_star1,
      result_fmtStar2_content1,
      result_fmtStar2_content2,
      result_fmtStar2_content3,
      result_fmtStar2_content4,
      result_fmtStar2_content5,
      result_fmtStar2_content6,
      result_fmtStar2_content7,
      result_fmtStar2_content8,
      result_fmtStar2_content9,
      result_fmtStar2_content10,
      result_fmtStar2_content11,
      result_format_star2,
    })
  } catch (error) {
    console.log('--->error: ', error)
    res.status(200).json({
      code: 10003,
      seed: fmt_seed.seed,
      reason: error,
    })
  }
}
