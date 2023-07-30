import { mock_coupon_detail } from '@dj/coupon.v2.list'
import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  data.obj.stores = mock_coupon_detail.stores

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
  "obj": {
    "businessUnitId": null,
    "shopId": null,
    "acquireTime": "2023-07-26 19:53:29",
    "sendType": 25,
    "id": 2204252527,
    "couponTemplateId": 376824101,
    "couponCode": "112939986756987",
    "couponName": "到家仅线下券+固定期限",
    "effectiveTime": "2023-07-26 00:00:00",
    "expireTime": "2024-07-26 23:59:59",
    "couponDesc": "1) 优惠券使用时间：券领取时间为2023年7月28日-2023年7月30日，券使用时间为当天有效。\r\n2) 优惠券使用范围：顾客凭券可至上海地区吉买盛大卖场直营门店使用，购买百联到家线上指定商品，单次支付满78元立减5元。 \r\n3) 优惠券使用商品：可用商品详见i百联APP或百联到家小程序中“我的优惠券”-->适用商品。\r\n4) 优惠券领用规则：每个用户ID每天可领取2张，活动期间一共可领取6张; 券每天发放数量有限，先抢先得，抢完即止。 5) 优惠券使用规则：该券支持配送/自提订单；每笔订单限使用一张抵用券，此券不可用于特价商品，不兑现、不找零，不可与其他优惠券同时使用。",
    "couponShortDesc": "到家仅线下券",
    "couponPicUrl": null,
    "couponListUrl": null,
    "couponDetailUrl": null,
    "erCode": "112939986756987",
    "erGetCoupon": "http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=&shopId=&couponId=376824101&QRid=0.8781984620881186",
    "couponStatus": "已领取",
    "couponStatusId": "1",
    "offsetAmount": "8.8",
    "couponType": "抵用券",
    "willBeExpire": "正常",
    "willBeExpireId": "0",
    "contentTextApp": null,
    "contentTextPc": null,
    "contentTextScreen": null,
    "acquireChannel": "10",
    "memberId": null,
    "couponTypeId": "11",
    "couponChannelType": "0",
    "signinAcquire": null,
    "jumpType": "24",
    "jumpValue": null,
    "useChannel": "1,2,22,64",
    "cloudFlag": "0",
    "couponScope": "2",
    "merchants": null,
    "stores": [],
    "plusFlag": "0",
    "plusWeightFlag": null
  }
}
