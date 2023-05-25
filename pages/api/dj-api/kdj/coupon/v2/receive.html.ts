import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockData_failure
} from '@dj/coupon.v2.receive'
const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data =
    // mockData_Success
    // mockData_Failure
    mockData_failure
                // .t00100051
                .t00990001

    data.resCode = '00100000'
    data.success = true

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
      // res.status(200).json(data)
    })
}

export default API

const mockData_Success = {
  "success": true,
  "resCode": "00100000",
  "obj": [{
    "msg": "该优惠券已领用完",
    "resCode": "04111003"
  }, {
    "campCoupon": {
      "couponName": "【复制290721104】到家新人6元运费券",
      "offsetAmount": "5",
      "effectiveTime": "2020-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "到家6元运费抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "297964985",
      "couponId": "1738590641254",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2021-12-04 23:59:59",
      "couponType": "运费券",
      "couponDetailUrl": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "couponTypeId": "17",
      "erCode": "297964985;1738590641254;100000002749975",
      "id": "2084926147",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "【复制290721104】到家新人6元运费券",
      "offsetAmount": "5",
      "effectiveTime": "2020-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "到家6元运费抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "297964985",
      "couponId": "1738590650946",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2021-12-04 23:59:59",
      "couponType": "运费券",
      "couponDetailUrl": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "couponTypeId": "17",
      "erCode": "297964985;1738590650946;100000002749975",
      "id": "2084926148",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "【复制290721104】到家新人6元运费券",
      "offsetAmount": "5",
      "effectiveTime": "2020-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "到家6元运费抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "297964985",
      "couponId": "1738590666157",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2021-12-04 23:59:59",
      "couponType": "运费券",
      "couponDetailUrl": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "couponTypeId": "17",
      "erCode": "297964985;1738590666157;100000002749975",
      "id": "2084926149",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "【复制290721104】到家新人6元运费券",
      "offsetAmount": "5",
      "effectiveTime": "2020-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "到家6元运费抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "297964985",
      "couponId": "1738590677580",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2021-12-04 23:59:59",
      "couponType": "运费券",
      "couponDetailUrl": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "couponTypeId": "17",
      "erCode": "297964985;1738590677580;100000002749975",
      "id": "2084926150",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "【复制290721104】到家新人6元运费券",
      "offsetAmount": "5",
      "effectiveTime": "2020-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "到家6元运费抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "297964985",
      "couponId": "1738590683946",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2021-12-04 23:59:59",
      "couponType": "运费券",
      "couponDetailUrl": null,
      "couponDesc": "到家6元运费抵用券到家6元运费抵用券",
      "couponTypeId": "17",
      "erCode": "297964985;1738590683946;100000002749975",
      "id": "2084926151",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "快到家15元新人抵用券",
      "offsetAmount": "15",
      "effectiveTime": "2021-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "快到家15元新人抵用券",
      "couponTxStatus": null,
      "couponTemplateId": "298023409",
      "couponId": "112156989101897",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2022-11-04 23:59:59",
      "couponType": "抵用券",
      "couponDetailUrl": null,
      "couponDesc": "快到家15元新人抵用券快到家15元新人抵用券",
      "couponTypeId": "11",
      "erCode": "298023409;112156989101897;100000002749975",
      "id": "2084926704",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "campCoupon": {
      "couponName": "【复制298000694】联华8折新人券",
      "offsetAmount": "8",
      "effectiveTime": "2021-11-04 00:00:00",
      "signinAcquire": "1",
      "couponShortDesc": "联华8折新人券",
      "couponTxStatus": null,
      "couponTemplateId": "298045550",
      "couponId": "2043989714294",
      "couponPicUrl": null,
      "couponTemplateTxId": null,
      "expireTime": "2022-11-04 23:59:59",
      "couponType": "折扣券",
      "couponDetailUrl": null,
      "couponDesc": "联华8折新人券联华8折新人券联华8折新人券",
      "couponTypeId": "20",
      "erCode": "298045550;2043989714294;100000002749975",
      "id": "2084926804",
      "remainMaxNumUserDay": 0,
      "pointsValue": 0,
      "couponListUrl": null,
      "showWeight": null
    }
  }, {
    "couponCount": 7
  }]
}
