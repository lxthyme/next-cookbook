import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_光明奶卡 } from '@dj/v2.list'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const buttonFlagEnum = {
    1: '立即领取',
    2: '已领取',
    3: '已领完',
    4: '达到个人领券上限',
  }
  /** 领取状态:
   *      1:立即领取;
   *      2:再领一张;
   *      3:已领完(本人已领);
   *      4:已领完(本人未领)
   *
   * buttonFlag:
   *      1: 立即领取
   *      2: 已领取
   *      3: 已领完
   *      4: 达到个人领券上限
  */

  const { obj, ...data_others } = mockData_光明奶卡
  const { list, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: list.map((t, idx) => {
        // t.receiveFlag = '3'
        // t.receiveFlag = '4'
        // t.receiveFlag = `${idx % 3}`
        t.alreadyPercentNum = `${idx * 10 % 100}`
        if(idx === 0) {
          t.plusFlag = '1'
          t.mpShopName = "【仅配送】到家抵用券8元【仅配送】到家抵用券8元"
          t.couponTypeId = '17'
          t.signinAcquire = '0'
          t.offsetAmount = '999'
          // t.receiveFlag = '3'
          t.isTop = '1'
          // t.noticeDesc1 = '[1]到家抵用券8元【仅配送】到家抵用券8元'
          // t.noticeDesc2 = '[2]到家抵用券8元【仅配送】到家抵用券8元'
        } else {
          // t.receiveFlag = '1'
        }

        return t
      })
    }
  }
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {
  "success": true,
  "resCode": "00100000",
  "obj": {
    "pages": 1,
    "count": 4,
    "start": 1,
    "pageSize": 12,
    "end": 12,
    "currentPage": 1,
    "list": [{
      "couponCode": null,
      "couponRuleId": null,
      "contentTextPc": null,
      "erCode": null,
      "cloudFlag": "0",
      "signinAcquire": "1",
      "isAcquiredCoupon": "Y",
      "userDayCouponCount": "0",
      "merchants": null,
      "waitDays": null,
      "offsetAmount": "8",
      "maxNumPerUserDay": null,
      "produceNum": null,
      "couponListUrl": null,
      "dayCouponCount": "0",
      "enableTimeFrom": "2021-11-04 00:00:00",
      "buttonFlagMsg": "已领取",
      "contentTextScreen": null,
      "siteStore": null,
      "stores": null,
      "effectDays": null,
      "couponDetailUrl": null,
      "useChannel": "1,2,22",
      "validType": "0",
      "maxNumDay": "99",
      "enableTimeTo": "2022-11-04 23:59:59",
      "issueNum": "0",
      "showOrder": "1",
      "acquireType": "3",
      "maxNum": null,
      "birthdayFlag": null,
      "couponPicUrl": null,
      "openTimeFrom": "2021-11-04 00:00:00",
      "couponTypeId": "20",
      "pointsValue": "0",
      "notSentCouponCount": null,
      "contentTextApp": null,
      "jumpValue": null,
      "jumpType": "13",
      "couponChannelType": null,
      "couponName": "【复制298000694】联华8折新人券",
      "couponType": "折扣券",
      "openTimeTo": "2022-11-04 23:59:59",
      "maxNumPerUser": null,
      "couponDesc": "联华8折新人券联华8折新人券联华8折新人券",
      "canAcquireCoupon": "Y",
      "couponTemplateId": "298045550",
      "suitShopCount": null,
      "couponShortDesc": "联华8折新人券",
      "acquireFlag": "0",
      "userCouponCount": "0",
      "mpShopName": null,
      "couponScope": "0",
      "nextGenerateTime": null,
      "currentGenerateTime": null,
      "buttonFlag": "2",
      "receiveFlag": "2",
      "alreadyPercentNum": "0",
      "noticeDesc1": null,
      "noticeDesc2": null,
      "conditionAmount": null,
      "conditionFlag": "0",
      "plusFlag": "0",
      "plusWeightFlag": "0"
    }, {
      "couponCode": null,
      "couponRuleId": null,
      "contentTextPc": null,
      "erCode": null,
      "cloudFlag": "0",
      "signinAcquire": "1",
      "isAcquiredCoupon": "Y",
      "userDayCouponCount": "0",
      "merchants": null,
      "waitDays": null,
      "offsetAmount": "15",
      "maxNumPerUserDay": null,
      "produceNum": null,
      "couponListUrl": null,
      "dayCouponCount": "0",
      "enableTimeFrom": "2021-11-04 00:00:00",
      "buttonFlagMsg": "已领取",
      "contentTextScreen": null,
      "siteStore": null,
      "stores": null,
      "effectDays": null,
      "couponDetailUrl": null,
      "useChannel": "1,2,22",
      "validType": "0",
      "maxNumDay": "99",
      "enableTimeTo": "2022-11-04 23:59:59",
      "issueNum": "0",
      "showOrder": "1",
      "acquireType": "3",
      "maxNum": null,
      "birthdayFlag": null,
      "couponPicUrl": null,
      "openTimeFrom": "2021-11-04 00:00:00",
      "couponTypeId": "11",
      "pointsValue": "0",
      "notSentCouponCount": null,
      "contentTextApp": null,
      "jumpValue": null,
      "jumpType": "13",
      "couponChannelType": null,
      "couponName": "快到家15元新人抵用券",
      "couponType": "抵用券",
      "openTimeTo": "2022-11-04 23:59:59",
      "maxNumPerUser": null,
      "couponDesc": "快到家15元新人抵用券快到家15元新人抵用券",
      "canAcquireCoupon": "Y",
      "couponTemplateId": "298023409",
      "suitShopCount": null,
      "couponShortDesc": "快到家15元新人抵用券",
      "acquireFlag": "0",
      "userCouponCount": "0",
      "mpShopName": null,
      "couponScope": "0",
      "nextGenerateTime": null,
      "currentGenerateTime": null,
      "buttonFlag": "2",
      "receiveFlag": "2",
      "alreadyPercentNum": "0",
      "noticeDesc1": null,
      "noticeDesc2": null,
      "conditionAmount": null,
      "conditionFlag": "0",
      "plusFlag": "0",
      "plusWeightFlag": "0"
    }, {
      "couponCode": null,
      "couponRuleId": null,
      "contentTextPc": null,
      "erCode": null,
      "cloudFlag": "0",
      "signinAcquire": "1",
      "isAcquiredCoupon": "Y",
      "userDayCouponCount": "0",
      "merchants": null,
      "waitDays": null,
      "offsetAmount": "5",
      "maxNumPerUserDay": null,
      "produceNum": null,
      "couponListUrl": null,
      "dayCouponCount": "0",
      "enableTimeFrom": "2020-11-04 00:00:00",
      "buttonFlagMsg": "已领取",
      "contentTextScreen": null,
      "siteStore": null,
      "stores": null,
      "effectDays": null,
      "couponDetailUrl": null,
      "useChannel": "1",
      "validType": "0",
      "maxNumDay": "95",
      "enableTimeTo": "2021-12-04 23:59:59",
      "issueNum": "0",
      "showOrder": "1",
      "acquireType": "3",
      "maxNum": null,
      "birthdayFlag": null,
      "couponPicUrl": null,
      "openTimeFrom": "2020-11-04 00:00:00",
      "couponTypeId": "17",
      "pointsValue": "0",
      "notSentCouponCount": null,
      "contentTextApp": null,
      "jumpValue": null,
      "jumpType": "2",
      "couponChannelType": null,
      "couponName": "【复制290721104】到家新人6元运费券",
      "couponType": "运费券",
      "openTimeTo": "2021-12-04 23:59:59",
      "maxNumPerUser": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "canAcquireCoupon": "Y",
      "couponTemplateId": "297964985",
      "suitShopCount": null,
      "couponShortDesc": "到家6元运费抵用券",
      "acquireFlag": "0",
      "userCouponCount": "0",
      "mpShopName": null,
      "couponScope": "1",
      "nextGenerateTime": null,
      "currentGenerateTime": null,
      "buttonFlag": "2",
      "receiveFlag": "2",
      "alreadyPercentNum": "0",
      "noticeDesc1": null,
      "noticeDesc2": null,
      "conditionAmount": null,
      "conditionFlag": "0",
      "plusFlag": "0",
      "plusWeightFlag": "0"
    }, {
      "couponCode": null,
      "couponRuleId": null,
      "contentTextPc": null,
      "erCode": null,
      "cloudFlag": "0",
      "signinAcquire": "1",
      "isAcquiredCoupon": "Y",
      "userDayCouponCount": "0",
      "merchants": null,
      "waitDays": null,
      "offsetAmount": "6",
      "maxNumPerUserDay": null,
      "produceNum": null,
      "couponListUrl": null,
      "dayCouponCount": "1000",
      "enableTimeFrom": "2020-11-04 00:00:00",
      "buttonFlagMsg": "已领完",
      "contentTextScreen": null,
      "siteStore": null,
      "stores": null,
      "effectDays": null,
      "couponDetailUrl": null,
      "useChannel": "1",
      "validType": "0",
      "maxNumDay": "1000",
      "enableTimeTo": "2021-12-04 23:59:59",
      "issueNum": "0",
      "showOrder": "1",
      "acquireType": "3",
      "maxNum": null,
      "birthdayFlag": null,
      "couponPicUrl": null,
      "openTimeFrom": "2020-11-04 00:00:00",
      "couponTypeId": "17",
      "pointsValue": "0",
      "notSentCouponCount": null,
      "contentTextApp": null,
      "jumpValue": null,
      "jumpType": "2",
      "couponChannelType": null,
      "couponName": "到家新人6元运费券",
      "couponType": "运费券",
      "openTimeTo": "2021-12-04 23:59:59",
      "maxNumPerUser": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "canAcquireCoupon": "N",
      "couponTemplateId": "290721104",
      "suitShopCount": null,
      "couponShortDesc": "到家6元运费抵用券",
      "acquireFlag": "1",
      "userCouponCount": "0",
      "mpShopName": null,
      "couponScope": "1",
      "nextGenerateTime": null,
      "currentGenerateTime": null,
      "buttonFlag": "3",
      "receiveFlag": "3",
      "alreadyPercentNum": "100",
      "noticeDesc1": null,
      "noticeDesc2": null,
      "conditionAmount": "30",
      "conditionFlag": "2",
      "plusFlag": "0",
      "plusWeightFlag": "0"
    }]
  }
}
