import type { NextApiRequest, NextApiResponse } from 'next'
import {
  // mockData_限购,
  mockData,
  mockData_ydj,
  mockData_lh,
  mockData_lh_dgg,
  // mockData_all
  //  as mockData
  serviceList
} from '@dj/product.v3.info'
import { mockError } from '@dj/hack.errorResponse'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { storeType } = req.body
  console.log('-->[body]storeType: ', storeType);

  const { obj, ...data_others } = mockData
  const { supplier, pictures, product, labels, promotion, ...obj_others } = obj
  // const { brand, mdmCategory, ...product_others } = product
  let data = {
    ...data_others,
    // success: false,
    // msg: '233',
    obj: {
      supplier,
      pictures,
      product,
      // labels: labels?.map((t, idx) => {
      //   // if(idx === 0) {
      //   //   console.log(`-->[${idx}]: ${t}`)
      //   // t.bigPopDes = '龙年大吉'
      //   // t.smallPopDes = '加购同享N折'
      //   // }
      //   return t
      // }),
      // labels: [
      //   {
      //   "labelType": 1,
      //   "name": "新品",
      //   "pic": "https://Img.iblimg.com/fast2home-2/images/kdj/index/2022/10/40135307.png"
      // },
      // {
      //   "labelType": 2,
      //   "name": "自定义",
      //   "pic": "https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/daojia_osp_public/offlinegoods/desc/DESC_/20231121094547664/源头直采.png"
      // }],
      ...obj_others,
      // goodsSalesName: Array(8).fill(obj.goodsSalesName).join(''),
      goodsSalesName: '酸奶 隆力奇花露水 195ml隆力奇花露水 195mll',
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
      /// 限时购倒计时
      limitBuyPersonSum: 1,
      endTime: (new Date().getTime() + (0 * 3600 + 10 * 60 + 10) * 1000),
      promotion: {
        ...promotion,
        xgActNo: '233',
        actStock: {
          activeStockSum: 0,
          stockPercent: 66,
        }
      }
    },
  }
  const result = updateData(DJPlusStatus
    /// ①无N倍积分+开通
  // .NoPlus_NoPoints
  /// ②有N倍积分+开通
  .NoPlus_HasPoints
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
  // .hsPoints_XF
  , data.obj.memDiscount, data.obj.discount)
  data.obj.memDiscount = result.memDiscount
  data.obj.discount = result.discount

  if(storeType.startsWith('6')) {
    // 药到家商品
    data = mockData_ydj
  } else {
    // 联华到家商品
    data = mockData_lh
    // data = mockData_lh_dgg
  }
  // data = mockData4
  // const d = data.obj.memDiscount
  // d.isPlus = true
  // d.plusPointRate = ''
  // d.isAllowContinue = true
  // d.isAllowContinue = true
  // d.plusTime = 2
  // d.plusTimeUnit = '年'
  // d.totalRights = 23
  // d.openPlusRights=1

  // d.membershipModel = 1
  // d.membershipModel = 2
  // d.membershipModel = 3

  // 领券加车
  data.obj.discount.checkCalcUsedCoupon = 1
  data.obj.discount.calcUsedCouponTempId = '2'

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
      // mockError(res, 400, 1)
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
  let plusType = 'discount'
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
    // plusType = ''
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
      plusType,
      discountPreAmount: discount.isPlus === 1 ? '234.3' : discount.discountPreAmount,
    }, memDiscount: {
      ...memDiscount,
      plusTime: 33,
      plusTimeUnit: '天',
      totalRights: '233.3',
      openPlusRights: '2333.3',
    }}
}

const mockData2 = {"success":true,"resCode":"00100000","timestamp":1757574569990,"obj":{"storeCode":"111456","storeType":"6010","merchantId":"60101114561","comSid":"6000","goodsSid":4443357,"goodsSalesName":"北京同仁堂 麦冬一等 200克","goodsType":1,"medicineType":"2","djSendType":3,"supplier":{"id":86485,"name":"北京同仁堂健康药业(福州)"},"pictures":[{"type":1,"sort":0,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_710823722.jpg","specCode":"10012"},{"type":0,"sort":1,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_32203810.jpg","specCode":"10012"},{"type":0,"sort":2,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_1199907435.jpg","specCode":"10012"},{"type":0,"sort":3,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_1990418393.jpg","specCode":"10012"},{"type":0,"sort":4,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_1153423841.jpg","specCode":"10012"},{"type":0,"sort":5,"url":"https://dj-osp-pub01.iblimg.com/fast2homemethod-13/offlinegoods/goods/SP_633752226.jpg","specCode":"10012"}],"product":{"brand":{"id":208951,"name":"同仁堂","brandLogoPicture":"http://img14.iblimg.com/goods-135/images/brand/1441285406.jpg"},"mdmCategory":{"sid":63625,"mdmCategorySid":"60001016020110","mdmCategoryName":"麦冬"}},"weight":"250.000","if7Return":"0","backChange":0,"kdjStan":"一等 200克","basePrice":"129","salePrice":"109.65","saleStockStatus":"1","limitBuyPersonSum":"0","personLimit":"0","marketOn":1,"priceType":"1002","showPriceType":"到手","endTime":4102415999000,"tdType":"0","videoSupport":"0","disCategorySid":103979,"taxRate":"0.09","ecpFlag":0,"minBuyQuan":0,"minBuySpec":"件","medicareOnlineFlag":"0","productSid":2361666,"services":[{"title":"不支持7天无理由退换货","icon":"https://Img.iblimg.com/resh5-1/h5resource/kdj/img/not@2x.png","detail":{"dt":"七天无理由退货规定","dd":["下列商品不适用i百联七天无理由退货规定：","（一） 消费者定作的商品；","（二） 鲜活易腐的商品；","（三） 在线下载或者消费者拆封的音像制品、计算机软件等数字化商品；","（四） 交付的报纸、期刊；","（五） 拆封后易影响人身安全或者生命健康的商品，或者拆封后易导致商品品质发生改变的商品；","（六） 一经激活或者试用后价值贬损较大的商品；","（七） 销售时已明示的临近保质期的商品、有瑕疵的商品。"]},"sort":1}],"discount":{"discountAmount":"109.65","plusDiscountAmount":"0","discountPreAmount":"0","hasPlusActivity":0,"sharePreAmount":"0","shareOrigAmount":"109.65","goodsId":"4443357","discountList":[{"discountAmount":"19.35","ruletype":"2","buyMember":"0","ruleName":"折扣","sLabel":"85折","mLabel":"85折"}],"checkCalcUsedCoupon":0},"plusMember":0,"plusTipSwitch":1,"memDiscount":{"isPlus":0},"promotion":{"promLabels":[{"rules":[{"desc":"每第1件8.50折","id":"18563"}],"memo":"85折","labelDesc":"85折","goodsDetSid":"4443357","popDes":"折扣","ruleid":"179697","ruletype":"2","ruleName":"折扣","activityId":"0","buyMember":"0","sLabel":"85折","mLabel":"85折","actDesc":"药到家85折","iconLabel":"折","djSort":4},{"memo":"药到家换购","labelDesc":"药到家换购","goodsDetSid":"4443357","popDes":"药到家换购","ruleid":"304807","conditionType":"1","ruletype":"16","ruleName":"换购","activityId":"0","sLabel":"药到家换购","mLabel":"药到家换购","djSort":8}]}}}
