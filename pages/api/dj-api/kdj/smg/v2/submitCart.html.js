export default function (req, res) {
  const { obj, ...data_others } = mockData
  const { cartItems, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      cartItems: cartItems.map(t => {
        t.supportEcp = 0
        return t
      }),
    },
    ...obj_others
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
    "isDistributeSupport": "1",
    "onlineDisMoneySum": 0,
    "maxLimitNum": 999,
    "isAllChecked": "1",
    "tokenId": "f5ce5855546648219b595e668aaf307d",
    "type": 0,
    "orderDeliveryCharge": 0,
    "ecpAccountFlag": false,
    "activityTotal": "0",
    "offlineDisMoneySum": 0,
    "bizId": "2020",
    "totalWeight": 0,
    "needPayAmount": 672.00,
    "goodsTotalMoney": "672.00",
    "cartItems": [{
      "onlineDisMoneySum": 0,
      "amount": "672.00",
      "quantity": 4.0,
      "tokenId": "f5ce5855546648219b595e668aaf307d",
      "promotionPrice": "0",
      "popVos": [],
      "supportEcp": true,
      "isChecked": "1",
      "goodsWeight": "0",
      "barCode": "6932599212202",
      "flagWeight": "N",
      "sid": "48d247066e574be5982233b7a0a4feaf",
      "amountDue": "672.00",
      "price": "168",
      "offlineDisMoneySum": 0,
      "deliverDel": "0",
      "deliverFlag": true,
      "goodsCode": "0314022001",
      "goodsName": "52度洋河海之蓝蓝色经典绵柔型酒",
      "storeCode": "000243"
    }],
    "goodsTotalCount": 4,
    "memberId": "100000002749975",
    "storeCode": "000243"
  }
}
