import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const obj = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

const mockData = {
    "address": null,
    "distance": null,
    "configDistance": null,
    "store": {
        "addr": "四川南路2600号",
        "beginTime": "09:00",
        "bizName": "联华标超",
        "bizId": "2020",
        "merchantId": "2020007780ENT23234",
        "charge": null,
        "cityCode": "867",
        "cityName": "市辖区",
        "comSid": "2000",
        "deliveryPlace": "false",
        "distance": "493",
        "distanceDesc": null,
        "districtCode": "868",
        "districtName": "黄浦区",
        "endTime": "20:30",
        "fastHomeMap": {
            "OvernightBeforeMessage": "我是隔夜单啊啊啊啊",
            "DelTime": "3",
            "DailyStartTime": "00:00",
            "FreeLimit": "68",
            "LogisticsStartTime": "8:00",
            "OvernightAfterMessage": "我是24点后",
            "LogisticsEndTime": "23:00",
            "NewDelTime": "最快半小时达",
            "DailyEndTime": "23:00"
        },
        "isDistributeService": null,
        "isDistributeSupport": "1",
        "isSelf": "1",
        "shopBeginTime": "9:00",
        "shopEndTime": "18:00",
        "isSinceSupport": null,
        "latitude": "31.227801",
        "logo": "https://img21.st.iblimg.com/site-2/images/store/logo/2017/09/1601372813.png",
        "longtitude": "121.487473",
        "o2oArray": "2,3,11,18,22,24,28",
        "orderBy": "99",
        "orderNbr": "0",
        "phone": "32520264",
        "provinceCode": "866",
        "provinceName": "上海市",
        "shopCode": "2020007780ENT23234",
        "shopId": "007780",
        "shopName": "联华超市武宁生活馆",
        "storeCode": "007780",
        "storeDesc": "门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述要有很多很多门店描述",
        "storeId": "a8dc67a568b64f4f8e43a767704c7999",
        "storeName": "联华超市武宁生活馆",
        "storeType": "2020",
        "qrCode": null,
        "listImage": null,
        "storeAddr": "四川南路2600号",
        "pickBeginTime": "07:00",
        "pickEndTime": "23:00",
        "specialTime": null,
        "stroll": "false",
        "pickAddr": "测试",
        "pickContact": "邵勇",
        "pickPhone": "13661617752",
        "specialService": null,
        "shopType": "超市",
        "state": null,
        "busTypeLev1": "01",
        "busTypeLev2": "0102",
        "showSinceSupport": "1",
        "showDistributeSupport": "1",
        "showFreeLimitDesc": "68免首重",
        "showDelTimeDesc": "3小时达",
        "showNewDelTimeDesc": "最快半小时达",
        "showIndexDelTimeDesc": "3小时达",
        "showDistributeDesc": "可配送",
        "showSinceDesc": "可自提",
        "storeGoodsInfo": null,
        "orderTypes": "25,46,1",
        "orderAlias": null,
        "showInvoice": 1,
        "sceneId": 11000,
        "score": 2375.8103,
        "distanceScore": 9014.0,
        "siteProtectRadius": 1000.0,
        "siteProtectRadiusPriority": 2
    }
}
