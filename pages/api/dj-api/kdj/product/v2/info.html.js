const API = (req, res) => {
  const { page } = req.body

  const obj = mockData
  // obj.obj.goodsType = '1'
  // obj.obj.medicineType = '3'
  // obj.obj.medicineType = '4'
  // obj.obj.goodsType = '29'
  obj.obj.goodsType = '30'
  ///
  obj.obj.backChange = '1'
  /// 自提
  // obj.obj.djSendType = '1'
  obj.obj.djSendType = '2'

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API

const mockData = {
  "success": true,
  "resCode": "00100000",
  "timestamp": 1638769221582,
  "obj": {
    "storeCode": "001456",
    "storeType": "6010",
    "merchantId": "60100014561",
    "goodsSid": 3284777,
    "goodsSalesName": "加巴喷丁胶囊0.1g*50s",
    "goodsType": 30,
    "medicineType": null,
    "djSendType": 3,
    "supplier": null,
    "pictures": [{
      "type": 1,
      "sort": 0,
      "url": "https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_10497050_500x500.jpg",
      "isEnable": null,
      "specCode": "10010",
      "attrType": null,
      "videoLink": null
    }],
    "product": {
      "brand": {
        "id": 208784,
        "name": "无品牌(NO BRAND)",
        "brandLogoPicture": "http://img12.st.iblimg.com/goods-7/images/brand/1065258906.jpg"
      },
      "mdmCategory": {
        "sid": 75495,
        "mdmCategorySid": "60000109",
        "mdmCategoryName": "其他抗微生物药物"
      }
    },
    "weight": "1.000",
    "if7Return": "0",
    "backChange": 0,
    "limitBuyDesc": null,
    "kdjStan": "0.1g*50s",
    "basePrice": "35",
    "salePrice": "35",
    "plusPrice": null,
    "saleStockStatus": "1",
    "limitBuyPersonSum": "0",
    "personLimit": "0",
    "personLimitDesc": null,
    "personLimitLabel": null,
    "marketOn": 1,
    "saleStockSum": null,
    "priceType": "0",
    "endTime": 4102415999000,
    "tdType": "0",
    "tdTip": null,
    "videoSupport": null,
    "videoAddress": null,
    "videoThumbnail": null
  }
}
