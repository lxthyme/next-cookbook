import type { NextApiRequest, NextApiResponse } from 'next'
import {
  // mockData_限购,
  mockData,
  // mockData_all
  //  as mockData
  serviceList
} from '@dj/product.v3.info'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
  const { supplier, pictures, product, labels, promotion, ...obj_others } = obj
  // const { brand, mdmCategory, ...product_others } = product
  const data = {
    ...data_others,
    // success: false,
    // msg: '233',
    obj: {
      supplier,
      pictures,
      product,
      labels: labels?.map((t, idx) => {
        // if(idx === 0) {
        //   console.log(`-->[${idx}]: ${t}`)
        // t.bigPopDes = '龙年大吉'
        // t.smallPopDes = '加购同享N折'
        // }
        return t
      }),
      ...obj_others,
      // goodsSalesName: Array(8).fill(obj.goodsSalesName).join(''),
      /// 副标题
      // goodsSubtitle: Array(6).fill(obj.goodsSalesName).join(''),
      // goodsType: '1',
      /// 29: 非处方药
      // goodsType: '29',
      /// 30: 处方药
      // goodsType: '30',
      /// 1: 防疫药品
      // medicineType: '1',
      /// 2: 非防疫药品
      // medicineType: '2',
      /// 3: 保健食品
      // medicineType: '3',
      /// 4: 医疗器械
      // medicineType: '4',
      /// 5: 化妆品
      // medicineType: '5',
      // backChange: '1',
      /// 自提
      // djSendType: '1',
      // djSendType: '2',
      /// ecpflag
      // ecpFlag: '1',
      // marketOn: '0',
      // saleStockStatus: '0',
      /// 参考价
      // basePrice: "22.22",
      // basePrice: "55.55",
      // saleSum: '233',
      /// 销售价
      // salePrice: "33.33",
      /// Plus会员价
      // plusPrice: "44.44",
      // priceType: '12',
      waterMark: '新品120000005460001\t新品120000005460001\t新品120000005460001\t新品120000005460001\t新品120000005460001',
      services: serviceList,
      showPriceType: "到手2",
      /// 限时购
      endTime: (new Date().getTime() + (2 * 3600 + 10 * 60 + 15) * 1000),
      promotion: {
        ...promotion,
        xgActNo: '233',
        actStock: {
          activeStockSum: 99,
          stockPercent: 10,
        }
      }
    },
  }
  const result = updateData(DJPlusStatus
    /// ①无N倍积分+开通
  // .NoPlus_NoPoints
  /// ②有N倍积分+开通
  // .NoPlus_HasPoints
  /// ②有N倍积分+开通(无plus活动)
  // .NoPlus_HasPoints_NoPlusActivity
  /// ② 无N倍积分
  // .noPoints
  /// ① 有N倍积分
  // .hsPoints
  /// ④ 无N倍积分+提示升级
  // .noPoints_SJ
  /// ③ 有N倍积分+提示升级
  // .hsPoints_SJ
  /// ⑥ 无N倍积分+提示续费
  // .noPoints_XF
  /// ⑤ 有N倍积分+提示续费
  .hsPoints_XF
  , data.obj.memDiscount, data.obj.discount)
  data.obj.memDiscount = result.memDiscount
  data.obj.discount = result.discount

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

enum DJPlusStatus {
  /// ①无N倍积分+开通
  NoPlus_NoPoints,
  /// ②有N倍积分+开通
  NoPlus_HasPoints,
  /// ②有N倍积分+开通(无plus活动)
  NoPlus_HasPoints_NoPlusActivity,
  /// ② 无N倍积分
  noPoints,
  /// ① 有N倍积分
  hsPoints,
  /// ④ 无N倍积分+提示升级
  noPoints_SJ,
  /// ③ 有N倍积分+提示升级
  hsPoints_SJ,
  /// ⑥ 无N倍积分+提示续费
  noPoints_XF,
  /// ⑤ 有N倍积分+提示续费
  hsPoints_XF,
}
const updateData = (status: DJPlusStatus, memDiscount: [string: any], discount: [string: any]) => {
  if(status === DJPlusStatus.NoPlus_NoPoints) {
    /// ①无N倍积分+开通
    // discount && discount.discountPreAmount.floatValue > 0
    // memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: 0,
    }
    discount = {
      ...discount,
      discountPreAmount: "21",
    }
    } else if(status === DJPlusStatus.NoPlus_HasPoints) {
    /// ②有N倍积分+开通
    // discount && discount.discountPreAmount.floatValue > 0
    // memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: '11',
    }
    discount = {
      ...discount,
      discountPreAmount: '22',
    }
    } else if(status === DJPlusStatus.NoPlus_HasPoints_NoPlusActivity) {
    /// ②有N倍积分+开通(无plus活动)
    // !(discount && discount.discountPreAmount.floatValue > 0)
    // memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: '12',
    }
    discount = {
      ...discount,
      discountPreAmount: 0,
    }
    } else if(status === DJPlusStatus.noPoints) {
    /// ② 无N倍积分
    // memDiscount.isAllowContinue == 0 && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 0,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints) {
    /// ① 有N倍积分
    // memDiscount.isAllowContinue == 0 && memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 0,
      plusPointRate: '13',
    }
    } else if(status === DJPlusStatus.noPoints_SJ) {
    /// ④ 无N倍积分+提示升级
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 2 || memDiscount.membershipModel == 3) && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 2,
      // membershipModel: 3,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints_SJ) {
        /// ③ 有N倍积分+提示升级
        // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 2 || memDiscount.membershipModel == 3) && memDiscount.plusPointRate.integerValue > 0
        memDiscount = {
          ...memDiscount,
          isPlus: 1,
          isAllowContinue: 1,
          membershipModel: 2,
          // membershipModel: 3,
          plusPointRate: '14',
        }
    } else if(status === DJPlusStatus.noPoints_XF) {
    /// ⑥ 无N倍积分+提示续费
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 1) && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 1,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints_XF) {
    /// ⑤ 有N倍积分+提示续费
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 1) && memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 1,
      plusPointRate: '15',
    }
    }
    return {discount: {
      ...discount,
      plusType: 'discount',
      discountPreAmount: discount.isPlus === 1 ? '234.3' : discount.discountPreAmount,
    }, memDiscount: {
      ...memDiscount,
      plusTime: 33,
      plusTimeUnit: '天',
      totalRights: '233.3',
      openPlusRights: '2333.3',
    }}
}
