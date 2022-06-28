import { mockData_光明奶卡 } from '@dj/v2.list'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { mockData } from '@dj/product.v2.info'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData_test
  const { supplier, pictures, product, ...obj_others } = obj
  // const { brand, mdmCategory, ...product_others } = product
  const data = {
    ...data_others,
    success: false,
    msg: '233',
    obj: {
      supplier,
      pictures,
      product,
      ...obj_others,
      goodsSalesName: Array(4).fill(obj.goodsSalesName).join(''),
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
      /// 副标题
      subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi deleniti praesentium consequatur doloremque at incidunt esse reprehenderit, minus sequi animi.'.slice(0, 250),
      /// 参考价
      // basePrice: "22.22",
      basePrice: "55.55",
      /// 销售价
      salePrice: "33.33",
      /// Plus会员价
      // plusPrice: "44.44",

    },
  }
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}


const mockData = { "success": true, "resCode": "00100000", "timestamp": 1650116405981, "obj": { "storeCode": "007780", "storeType": "2020", "merchantId": "2020007780ENT23234", "comSid": "2000", "goodsSid": 1013284, "goodsSalesName": "/欧巴熊芒果果汁饮料%&*（我） 啊啊啊 240ml", "goodsType": 1, "medicineType": null, "djSendType": 3, "supplier": null, "pictures": [{ "type": 1, "sort": 0, "url": "https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000832725001_01_1010.jpg", "isEnable": null, "specCode": "10010", "attrType": null, "videoLink": null }], "product": { "brand": { "id": 209279, "name": "进口商品" }, "mdmCategory": { "sid": 16346, "mdmCategorySid": "2000100231", "mdmCategoryName": "国产类葡萄" } }, "weight": "240", "if7Return": "0", "backChange": 1, "limitBuyDesc": null, "kdjStan": "散称", "basePrice": "12.14", "salePrice": "11.62", "plusPrice": null, "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "personLimitDesc": null, "personLimitLabel": null, "marketOn": 1, "saleStockSum": null, "priceType": "0", "endTime": 4102366210000, "tdType": "0", "tdTip": null, "videoSupport": "0", "videoAddress": null, "videoThumbnail": null, "disCategorySid": 102869, "taxRate": "0.09", "ecpFlag": 0 } }

const mockData_test = { "success": true, "resCode": "00100000", "timestamp": 1656295801785, "obj": { "storeCode": "007780", "storeType": "2020", "merchantId": "2020007780ENT23234", "comSid": "2000", "goodsSid": 162675, "goodsSalesName": "可口可乐水动乐橙味营养素饮料600ml", "goodsType": 1, "medicineType": null, "djSendType": 3, "supplier": { "id": 25844, "name": null }, "pictures": [{ "type": 1, "sort": 0, "url": "https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000761074001_01_1010.jpg", "isEnable": null, "specCode": "10010", "attrType": null, "videoLink": null }], "product": { "brand": { "id": 209713, "name": "可口可乐" }, "mdmCategory": { "sid": 16255, "mdmCategorySid": "2000100013", "mdmCategoryName": "国产类葡萄" } }, "weight": "600", "if7Return": "0", "backChange": 0, "limitBuyDesc": null, "kdjStan": "600ml", "basePrice": "4.2", "salePrice": "3.6", "plusPrice": null, "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "personLimitDesc": null, "personLimitLabel": null, "marketOn": 1, "saleStockSum": null, "priceType": "0", "endTime": 4102366210000, "tdType": "0", "tdTip": null, "videoSupport": "0", "videoAddress": null, "videoThumbnail": null, "disCategorySid": 102871, "taxRate": "0.13", "ecpFlag": 0, "minBuyQuan": null, "minBuySpec": "件" } }
