import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_ex } = mockData
  const data = {
    ...obj_ex,
    obj: [
      ...obj,
      {
        ...obj[1],
        receiveFlag: '4',
      }
    ].map(t => {
      if (t.couponTemplateId === '392531261') {
        t.receiveFlag = '4'
      } else if (t.couponTemplateId === '354138030') {
        t.receiveFlag = '2'
      }
      return t
    })
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockData = {
  "success": true,
  "resCode": "00100000",
  "obj": [{
    "couponCode": null,
    "couponRuleId": null,
    "contentTextPc": null,
    "erCode": "http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2020&shopId=007780&couponId=354138030&QRid=0.03850136735513454",
    "cloudFlag": "0",
    "signinAcquire": "1",
    "isAcquiredCoupon": "N",
    "userDayCouponCount": "0",
    "merchants": null,
    "waitDays": null,
    "offsetAmount": "6",
    "maxNumPerUserDay": "100",
    "produceNum": "470",
    "couponListUrl": null,
    "dayCouponCount": "14",
    "enableTimeFrom": "2022-11-17 00:00:00",
    "buttonFlagMsg": "已领完",
    "contentTextScreen": null,
    "siteStore": null,
    "stores": null,
    "effectDays": null,
    "couponDetailUrl": null,
    "useChannel": "1,2,22",
    "validType": "0",
    "maxNumDay": "14",
    "enableTimeTo": "2023-11-17 23:59:59",
    "issueNum": "470",
    "showOrder": null,
    "acquireType": "3",
    "maxNum": "1000",
    "birthdayFlag": "0",
    "couponPicUrl": null,
    "openTimeFrom": "2022-11-17 00:00:00",
    "couponTypeId": "17",
    "pointsValue": "0",
    "notSentCouponCount": null,
    "contentTextApp": null,
    "jumpValue": null,
    "jumpType": "13",
    "couponChannelType": null,
    "couponName": "【3】到家专享6元运费券",
    "couponType": "运费券",
    "openTimeTo": "2023-11-17 23:59:59",
    "maxNumPerUser": "100",
    "couponDesc": "到家专享6元运费券到家专享6元运费券到家专享6元运费券到家专享6元运费券",
    "canAcquireCoupon": "N",
    "couponTemplateId": "354138030",
    "suitShopCount": null,
    "couponShortDesc": "到家专享6元运费券",
    "acquireFlag": "1",
    "userCouponCount": "0",
    "mpShopName": null,
    "couponScope": "1",
    "nextGenerateTime": null,
    "currentGenerateTime": null,
    "buttonFlag": "3",
    "receiveFlag": "2",
    "alreadyPercentNum": "100",
    "noticeDesc1": null,
    "noticeDesc2": null,
    "conditionAmount": null,
    "conditionFlag": null,
    "plusFlag": "0",
    "shopAndBuMatch": null,
    "plusWeightFlag": "0",
    "activityId": null,
    "bl_uuid": null,
    "useStoreList": null,
    "orderNumber": null
  }, {
    "couponCode": null,
    "couponRuleId": null,
    "contentTextPc": null,
    "erCode": "http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2010&shopId=0&couponId=392531261&QRid=0.23979234646391656",
    "cloudFlag": "0",
    "signinAcquire": "1",
    "isAcquiredCoupon": "N",
    "userDayCouponCount": "0",
    "merchants": null,
    "waitDays": "0",
    "offsetAmount": "6",
    "maxNumPerUserDay": "20",
    "produceNum": "20",
    "couponListUrl": null,
    "dayCouponCount": "100",
    "enableTimeFrom": null,
    "buttonFlagMsg": "已领完",
    "contentTextScreen": null,
    "siteStore": null,
    "stores": null,
    "effectDays": "5",
    "couponDetailUrl": null,
    "useChannel": "1,2,60,22,64",
    "validType": "1",
    "maxNumDay": "100",
    "enableTimeTo": null,
    "issueNum": "20",
    "showOrder": null,
    "acquireType": "3",
    "maxNum": "100",
    "birthdayFlag": "0",
    "couponPicUrl": "https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/osp-camp/20230731/75eac984afb847b19909f17749481a13.jpg",
    "openTimeFrom": "2023-06-25 00:00:00",
    "couponTypeId": "17",
    "pointsValue": "0",
    "notSentCouponCount": null,
    "contentTextApp": null,
    "jumpValue": null,
    "jumpType": "13",
    "couponChannelType": null,
    "couponName": "【复制379936549】到家运费券",
    "couponType": "运费券",
    "openTimeTo": "2024-07-25 23:59:59",
    "maxNumPerUser": "100",
    "couponDesc": "全场满99减8元券到家B8.3\r\n1、仅限到家线上下单使用； \r\n2、券有效期：仅限领取当日有效；\r\n3、适用门店：上海联华、华联指定门店购买百联到家线上指定商品； \r\n4、适用商品：详见i百联APP或百联到家小程序中“我的优惠券”-->适用商品； \r\n5、每笔订单限使用一张抵用券，此券不可用于特价商品，不兑现、不找零，不可与其他优惠券同时使用。",
    "canAcquireCoupon": "N",
    "couponTemplateId": "392531261",
    "suitShopCount": null,
    "couponShortDesc": "到家809回归运费券",
    "acquireFlag": "1",
    "userCouponCount": "0",
    "mpShopName": null,
    "couponScope": "1",
    "nextGenerateTime": null,
    "currentGenerateTime": null,
    "buttonFlag": "3",
    "receiveFlag": "2",
    "alreadyPercentNum": "100",
    "noticeDesc1": null,
    "noticeDesc2": null,
    "conditionAmount": null,
    "conditionFlag": null,
    "plusFlag": "0",
    "shopAndBuMatch": null,
    "plusWeightFlag": "0",
    "activityId": null,
    "bl_uuid": null,
    "useStoreList": null,
    "orderNumber": null
  }]
}
