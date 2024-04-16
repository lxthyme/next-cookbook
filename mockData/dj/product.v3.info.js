const if7ReturnServiceDetail = {
  dt: '七天无理由退货规定',
  dd: [
    "下列商品不适用i百联七天无理由退货规定：",
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
  { title: "支持7天无理由退换货", icon: getServiceIcon(1), desc: "七天无理由退货规定", detail: if7ReturnServiceDetail, sort: 1 },
  // { title: "不支持7天无理由退换货", icon: getServiceIcon(2), desc: null, detail: if7ReturnServiceDetail, sort: 1 },
  //商品是否有称重退零
  { title: "称重退差价", icon: getServiceIcon(1), desc: "如何退款称重商品如实际重量小于商品标注，我们将退还商品差价。当订单完成后，根据您的支付方式差价原路退回，退款周期约5-30分钟", detail: null, sort: 2 },
  //商品是否支持自提/配送
  { title: "此商品暂不支持配送", icon: getServiceIcon(2), desc: "该商品暂不支持配送，请在预约时间到门店自", detail: null, sort: 3 },
  // { title: "此商品暂不支持自提", icon: getServiceIcon(2), desc: null, detail: null, sort: 3 },
  //是否支持ECP支付
  { title: "支持ECP支付", icon: getServiceIcon(1), desc: null, detail: null, sort: 4, },
  //处方药
  { title: "处方药须凭处方在药师指导下购买和使用！", icon: getServiceIcon(3), desc: "本广告仅供医学药学专业人士阅读", detail: null, sort: 5 },
  // { title: "本广告仅供医学药学专业人士阅读", icon: getServiceIcon(3), desc: null, detail: null, sort: 6 },
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

export const mockData = {"success":true,"resCode":"00100000","timestamp":1712816115991,"obj":{"storeCode":"007780","storeType":"2020","merchantId":"2020007780ENT23234","comSid":"2000","goodsSid":65911,"goodsSalesName":"多力 葵花籽油 5l","goodsType":16,"medicineType":null,"djSendType":3,"supplier":{"id":26010,"name":null},"pictures":[{"type":1,"sort":0,"url":"https://img.st.iblimg.com/photo-1/1000/2022885850_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":1,"url":"https://img.st.iblimg.com/photo-1/1000/478067550_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":2,"url":"https://img15.st.iblimg.com/goods-5/1000/2017/02/SP_1000_100027005382_03_10010.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":3,"url":"https://img15.st.iblimg.com/goods-5/1000/2017/02/SP_1000_100027005382_04_10010.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":4,"url":"https://img15.st.iblimg.com/goods-5/1000/2017/02/SP_1000_100027005382_05_10010.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":5,"url":"https://img15.st.iblimg.com/goods-5/1000/2017/02/SP_1000_100027005382_06_10010.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null}],"product":{"brand":{"id":209551,"name":"多力","brandLogoPicture":"https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/trading/images/brand/2023/07/%E5%8A%A8%E7%89%A903%20-%20%E5%89%AF%E6%9C%AC.jpg"},"mdmCategory":{"sid":-1,"mdmCategorySid":null,"mdmCategoryName":null}},"weight":"4700","if7Return":"0","backChange":0,"limitBuyDesc":null,"kdjStan":"5L","basePrice":"160.55","salePrice":"160.68","plusPrice":"99.00","saleStockStatus":"1","limitBuyPersonSum":"0","personLimit":"2","personLimitDesc":"每单限购2件，每人限购2件","personLimitLabel":"PLUS限购","marketOn":1,"saleStockSum":null,"priceType":"35","showPriceType":null,"endTime":4102366210000,"tdType":"0","tdTip":null,"videoSupport":"1","videoAddress":"https://img.pic88.com/video_preview/a_S26","videoThumbnail":null,"disCategorySid":102877,"taxRate":"0.09","ecpFlag":0,"minBuyQuan":0,"minBuySpec":"件","goodsSubtitle":null,"waterMark":"添加；多个；是的","cfyImgPath":null,"scenePicUrl":null,"medicareOnlineFlag":"0","labels":null,"productSid":264158,"services":[{"title":"不支持7天无理由退换货","icon":"https://Img.iblimg.com/resh5-1/h5resource/kdj/img/not@2x.png","desc":null,"detail":{"dt":"七天无理由退货规定","dd":["下列商品不适用i百联七天无理由退货规定：","（一） 消费者定作的商品；","（二） 鲜活易腐的商品；","（三） 在线下载或者消费者拆封的音像制品、计算机软件等数字化商品；","（四） 交付的报纸、期刊；","（五） 拆封后易影响人身安全或者生命健康的商品，或者拆封后易导致商品品质发生改变的商品；","（六） 一经激活或者试用后价值贬损较大的商品；","（七） 销售时已明示的临近保质期的商品、有瑕疵的商品。"]},"sort":1}],"discount":{"discountAmount":"0","discountPreAmount":"99.00","plusType":"price","hasPlusActivity":1,"sharePreAmount":"99.00","shareOrigAmount":"0","goodsId":null,"discountList":[]},"plusMember":0,"plusTipSwitch":1,"memDiscount":{"isPlus":0,"membershipModel":null,"isAllowContinue":0,"plusTime":null,"plusTimeUnit":null,"totalRights":null,"openPlusRights":"2688","points":"80.0","plusPointRate":null,"plusRulePoint":null},"promotion":{"djxgActType":null,"previewList":null,"xgActNo":null,"promLabels":[{"memo":"到家搭配购活动1到家搭配购活动1到家搭配购活动1到家搭配购活动1到家搭配购活动1","labelDesc":"标签说明","goodsDetSid":"65911","popDes":"到家搭配购活动1","ruleid":"67930","ruletype":"61","ruleName":"搭配购","activityDesc":"到家搭配购活动1","activityId":"0","sLabel":"标签说明","mLabel":"到家搭配购活动1","iconLabel":"惠","bigPopDes":"大标题1","smallPopDes":"小标题123","ruleChid":"67930","ruleMid":"67931","ruleSid":"67932","skuType":"2","djSort":5},{"memo":"到家包含托底门店的换购","labelDesc":"到家包含托底门","goodsDetSid":"65911","popDes":"到家包含托底门店的换购","ruleid":"65478","conditionType":"1","ruletype":"16","ruleName":"换购","activityId":"0","sLabel":"到家包含托底门","mLabel":"到家包含托底门店的换购","djSort":7},{"memo":"到家换购门槛小数位","labelDesc":"到家换购门槛小","goodsDetSid":"65911","popDes":"到家换购门槛小数位","ruleid":"64669","conditionType":"1","ruletype":"16","ruleName":"换购","activityId":"0","sLabel":"到家换购门槛小","mLabel":"到家换购门槛小数位","djSort":7},{"rules":[{"desc":"19","id":"13650","isLeft":"0"}],"memo":"【已发完】【返券】到家满10减1","labelDesc":"【返券】到家满","goodsDetSid":"65911","popDes":"返券","ruleid":"64101","ruletype":"4","ruleName":"满返","activityId":"0","sLabel":"【返券】到家满","mLabel":"【已发完】【返券】到家满10减1","djSort":9},{"ruleid":"61450","ruletype":"3","ruleName":"用券","sLabel":"领取后30天有效】快到家PLUS专享5折","mLabel":"领取后30天有效】快到家PLUS专享5折","cTemplateId":"376599518"},{"ruleid":"65546","ruletype":"3","ruleName":"用券","sLabel":"到家抵用券无门槛10元","mLabel":"到家抵用券无门槛10元","cTemplateId":"434113851"},{"ruleid":"60175","ruletype":"3","ruleName":"用券","sLabel":"到家抵用券购物车专用99-3\t","mLabel":"到家抵用券购物车专用99-3\t","cTemplateId":"368693871"},{"ruleid":"61620","ruletype":"3","ruleName":"用券","sLabel":"到家809回归运费券","mLabel":"到家809回归运费券","cTemplateId":"377254715"},{"ruleid":"63233","ruletype":"3","ruleName":"用券","sLabel":"到家最新专享券","mLabel":"到家最新专享券","cTemplateId":"399412787"},{"ruleid":"64560","ruletype":"3","ruleName":"用券","sLabel":"光明奶卡兑换券通用1元带走","mLabel":"光明奶卡兑换券通用1元带走","cTemplateId":"418929514"},{"ruleid":"65783","ruletype":"3","ruleName":"用券","sLabel":"【3】【格力高】20元专享券","mLabel":"【3】【格力高】20元专享券","cTemplateId":"433521249"}],"actStock":null}}}

export const mockData_all = { "success": true, "resCode": "00100000", "timestamp": 1702869291423, "obj": { "storeCode": "012044", "storeType": "2020", "merchantId": "20200120441", "comSid": "2000", "goodsSid": 77390, "goodsSalesName": "民维大牧汗 精制羊肉片 350g", "goodsType": 1, "djSendType": 3, "pictures": [{ "type": 1, "sort": 0, "url": "https://goods1.iblimg.com/trading/images/photo/goods/20231107131903/0ad8628b-2793-429c-b636-b6291f88e1ef_500x500.jpg", "specCode": "10010" }, { "type": 0, "sort": 1, "url": "https://goods1.iblimg.com/trading/images/photo/goods/20231107131905/c8255681-9006-44a8-9bad-c0180c11e106_500x500.jpg", "specCode": "10010" }], "product": { "brand": { "id": 203037, "name": "民维大牧汗", "brandLogoPicture": "http://img14.iblimg.com/goods-135/images/brand/damuhan.jpg" }, "mdmCategory": { "sid": 47899, "mdmCategorySid": "2000105645", "mdmCategoryName": "羊肉片" } }, "weight": "350", "if7Return": "0", "backChange": 0, "kdjStan": "350g", "basePrice": "48.8", "salePrice": "48.8", "saleStockStatus": "1", "limitBuyPersonSum": "0", "personLimit": "0", "marketOn": 1, "priceType": "0", "endTime": 4102415999000, "tdType": "0", "disCategorySid": 103462, "taxRate": "0.09", "ecpFlag": 0, "minBuyQuan": 0, "minBuySpec": "件" } }

// {"success":true,"resCode":"00100000","timestamp":1702865714184,"obj":{"storeCode":"007780","storeType":"2020","merchantId":"2020007780ENT23234","comSid":"2000","goodsSid":65631,"goodsSalesName":"酸奶 湾仔码头 荠菜猪肉大馄饨变更名称 700g","goodsType":1,"medicineType":null,"djSendType":3,"supplier":{"id":28876,"name":null},"pictures":[{"type":1,"sort":0,"url":"https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/daojia_osp_public/offlinegoods/goods/SP_/20231115142935682/20000005460001_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":1,"url":"https://img18.st.iblimg.com/mp-212/mp/goods/30000340_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":2,"url":"https://img20.st.iblimg.com/mp-212/mp/goods/341536147_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":3,"url":"https://img16.st.iblimg.com/mp-212/mp/goods/935424083_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":4,"url":"https://img18.st.iblimg.com/mp-212/mp/goods/30000340_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null},{"type":0,"sort":5,"url":"https://img17.st.iblimg.com/mp-212/mp/goods/1134242036_500x500.jpg","isEnable":null,"specCode":"10010","attrType":null,"videoLink":null}],"product":{"brand":{"id":203160,"name":"湾仔码头","brandLogoPicture":"http://img14.st.iblimg.com/goods-7/images/brand/1428265519.jpg"},"mdmCategory":{"sid":-1,"mdmCategorySid":null,"mdmCategoryName":null}},"weight":"300","if7Return":"0","backChange":0,"limitBuyDesc":"每人限购10件","kdjStan":"散称","basePrice":"88.4","salePrice":"66","plusPrice":null,"saleStockStatus":"1","limitBuyPersonSum":"10","personLimit":"10","personLimitDesc":"每人限购10件","personLimitLabel":"限购","marketOn":1,"saleStockSum":null,"priceType":"12","endTime":1703174399000,"tdType":"0","tdTip":null,"videoSupport":"1","videoAddress":"https://img.pic88.com/video_preview/a_S16","videoThumbnail":null,"disCategorySid":102486,"taxRate":"0.13","ecpFlag":0,"minBuyQuan":4,"minBuySpec":"件","goodsSubtitle":null,"waterMark":null,"cfyImgPath":null,"scenePicUrl":null,"labels":[{"labelType":1,"name":"新品120000005460001\t","pic":"https://Img.iblimg.com/fast2home-2/images/kdj/index/2022/10/40135307.png"}]}}
