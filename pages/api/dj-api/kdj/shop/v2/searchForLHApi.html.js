export default function (req, res) {
  const { page } = req.body

  const { obj, ...data_others } = mockData
  const { goodsInfoList, ...obj_others } = obj;
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      goodsInfoList,
      // goodsInfoList: [],
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = { "success": true, "para": "9999300920821", "obj": { "totalCount": 5, "totalPage": 1, "pageNum": 1, "pageSize": 20, "goodsInfoList": [{ "type": "LH", "goodsType": "1", "sid": 255340, "salesName": "御贤果园 新奇士黑标橙20个 单果约200g左右", "brandSid": "151167", "basePrice": "159.0", "salePrice": "159.00", "saleStockSum": "1", "saleStockStatus": "1", "limitBuyPersonSum": "", "pic": { "10006": ["https://Img.iblimg.com/photo-53/2000/1090499843_200x200.jpg"] }, "marketOn": "0", "priceType": "0", "popinfosList": [], "previewList": [], "xgList": [], "goodsScore": 0.0, "secondaryScore": 0, "score": 0.0, "pageSortField": 0, "rowNum": 0, "minBuyQuan": 0 }, { "type": "LH", "goodsType": "7", "sid": 3194369, "salesName": "御贤果园 红心南非西柚  3斤", "brandSid": "151167", "basePrice": "59.0", "salePrice": "59.00", "saleStockSum": "1", "saleStockStatus": "1", "limitBuyPersonSum": "", "pic": { "10006": ["https://Img.iblimg.com/photo-42/2000/2044860497_200x200.jpg"] }, "marketOn": "0", "priceType": "0", "popinfosList": [], "previewList": [], "xgList": [], "goodsScore": 0.0, "secondaryScore": 0, "score": 0.0, "pageSortField": 0, "rowNum": 0, "minBuyQuan": 0 }, { "type": "LH", "goodsType": "7", "sid": 3194368, "salesName": "御贤果园 进口柠檬10只 单果100g", "brandSid": "151167", "basePrice": "59.0", "salePrice": "59.00", "saleStockSum": "1", "saleStockStatus": "1", "limitBuyPersonSum": "", "pic": { "10006": ["https://Img.iblimg.com/photo-42/2000/2824988_200x200.jpg"] }, "marketOn": "0", "priceType": "0", "popinfosList": [], "previewList": [], "xgList": [], "goodsScore": 0.0, "secondaryScore": 0, "score": 0.0, "pageSortField": 0, "rowNum": 0, "minBuyQuan": 0 }, { "type": "LH", "goodsType": "7", "sid": 4243217, "salesName": "御贤果园 泰国红宝石柚子 2颗装 约5-6斤", "brandSid": "151167", "basePrice": "455.0", "salePrice": "455.00", "saleStockSum": "1", "saleStockStatus": "1", "limitBuyPersonSum": "", "pic": { "10006": ["https://Img.iblimg.com/photo-50/2000/1979965693_200x200.jpg"] }, "marketOn": "0", "priceType": "0", "popinfosList": [], "previewList": [], "xgList": [], "goodsScore": 0.0, "secondaryScore": 0, "score": 0.0, "pageSortField": 0, "rowNum": 0, "minBuyQuan": 0 }, { "type": "LH", "goodsType": "7", "sid": 370071, "salesName": "御贤果园 泰国金柚 水密柚2-3只 约5-6斤装", "brandSid": "151167", "basePrice": "199.0", "salePrice": "199.00", "saleStockSum": "1", "saleStockStatus": "1", "limitBuyPersonSum": "", "pic": { "10006": ["https://Img34.iblimg.com/goods-32/2000/2016/11/SP_2000_20001091153001_01_10006.jpg"] }, "marketOn": "0", "priceType": "0", "popinfosList": [], "previewList": [], "xgList": [], "goodsScore": 0.0, "secondaryScore": 0, "score": 0.0, "pageSortField": 0, "rowNum": 0, "minBuyQuan": 0 }] } }
