const API = (req, res) => {

  const { obj, ...data_others } = mockData
  const { supplier, pictures, product, ...obj_others } = obj
  // const { brand, mdmCategory, ...product_others } = product
  const data = {
    ...data_others,
    obj: {
      supplier,
      pictures,
      product,
      ...obj_others,
      goodsType: '1',
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
      medicineType: '5',
      backChange: '1',
      /// 自提
      djSendType: '1',
      djSendType: '2',
      /// ecpflag
      ecpFlag: '1'

    },
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockData = { "success": true, "resCode": "00100000", "timestamp": 1645686267695, "obj": { "storeCode": "007780", "storeType": "2020", "merchantId": "2020007780ENT23234", "comSid": "2000", "goodsSid": 1014291, "goodsSalesName": "伊利红枣牛奶冰淇淋(家庭装) 70g*6", "goodsType": 1, "medicineType": null, "djSendType": 3, "supplier": null, "pictures": [{ "type": 1, "sort": 0, "url": "https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000865561001_01_1010.jpg", "isEnable": null, "specCode": "10010", "attrType": null, "videoLink": null }], "product": { "brand": { "id": 208239, "name": "伊利", "brandLogoPicture": "http://img13.st.iblimg.com/goods-8/images/brand/2018/06/644239245.jpg" }, "mdmCategory": { "sid": 18505, "mdmCategorySid": "2000601801", "mdmCategoryName": "国产类葡萄" } }, "weight": "0.000", "if7Return": "0", "backChange": 0, "limitBuyDesc": null, "kdjStan": "70g*6", "basePrice": "17.8", "salePrice": "17.8", "plusPrice": null, "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "personLimitDesc": null, "personLimitLabel": null, "marketOn": 1, "saleStockSum": null, "priceType": "0", "endTime": 4102415999000, "tdType": "0", "tdTip": null, "videoSupport": null, "videoAddress": null, "videoThumbnail": null, "disCategorySid": 212037, "taxRate": "0.13", "ecpFlag": 0 } }
