import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 3000)
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
    "freightTemplete": {
      "ruleDes": "满58元,减免5元; 0-5(含)kg,每kg收费:0.5元; 5-99999(含)kg,每kg收费:1.5元; 下雨了,每单收费:1元; 每周一、二、三、四 免除加价运费",
      "timeliness": null,
      "ruleDesSimple": "满58元,减免5元; 0-5(含)kg,每kg收费:0.5元; 5-99999(含)kg,每kg收费:1.5元; 下雨了,每单收费:1元; 每周一、二、三、四 免除加价运费",
      "intervalValue": "5.00",
      "initialWeight": null,
      "freeFreightMoney": "58",
      "orderType": "25",
      "fmap": {
        "52442": {
          "calType": "7",
          "comType": "-7",
          "orderType": "25",
          "freightRuleDto": {
            "ruleDes": "满58元,减免5元; 0-5(含)kg,每kg收费:0.5元; 5-99999(含)kg,每kg收费:1.5元; 下雨了,每单收费:1元; 每周一、二、三、四 免除加价运费",
            "ruleBaseList": [
              {
                "initialWeight": null
              }
            ],
            "tid": "52442",
            "weightLimit": "30",
            "weightMsg": "超重啦！"
          },
          "tType": "1",
          "freightLessPrice": 17.2,
          "merchantName": null,
          "freightLessWeight": 0,
          "merchantId": null,
          "hTId": null,
          "tName": "到家及时达-勿改勿动",
          "storeName": null,
          "timeCost": 0,
          "extraCost": 1,
          "o2oFreightDiscount": 1,
          "logisticsTypeCheckBox": null,
          "mergeType": "1",
          "effectiveEndTime": null,
          "baseFreightMark": 5,
          "sendDays": null,
          "tId": "52442",
          "orderTypeName": null,
          "sType": null,
          "distanceCost": 0,
          "storeSid": "007780,004517,001001,001110",
          "logisticsType": null,
          "continueFreightMark": 0,
          "weightCost": 0,
          "status": "1",
          "effectiveBeginTime": null
        }
      }
    }
  }
}
