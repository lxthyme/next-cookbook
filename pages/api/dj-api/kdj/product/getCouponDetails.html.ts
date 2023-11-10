import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

	const body = req.body
	console.log('-->body: ', body)
  const { obj, ...obj_ex } = mockData
  const data = {
    ...obj_ex,
    obj: [
      ...obj,
      ...(body.couponTemplateIds ?? []).map(t => {
				const tmp = {
					...obj[0],
					couponTemplateId: t,
					receiveFlag: '2',
				}
				return tmp
			})
    ].map(t => {
      if (t.couponTemplateId === '395535543') {
        t.receiveFlag = '4'
      } else {
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
		"erCode": "http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2020&shopId=007780&couponId=386339932&QRid=0.3991943386758712",
		"cloudFlag": "0",
		"signinAcquire": "1",
		"isAcquiredCoupon": "N",
		"userDayCouponCount": "0",
		"merchants": null,
		"waitDays": "0",
		"offsetAmount": "5",
		"maxNumPerUserDay": "25",
		"produceNum": "164",
		"couponListUrl": null,
		"dayCouponCount": "1",
		"enableTimeFrom": null,
		"buttonFlagMsg": "已领完",
		"contentTextScreen": null,
		"siteStore": null,
		"stores": null,
		"effectDays": "5",
		"couponDetailUrl": null,
		"useChannel": "1,2,22,64",
		"validType": "1",
		"maxNumDay": "1",
		"enableTimeTo": null,
		"issueNum": "164",
		"showOrder": null,
		"acquireType": "3",
		"maxNum": "200",
		"birthdayFlag": "0",
		"couponPicUrl": null,
		"openTimeFrom": "2023-10-08 00:00:00",
		"couponTypeId": "11",
		"pointsValue": "0",
		"notSentCouponCount": null,
		"contentTextApp": null,
		"jumpValue": null,
		"jumpType": "13",
		"couponChannelType": null,
		"couponName": "【1专享】到家5元抵用券到家5元抵用券到家5元抵用券",
		"couponType": "抵用券",
		"openTimeTo": "2024-10-08 23:59:59",
		"maxNumPerUser": "200",
		"couponDesc": "到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券到家5元抵用券",
		"canAcquireCoupon": "N",
		"couponTemplateId": "386339932",
		"suitShopCount": null,
		"couponShortDesc": "专享-到家5元抵用券到家5元抵用券到家5元抵用券",
		"acquireFlag": "1",
		"userCouponCount": "0",
		"mpShopName": null,
		"couponScope": "1",
		"nextGenerateTime": null,
		"currentGenerateTime": null,
		"buttonFlag": "3",
		"receiveFlag": "4",
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
