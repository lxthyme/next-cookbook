import type { NextApiRequest, NextApiResponse } from 'next'
import {
  // mockData_限购,
  mockData
   as mockData
} from '@dj/product.v2.info'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
  const { supplier, pictures, product, ...obj_others } = obj
  // const { brand, mdmCategory, ...product_others } = product
  const data = {
    ...data_others,
    // success: false,
    // msg: '233',
    obj: {
      supplier,
      pictures,
      product,
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

    },
  }
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
