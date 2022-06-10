import { mockData_光明奶卡 } from '@dj/v2.list'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { mockData } from '@dj/product.v2.info'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
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
      // goodsType: '1',
      // /// 29: 非处方药
      // // goodsType: '29',
      // /// 30: 处方药
      // // goodsType: '30',
      // /// 1: 防疫药品
      // // medicineType: '1',
      // /// 2: 非防疫药品
      // // medicineType: '2',
      // /// 3: 保健食品
      // // medicineType: '3',
      // /// 4: 医疗器械
      // // medicineType: '4',
      // /// 5: 化妆品
      // medicineType: '5',
      // backChange: '1',
      // /// 自提
      // djSendType: '1',
      // djSendType: '2',
      // /// ecpflag
      // ecpFlag: '1',
      // marketOn: '0',
      // saleStockStatus: '0'

    },
  }
mockData.obj.goodsSalesName += mockData.obj.goodsSalesName;
mockData.obj.goodsSalesName += mockData.obj.goodsSalesName;
mockData.obj.goodsSalesName += mockData.obj.goodsSalesName;
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(mockData)
    })
}


const mockData = {"success":true,"resCode":"00100000","timestamp":1650116405981,"obj":{"storeCode":"007780","storeType":"2020","merchantId":"2020007780ENT23234","comSid":"2000","goodsSid":1013284,"goodsSalesName":"/欧巴熊芒果果汁饮料%&*（我） 啊啊啊 240ml","goodsType":1,"medicineType":null,"djSendType":3,"supplier":null,"pictures":[{"type":1,"sort":0,"url":"https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000832725001_01_1010.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null}],"product":{"brand":{"id":209279,"name":"进口商品"},"mdmCategory":{"sid":16346,"mdmCategorySid":"2000100231","mdmCategoryName":"国产类葡萄"}},"weight":"240","if7Return":"0","backChange":1,"limitBuyDesc":null,"kdjStan":"散称","basePrice":"12.14","salePrice":"11.62","plusPrice":null,"saleStockStatus":"1","limitBuyPersonSum":"0","personLimit":"0","personLimitDesc":null,"personLimitLabel":null,"marketOn":1,"saleStockSum":null,"priceType":"0","endTime":4102366210000,"tdType":"0","tdTip":null,"videoSupport":"0","videoAddress":null,"videoThumbnail":null,"disCategorySid":102869,"taxRate":"0.09","ecpFlag":0}}
