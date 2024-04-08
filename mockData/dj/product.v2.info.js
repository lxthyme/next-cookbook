const if7ReturnServiceDetail = {
  dt: '下列商品不适用i百联七天无理由退货规定：',
  dd: [
    "（一） 消费者定作的商品；",
    "（二） 鲜活易腐的商品；",
    "（三） 在线下载或者消费者拆封的音像制品、计算机软件等数字化商品；",
    "（四） 交付的报纸、期刊；",
    "（五） 拆封后易影响人身安全或者生命健康的商品，或者拆封后易导致商品品质发生改变的商品；",
    "（六） 一经激活或者试用后价值贬损较大的商品；",
    "（七） 销售时已明示的临近保质期的商品、有瑕疵的商品。",
  ]
}
const getServiceIcon = (type) => {
  //1-yes,2-no,3-wran
  let iconUrl = "";
  switch(type){
      case 1:
          iconUrl = "https://dj.bl.com/images/yes.png";
          break;
      case 2:
          iconUrl = "https://dj.bl.com/images/no.png";
          break;
      case 3:
          iconUrl = "https://dj.bl.com/images/wran.png";
          break;
  }
  return iconUrl;
}
export const serviceList = [
  //七天无理由
  { title: "支持7天无理由退换货", icon: getServiceIcon(1), desc: null, detail: if7ReturnServiceDetail, sort: 1 },
  // { title: "不支持7天无理由退换货", icon: getServiceIcon(2), desc: null, detail: if7ReturnServiceDetail, sort: 1 },
  //商品是否有称重退零
  { title: "称重退差价", icon: getServiceIcon(1), desc: "称重商品如实际总重量小于商品售卖总重量，我们将退还差价。以实际支付金额计算差价，优惠券抵用部分不参与退差价。", detail: null, sort: 2 },
  //商品是否支持自提/配送
  { title: "此商品暂不支持配送", icon: getServiceIcon(2), desc: null, detail: null, sort: 3 },
  // { title: "此商品暂不支持自提", icon: getServiceIcon(2), desc: null, detail: null, sort: 3 },
  //是否支持ECP支付
  { title: "支持ECP支付", icon: getServiceIcon(1), desc: null, detail: null, sort: 4, },
  //处方药
  { title: "处方药须凭处方在药师指导下购买和使用！", icon: getServiceIcon(3), desc: null, detail: null, sort: 5 },
  { title: "本广告仅供医学药学专业人士阅读", icon: getServiceIcon(3), desc: null, detail: null, sort: 6 },
  { title: "请仔细阅读产品说明书或者在医务人员的指导", icon: getServiceIcon(3), desc: null, detail: null, sort: 7 },
  //OTC/非处方药
  { title: "请按药品说明书或者在药师指导下购买和使用！", icon: getServiceIcon(3), desc: null, detail: null, sort: 8 },
  //保健品
  { title: "保健食品不是药物，不能替代药物治疗疾病！", icon: getServiceIcon(3), desc: null, detail: null, detail: 9 },
  //医疗器械
  { title: "请仔细阅读产品说明书或者在医务人员的指导下购买和使用！", icon: getServiceIcon(3), desc: null, detail: null, sort: 9, },
  //化妆品
  { title: "药监部门提醒您：化妆品只能涂擦、喷洒或者其他类似方法施用于人体表面，不得食用或注射，请正确使用化妆品。", icon: getServiceIcon(3), desc: null, detail: null, sort: 9 }
]

export const mockData = { "success": true, "resCode": "00100000", "timestamp": 1668048587120, "obj": { "storeCode": "007780", "storeType": "2020", "merchantId": "2020007780ENT23234", "comSid": "2000", "goodsSid": 67179, "goodsSalesName": "菲律宾进口 蜜雪儿 金莎娜香蕉片 350g", "goodsType": 1, "medicineType": null, "djSendType": 3, "supplier": { "id": 28574, "name": null }, "pictures": [{ "type": 1, "sort": 0, "url": "https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_127092965_500x500.jpg", "isEnable": null, "specCode": "10010", "attrType": null, "videoLink": null }, { "type": 0, "sort": 1, "url": "https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_478885815_500x500.jpg", "isEnable": null, "specCode": "10010", "attrType": null, "videoLink": null }], "product": { "brand": { "id": 148889, "name": "蜜雪儿(蜜雪儿)" }, "mdmCategory": { "sid": 16043, "mdmCategorySid": "2000102250", "mdmCategoryName": "国产类葡萄" } }, "weight": "200", "if7Return": "0", "backChange": 0, "limitBuyDesc": null, "kdjStan": "散称", "basePrice": "14.11", "salePrice": "1", "plusPrice": null, "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "personLimitDesc": null, "personLimitLabel": null, "marketOn": 1, "saleStockSum": null, "priceType": "34", "endTime": 1668061361069, "tdType": "0", "tdTip": null, "videoSupport": "1", "videoAddress": "https://img.pic88.com/video_preview/a_S57", "videoThumbnail": null, "disCategorySid": 103225, "taxRate": "0.09", "ecpFlag": 0, "minBuyQuan": 3, "minBuySpec": "件", "goodsSubtitle": "副标题啦啦啦促销啦啦啦", "labels": [{ "labelType": 1, "name": "新品同标同门店", "pic": "https://Img.iblimg.com/fast2home-2/images/kdj/index/2022/10/40135307.png" }] } }

export const mockData_all = { "success": true, "resCode": "00100000", "timestamp": 1702869291423, "obj": { "storeCode": "012044", "storeType": "2020", "merchantId": "20200120441", "comSid": "2000", "goodsSid": 77390, "goodsSalesName": "民维大牧汗 精制羊肉片 350g", "goodsType": 1, "djSendType": 3, "pictures": [{ "type": 1, "sort": 0, "url": "https://goods1.iblimg.com/trading/images/photo/goods/20231107131903/0ad8628b-2793-429c-b636-b6291f88e1ef_500x500.jpg", "specCode": "10010" }, { "type": 0, "sort": 1, "url": "https://goods1.iblimg.com/trading/images/photo/goods/20231107131905/c8255681-9006-44a8-9bad-c0180c11e106_500x500.jpg", "specCode": "10010" }], "product": { "brand": { "id": 203037, "name": "民维大牧汗", "brandLogoPicture": "http://img14.iblimg.com/goods-135/images/brand/damuhan.jpg" }, "mdmCategory": { "sid": 47899, "mdmCategorySid": "2000105645", "mdmCategoryName": "羊肉片" } }, "weight": "350", "if7Return": "0", "backChange": 0, "kdjStan": "350g", "basePrice": "48.8", "salePrice": "48.8", "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "marketOn": 1, "priceType": "0", "endTime": 4102415999000, "tdType": "0", "disCategorySid": 103462, "taxRate": "0.09", "ecpFlag": 0, "minBuyQuan": 0, "minBuySpec": "件" } }

// {"success":true,"resCode":"00100000","timestamp":1702865714184,"obj":{"storeCode":"007780","storeType":"2020","merchantId":"2020007780ENT23234","comSid":"2000","goodsSid":65631,"goodsSalesName":"酸奶 湾仔码头 荠菜猪肉大馄饨变更名称 700g","goodsType":1,"medicineType":null,"djSendType":3,"supplier":{"id":28876,"name":null},"pictures":[{"type":1,"sort":0,"url":"https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/daojia_osp_public/offlinegoods/goods/SP_/20231115142935682/20000005460001_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":1,"url":"https://img18.st.iblimg.com/mp-212/mp/goods/30000340_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":2,"url":"https://img20.st.iblimg.com/mp-212/mp/goods/341536147_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":3,"url":"https://img16.st.iblimg.com/mp-212/mp/goods/935424083_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":4,"url":"https://img18.st.iblimg.com/mp-212/mp/goods/30000340_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":5,"url":"https://img17.st.iblimg.com/mp-212/mp/goods/1134242036_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null}],"product":{"brand":{"id":203160,"name":"湾仔码头","brandLogoPicture":"http://img14.st.iblimg.com/goods-7/images/brand/1428265519.jpg"},"mdmCategory":{"sid":-1,"mdmCategorySid":null,"mdmCategoryName":null}},"weight":"300","if7Return":"0","backChange":0,"limitBuyDesc":"每人限购10件","kdjStan":"散称","basePrice":"88.4","salePrice":"66","plusPrice":null,"saleStockStatus":"1","limitBuyPersonSum":"10","personLimit":"10","personLimitDesc":"每人限购10件","personLimitLabel":"限购","marketOn":1,"saleStockSum":null,"priceType":"12","endTime":1703174399000,"tdType":"0","tdTip":null,"videoSupport":"1","videoAddress":"https://img.pic88.com/video_preview/a_S16","videoThumbnail":null,"disCategorySid":102486,"taxRate":"0.13","ecpFlag":0,"minBuyQuan":4,"minBuySpec":"件","goodsSubtitle":null,"waterMark":null,"cfyImgPath":null,"scenePicUrl":null,"labels":[{"labelType":1,"name":"新品120000005460001\t","pic":"https://Img.iblimg.com/fast2home-2/images/kdj/index/2022/10/40135307.png"}]}}
