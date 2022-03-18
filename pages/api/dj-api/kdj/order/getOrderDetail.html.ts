import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const { obj, ...data_others } = mockData
    const {
        orderDetailList,
        orderInvoiceDto,
        orderPromotionList,
        orderHistroryList,
        orderPayList,
        orderPackageList,
        dcSpTypes,
        stallDTOList,
        logisticsHistory,
        showBottonList,
        showDetailBottonList,
        ...obj_others
    } = obj
    const data = {
        ...data_others,
        obj: {
            ...obj_others,
            orderDetailList,
            orderInvoiceDto,
            orderPromotionList,
            orderHistroryList,
            orderPayList,
            orderPackageList,
            dcSpTypes,
            stallDTOList,
            logisticsHistory,
            showBottonList,
            showDetailBottonList,
            orderStatus: "1005",
            showRiderMap: 1,
            riderChannel: "LHDJ",
            // riderChannel: "",
            orderStatusDesc: "配送中...233"
        },
    }

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
        })
}

const mockData = { "resCode": null, "msg": null, "obj": { "orderSourceCode": 1, "orderTypeCode": "46", "orderSubTypeCode": null, "orderNoList": null, "pageNumber": 1, "pageSize": 10, "orderType": "扫码购订单", "orderNo": "LAS20220120326341", "memberId": "100000002750974", "mchId": "000090150504251", "memberEmail": null, "orderUsername": " ", "orderPhone": "19953769004", "orderStatusList": null, "orderStatus": "1029", "statusPay": null, "startTime": null, "endTime": null, "signTime": null, "groupBuyingNo": null, "saleMoneySum": 436, "reWeightMoney": 0, "sendCost": 0, "deliveryServiceCharge": 0, "originSendCost": null, "discountTransport": 0, "discountMoneySum": 0, "needMoney": 436, "orderTime": "2022-01-20 17:17:35", "receptName": " ", "receptPhone": "19953769004", "merchantType": null, "merchantNo": "20200002431", "merchantName": "20200002431", "completionTime": null, "delayCompleteTimes": 0, "sendTimeFlag": 3, "sendTimeDesc": "立即配送", "orderStatusDesc": "已取消", "sendTypeSid": 2, "sendType": "自行提货", "extrPlaceSid": "000243", "extrPlace": "阿炼的新标超数字化门店", "clientRemark": null, "payMetSid": 1, "payMet": "在线支付", "receptAddressDetail": "四川南路22号", "parentOrderNo": "SIT1002001702007", "allNeedMoney": 436, "aliasOrderNo": "7cefd485621442f89599a1ff49ff630e", "extrCode": null, "deliveryNo": null, "refundMonNo": null, "operatorIdList": null, "orderDetailList": [{ "itemAmount": 436, "showSkuPrice": 218.00, "shopSid": "000243", "goodsSid": null, "goodsDetSid": "0314022001", "goodsCode": "1171749", "picUrl": "https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000005006001_01_1010.jpg", "goodsUrl": null, "goodsName": "52度洋河海之蓝蓝色经典绵柔型酒", "goodsStan": null, "goodsColor": null, "integral": 0.0, "oriPrice": 218, "salePrice": 218, "saleSum": 2, "sendSum": null, "totalPrice": null, "refundNum": null, "allowReNum": 2, "orderDetailNo": "LAS202201203263410101", "stockDetailCodes": null, "cateName": null, "merchantName": null, "discountInfo": null, "merchantId": "20200002431", "tax": "0.13", "goodsType": null, "isReWeight": null, "reWeightMoney": 0, "tariffRate": 0, "tariff": 0, "overExpress": null, "if7Refund": null, "tariffNo": null, "shipOrigin": null, "measureUnit": null, "goodsWeight": 0.1, "discountAmount": 0, "purchaseType": null, "purchaseRule": null, "isDefault": null, "bgCateSid": "212037", "isCanReturn": false, "importPort": null, "importWarehouse": null, "limitedType": null, "isGift": 0, "groupGoodCode": null, "groupGoodsName": null, "goodsGiftRelation": null, "rule": null, "groupName": null, "bl_ad": null, "isMergeTemplete": null, "isFq": null, "reserveInfo1": "N", "reserveInfo2": "6932599212202", "reserveInfo3": null, "promShopCartMZ": null, "showDiscountAmount": 0, "showSalePrice": 218, "payType": null, "barCode": "6932599212202", "price": 218.00, "priceType": null, "activeCode": "KDJSDG001", "dkSid": null, "dkName": null, "dcSpType": null, "jgSpLineNbr": null, "fwSpLineNbr": null, "qcNbr": null, "serviceGoodsDTO": null, "canReturn": false }], "orderList": null, "orderInvoiceDto": { "operator": null, "sid": 303059, "orderNo": "LAS20220120326341", "billingId": null, "invType": 0, "invName": "个人", "invDesc": null, "invoiceAddress": null, "invoiceToName": null, "invioceToPhone": null, "receptInvEm": null, "invoiceAdditionInfo": null, "invoiceBankAccount": null, "invoiceBankName": null, "invoiceCompany": null, "registryAddress": null, "registryPhone": null, "invoiceProv": null, "invoiceCity": null, "invoiceDistrict": null, "invoiceUrl": null, "invoiceSubject": null, "invoiceUrlGoods": null, "invoiceUrlExpenses": null, "imageUrlByOrder": null, "imageUrlByFreight": null, "delWay": null, "courierNo": null, "delComName": null, "openingCycle": null, "status": null, "invoiceH5Url": null, "freightInvoiceCode": null, "freightInvoiceNumber": null, "orderInvoiceCode": null, "orderInvoiceNumber": null, "deliveryMode": "" }, "orderPromotionList": [], "orderHistroryList": [{ "sid": 1174885, "orderNo": "LAS20220120326341", "orderStatus": "1029", "orderStatusDesc": "已取消", "displyStatus": "您的订单已经取消", "operateTime": 1642674000537, "operator": "JOB", "isDisplay": null, "previousStatus": null, "remark": null, "orderTime": "2022-01-20 18:20:00" }, { "sid": 1174873, "orderNo": "LAS20220120326341", "orderStatus": "1001", "orderStatusDesc": "待支付", "displyStatus": "您的订单已经生成，等待付款", "operateTime": 1642670255602, "operator": null, "isDisplay": null, "previousStatus": null, "remark": null, "orderTime": "2022-01-20 17:17:35" }], "orderPayList": [], "promotionPayId": null, "content": null, "jigouName": null, "accountNo": null, "accountDate": null, "householdNo": null, "orderTypeList": null, "extrFlag": 0, "courierNo": null, "delComName": null, "delComNo": null, "parkingDuration": null, "plateNbr": null, "provinceCode": null, "cityCode": null, "districtCode": null, "provinceName": null, "cityName": null, "districtName": null, "userName": null, "identityCardNumber": null, "gbuyId": null, "checkLevel": null, "orderPackageList": [], "orderLogisticsList": null, "saleAllSum": 2, "externalLink": null, "vatId": null, "vatPackageId": null, "isHide": 0, "courierName": null, "courierPhone": null, "storeCode": "000243", "storeName": "阿炼的新标超数字化门店", "storeAddress": null, "storePic": "https://img20.st.iblimg.com/site-3/images/store/logo/2019/01/1566574402.png", "activeTime": 60, "totalTariff": 0, "shopSid": null, "changeMoney": null, "serviceFee": null, "payType": null, "tokenId": "7cefd485621442f89599a1ff49ff630e", "omsNotifyUrl": "http://oms.st.bl.com:7210/oms-core/order/payedCallBack.htm", "industrySid": "2000", "subIndustrySid": null, "stockType": "-1", "cpsToken": null, "vatType": null, "packageId": "000000", "shopDetailAddress": "(百联自提包裹)上海市市辖区黄浦区null", "shopShortAddress": "(百联自提包裹)null", "aliasSaleTime": null, "shopIndustrySid": null, "storeIndustrySid": "2020", "applyNo": null, "distance": null, "customerStockoutProgram": null, "entryTime": null, "availableTime": null, "pointAmount": null, "parkingAmount": null, "couponAmount": null, "certificateType": null, "identificationNo": null, "frontalFace": null, "flipFace": null, "certificationStatus": null, "refundIfApply": null, "cardExtractPhone": null, "groupGoodsList": null, "finalPaymentMoney": null, "depositMoney": 0, "depositStartTime": null, "depositEndTime": null, "finalPayStartTime": null, "finalPayEndTime": null, "giftOrderType": null, "comSid": "2300", "giftActivityId": null, "outPlantCode": "5", "source": null, "isFq": null, "needGiftOrder": null, "manageType": 1, "fid": null, "dateSelect": null, "receptDistrict": null, "receptCity": null, "receptProv": null, "versionName": null, "showSaleMoneySum": 436, "showDiscountMoneySum": 0, "orderNos": null, "delivTime": null, "isAYearAgo": null, "sendStartTime": null, "sendEndTime": null, "payTime": null, "sendDate": null, "dcSpTypes": [], "stallDTOList": [], "dkSids": null, "cateringOrderStatusList": null, "pickUpType": null, "serviceGoodsAmount": null, "shopLogo": null, "bu": "3", "isSpecial": null, "isRefund": null, "fulfillStatus": null, "fulfillStatusDesc": null, "prescriptionId": null, "cateringOrderRelationship": null, "logisticsHistory": [{ "sid": null, "deliveryNo": null, "orderNo": null, "packageStatus": "1029", "packageStatusDesc": "已取消", "packageDesc": "您的订单已经取消", "timeStatusUpdate": 1642674000000, "riderCode": null, "serviceType": null, "riderName": null, "riderLat": null, "riderLng": null, "riderMobile": null, "timePositionUpdate": null, "cancleType": null, "cancelReason": null, "orderInfoContent": null, "updateTime": null, "context": null, "areaCode": null, "areaName": null, "statusDate": "2022.01.20", "statusTime": "18:20:00" }, { "sid": null, "deliveryNo": null, "orderNo": null, "packageStatus": "1001", "packageStatusDesc": "待支付", "packageDesc": "您的订单已经生成，等待付款", "timeStatusUpdate": 1642670255000, "riderCode": null, "serviceType": null, "riderName": null, "riderLat": null, "riderLng": null, "riderMobile": null, "timePositionUpdate": null, "cancleType": null, "cancelReason": null, "orderInfoContent": null, "updateTime": null, "context": null, "areaCode": null, "areaName": null, "statusDate": "2022.01.20", "statusTime": "17:17:35" }], "showBottonList": [5], "showDetailBottonList": [5, 8, 9], "viewRefundUrl": null, "orderStatusFlag": 0, "riderChannel": null, "showRiderMap": null, "consigneeLat": "31.227801", "consigneeLng": "121.487473", "sellerLat": "31.227801", "sellerLng": "121.487473", "ecpPay": null, "plusDiscountPrice": null, "payJump": 0, "excludeTemplate": "" }, "success": true }
