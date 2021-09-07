export default (req, res) => {
    const { page } = req.body
    const total_page = Math.max(0, 5 - page)

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const list = []

    const data = {
        ...mockData,
        orderStatus: "1005",
        showRiderMap: 1,
        riderChannel: "LHDJ",
        // riderChannel: "",
        orderStatusDesc: "配送中...233"
    }

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json({
                "success": true,
                obj: data,
            })
        })
}

const mockData = {
    "orderSourceCode": 1,
    "orderTypeCode": "25",
    "pageNumber": 1,
    "pageSize": 10,
    "orderType": "快到家",
    "orderNo": "LAZ20210816480596",
    "memberId": "100000000010391",
    "mchId": "010090150505201",
    "orderUsername": "wrywwwrrryyy",
    "orderPhone": "13701869898",
    "orderStatus": "1007",
    "statusPay": "4002",
    "signTime": "2021-08-16 17:18:00",
    "saleMoneySum": 1.7,
    "reWeightMoney": 0,
    "sendCost": 0,
    "deliveryServiceCharge": 0,
    "originSendCost": 6,
    "discountTransport": 6,
    "discountMoneySum": 0,
    "needMoney": 1.7,
    "orderTime": "2021-08-16 16:49:27",
    "receptName": "林航",
    "receptPhone": "13701869898",
    "merchantType": "联华股份",
    "delayCompleteTimes": 0,
    "sendTimeFlag": 3,
    "sendTimeDesc": "立即配送",
    "orderStatusDesc": "已完成",
    "sendTypeSid": 1,
    "sendType": "送货上门",
    "payMetSid": 1,
    "payMet": "在线支付",
    "receptAddressDetail": "上海市 市辖区 浦东新区 6号线_源深体育中心_地铁站__1号口",
    "parentOrderNo": "951601959909",
    "allNeedMoney": 1.7,
    "aliasOrderNo": "0",
    "orderDetailList": [{
        "itemAmount": 1.7,
        "showSkuPrice": 1.70,
        "shopSid": "000281",
        "goodsDetSid": "0509585001",
        "goodsCode": "79431",
        "picUrl": "https://Img.iblimg.com/goods-53/2000/2016/11/SP_2000_20000509585001_01_10006.jpg",
        "goodsName": "怡宝 饮用 纯净水555ml/瓶",
        "integral": 0.0,
        "salePrice": 1.7,
        "saleSum": 1,
        "allowReNum": 1,
        "orderDetailNo": "LAZ202108164805960101",
        "merchantId": "20200002811",
        "tax": "0.13",
        "goodsType": "1",
        "reWeightMoney": 0,
        "tariffRate": 0,
        "tariff": 0,
        "if7Refund": 0,
        "measureUnit": "瓶",
        "goodsWeight": 0.555,
        "discountAmount": 0,
        "purchaseType": "25",
        "bgCateSid": "102868",
        "isCanReturn": false,
        "isGift": 0,
        "bl_ad": "A668899K_-_20754_-_3",
        "isMergeTemplete": "1",
        "isFq": 0,
        "promShopCartMZ": "611a2678273da41d1c931485",
        "showDiscountAmount": 0,
        "showSalePrice": 1.7,
        "barCode": "6901285991219",
        "price": 1.70,
        "priceType": "0",
        "canReturn": false
    }],
    "orderInvoiceDto": {
        "sid": 44140716,
        "orderNo": "LAZ20210816480596",
        "invType": 0,
        "invName": "个人",
        "deliveryMode": ""
    },
    "orderPromotionList": [],
    "orderHistroryList": [{
        "sid": 296214323,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1007",
        "orderStatusDesc": "已完成",
        "displyStatus": "您的订单已签收.感谢您在百联购物,欢迎您再次光临.",
        "operateTime": 1629105480647,
        "orderTime": "2021-08-16 17:18:00"
    }, {
        "sid": 296213403,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1005",
        "orderStatusDesc": "配送中",
        "displyStatus": "您的订单已经出库,物流配送中",
        "operateTime": 1629105201799,
        "operator": "tms",
        "orderTime": "2021-08-16 17:13:21"
    }, {
        "sid": 296207879,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1004",
        "orderStatusDesc": "待出库",
        "displyStatus": "您的订单配货完成",
        "operateTime": 1629104016057,
        "operator": "vpos",
        "orderTime": "2021-08-16 16:53:36"
    }, {
        "sid": 296206380,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1003",
        "orderStatusDesc": "待拣货",
        "displyStatus": "您的订单审核通过，等待配货",
        "operateTime": 1629103773320,
        "operator": "系统",
        "orderTime": "2021-08-16 16:49:33"
    }, {
        "sid": 296206358,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1092",
        "orderStatusDesc": "订单传输成功",
        "displyStatus": "订单传输成功",
        "operateTime": 1629103768280,
        "orderTime": "2021-08-16 16:49:28"
    }, {
        "sid": 296206356,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1002",
        "orderStatusDesc": "待审核",
        "displyStatus": "您的订单支付成功,等待系统审核",
        "operateTime": 1629103768144,
        "orderTime": "2021-08-16 16:49:28"
    }, {
        "sid": 296206355,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1035",
        "orderStatusDesc": "处理中",
        "displyStatus": "您的订单已经支付完成，正在处理中",
        "operateTime": 1629103768097,
        "orderTime": "2021-08-16 16:49:28"
    }, {
        "sid": 296206352,
        "orderNo": "LAZ20210816480596",
        "orderStatus": "1001",
        "orderStatusDesc": "待支付",
        "displyStatus": "您的订单已经生成，等待付款",
        "operateTime": 1629103767884,
        "orderTime": "2021-08-16 16:49:27"
    }],
    "orderPayList": [{
        "isReturnNull": 0,
        "orderNo": "LAZ20210816480596",
        "payAmount": 1.7,
        "payCode": "58",
        "payName": "积分支付",
        "payTime": 1629103767000,
        "serialNo": "20210816358777863",
        "userId": "100000000010391",
        "discountAmt": 0,
        "chlDiscountAmt": 0,
        "txNo": "951601959909",
        "mchId": "010090150505201",
        "paySource": "91111111",
        "blchannelid": "1"
    }],
    "extrFlag": 0,
    "courierNo": "LAZ20210816480596",
    "delComName": "Fengniao",
    "provinceCode": "866",
    "cityCode": "867",
    "districtCode": "880",
    "orderPackageList": [{
        "sid": 20451607,
        "packageId": "LAZ20210816480596",
        "delComName": "Fengniao",
        "orderNo": "LAZ20210816480596",
        "operateTime": 1629104016000,
        "packageStatus": "1007",
        "packageStatusDesc": "已完成",
        "updateTime": 1629105480641,
        "packageType": 2,
        "isExtended": 0,
        "expressNo": "LAZ20210816480596",
        "outStatus": "0",
        "logisticOrderNo": "LAZ2021081648059601"
    }],
    "saleAllSum": 1,
    "isHide": 0,
    "courierName": "孟飞鹏",
    "courierPhone": "15035131165",
    "storeCode": "000281",
    "storeName": "联华超市羽山店",
    "storeAddress": "羽山路298号",
    "storePic": "https://img21.iblimg.com/site-2/images/store/logo/2019/07/1692763483.jpg",
    "activeTime": 60,
    "totalTariff": 0,
    "serviceFee": 0.221,
    "omsNotifyUrl": "http://oms.bl.com:8090/oms-core/order/payedCallBack.htm",
    "industrySid": "2000",
    "stockType": "1",
    "packageId": "1012000001",
    "shopDetailAddress": "上海市 市辖区 浦东新区 6号线_源深体育中心_地铁站__1号口",
    "shopIndustrySid": "2020",
    "storeIndustrySid": "2020",
    "customerStockoutProgram": "1",
    "finalPaymentMoney": 0,
    "depositMoney": 0,
    "depositStartTime": "2016-08-08 23:07:58",
    "depositEndTime": "2099-12-31 10:10:10",
    "comSid": "2300",
    "isFq": 0,
    "manageType": 1,
    "fid": "9063",
    "receptDistrict": "880",
    "receptCity": "867",
    "receptProv": "866",
    "showSaleMoneySum": 1.7,
    "showDiscountMoneySum": 0,
    "delivTime": 1629105201000,
    "payTime": 1629103767000,
    "dcSpTypes": [],
    "stallDTOList": [],
    "bu": "3",
    "logisticsHistory": [{
        "packageStatus": "1007",
        "packageStatusDesc": "已完成",
        "packageDesc": "您的订单已签收.感谢您在百联购物,欢迎您再次光临.",
        "timeStatusUpdate": 1629105480000,
        "statusDate": "2021.08.16",
        "statusTime": "17:18:00"
    }, {
        "packageDesc": "快件已签收完成。",
        "timeStatusUpdate": 1629105480000,
        "statusDate": "2021.08.16",
        "statusTime": "17:18:00"
    }, {
        "packageStatus": "1005",
        "packageStatusDesc": "配送中",
        "packageDesc": "您的订单已经出库,物流配送中",
        "timeStatusUpdate": 1629105201000,
        "statusDate": "2021.08.16",
        "statusTime": "17:13:21"
    }, {
        "packageDesc": "快件正在派送中,快递员:孟飞鹏,手机:15035131165",
        "timeStatusUpdate": 1629105201000,
        "statusDate": "2021.08.16",
        "statusTime": "17:13:21"
    }, {
        "packageDesc": "快递员取货处理中,快递员:孟飞鹏,手机:15035131165",
        "timeStatusUpdate": 1629104183000,
        "statusDate": "2021.08.16",
        "statusTime": "16:56:23"
    }, {
        "packageStatus": "1004",
        "packageStatusDesc": "待出库",
        "packageDesc": "您的订单配货完成",
        "timeStatusUpdate": 1629104016000,
        "statusDate": "2021.08.16",
        "statusTime": "16:53:36"
    }, {
        "packageDesc": "已通知快递公司。",
        "timeStatusUpdate": 1629104016000,
        "statusDate": "2021.08.16",
        "statusTime": "16:53:36"
    }, {
        "packageStatus": "1003",
        "packageStatusDesc": "待拣货",
        "packageDesc": "您的订单审核通过，等待配货",
        "timeStatusUpdate": 1629103773000,
        "statusDate": "2021.08.16",
        "statusTime": "16:49:33"
    }, {
        "packageStatus": "1092",
        "packageStatusDesc": "订单传输成功",
        "packageDesc": "订单传输成功",
        "timeStatusUpdate": 1629103768000,
        "statusDate": "2021.08.16",
        "statusTime": "16:49:28"
    }, {
        "packageStatus": "1002",
        "packageStatusDesc": "待审核",
        "packageDesc": "您的订单支付成功,等待系统审核",
        "timeStatusUpdate": 1629103768000,
        "statusDate": "2021.08.16",
        "statusTime": "16:49:28"
    }, {
        "packageStatus": "1035",
        "packageStatusDesc": "处理中",
        "packageDesc": "您的订单已经支付完成，正在处理中",
        "timeStatusUpdate": 1629103768000,
        "statusDate": "2021.08.16",
        "statusTime": "16:49:28"
    }, {
        "packageStatus": "1001",
        "packageStatusDesc": "待支付",
        "packageDesc": "您的订单已经生成，等待付款",
        "timeStatusUpdate": 1629103767000,
        "statusDate": "2021.08.16",
        "statusTime": "16:49:27"
    }],
    "showBottonList": [4, 5],
    "showDetailBottonList": [4, 5, 8, 9],
    "orderStatusFlag": 0,
    "consigneeLat": "31.233004",
    "consigneeLng": "121.534642",
    "sellerLat": "31.231501",
    "sellerLng": "121.541485",
    "payJump": 0,
    "excludeTemplate": ""

}
