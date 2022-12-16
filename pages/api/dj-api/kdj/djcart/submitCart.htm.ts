import type { NextApiRequest, NextApiResponse } from 'next'

import {
	// mockData_光明奶卡,
	mockData_无货
 } from '@dj/submitCart.htm'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData_无货
  const {
    couponUsedInfo,
    invCategoryList,
    ecpGoodsList,
    payInfoList,
    giftInfoList,
    popDetails,
    sendInfoList,
    couponDetails,
    invTypeList,
    goodsGroupList,
    couponGains,
    ...obj_others
  } = obj

  const data = {
    ...data_others,
		success: false,
		msg: '购买处方药一次最多不得超过5种药品,处方管理办法',
    obj: {
      couponUsedInfo,
      invCategoryList: invCategoryList.map((t, idx) => {
        /// invType:
        ///   1. 增值税普通发票
        ///   2. 增值税专用发票
        ///   3. 电子普通发票
        // if (t.invType === '3') {
        //   t.invType = '1'
        // }
				return t
      }),
      ecpGoodsList,
      payInfoList,
      giftInfoList,
      popDetails,
      sendInfoList,
      couponDetails,
      invTypeList,
      goodsGroupList,
			// noStockGoodsList: ecpGoodsList,
			// offShelfGoodsList: ecpGoodsList,
			// exceedNumGoodsList: ecpGoodsList,
			// effectiveGoodsList: ecpGoodsList,
      couponGains,
      ...obj_others
    }
  }
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
    //   res.status(200).json(data)
      res.status(200).json(mockData)
    })
}

export default API

const mockData = {"resultCode":"200","resultInfo":{"baseDeliveryCharge":6,"certification":false,"checkLevel":"1","checked":true,"couponDetails":[],"couponGains":[],"couponUsedInfo":{"couponUsedList":[],"totalCouponAmount":0,"useamount":0},"deliveryCharge":6,"deliveryServiceAndDeliveryCharge":6,"deliveryServiceCharge":0,"ecpGoodsList":[{"activeCode":"","addGoodsPrice":28.9,"assignFlag":"0","backChange":0,"barCode":"6925843406243","basketLimitGoodsNum":-1,"bl_ad":"A668822K_-_六月鲜_-_5","brandName":"欣和","brandSid":"175650","capacity":0,"categoryBackIds":"102893","categoryid":"16391","checkLevel":"1","checked":true,"checkedOriginal":false,"comSid":"2000","comsGoodsCode":"0321733001","counpDisCount":0,"couponDetails":[],"currPrice":0,"deliveryCharge":6,"depositDeductMoney":0,"depositEndTime":"2099-12-31 10:10:10","depositMoney":0,"depositStartTime":"2016-08-09 00:01:25","discountRate":0,"djSendType":"3","editable":"1","fid":"9063","finalPaymentMoney":0,"freeFreight":false,"freightMoney":0,"futuresType":"0","globalType":"0","goodsDiscount":0,"goodsGiftNumber":0,"goodsId":"167483","goodsLineNbr":"639acb437048157fbb6a3d09","goodsName":"欣和 六月鲜 特级酱油 1.8l","goodsNumber":1,"goodsOriginalNumber":1,"goodsPicUrl":"https://Img.iblimg.com/photo-59/2000/281654406_200x200.jpg","goodsPopDiscount2":0,"goodsType":"1","goodsUrl":"http://product.bl.com/167483.html","groupId":"1012000001","handPrice":0,"hasActivity":"1","if7Refund":"0","ifCanBuy":"1","ifOnlyPickup":"0","isCLFlag":false,"isDelevery":"1","isGift":"0","isMergeTemplete":"1","isNewAdd":"0","isPopEffective":"1","isTakenBySelf":"1","isWeight":"0","kdjShopId":"004517","kdjSourceMerchantId":"20100045171","kdjSourceShopId":"004517","kdjSourceStoreIndustrySid":"2010","kdjmerchantID":"20100045171","limitBuyPersonSum":-1,"limitBuySum":-1,"logisticsType":"01","mdmGoodsSid":"20000321733001","measureUnit":"1","mpReduceMoney":0,"normalSalePrice":28.9,"oldSalePrice":28.9,"orderLineNbr":"167483","personPriceList":[{"limitBuyPersonSum":-1,"limitBuySum":-1,"priceType":"0","salePrice":28.9}],"popDetails":[{"activityId":"260798","activityId2":"260807","activityName2":"到家实付满50元订单完成可返莲藕券1张","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":50,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":0,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popName":"实付满50元订单完成可返莲藕券1张","popRuleId":"260798","popTimes":1,"popType":"4","promotionConditionAmount":0,"promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0},{"activityId":"261515","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":0,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":1,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popDesc":"下单即可参加宝洁加价换购","popName":"下单即可参加宝洁换购","popRuleId":"261515","popTimes":1,"popType":"16","promotionConditionAmount":1,"promotionConditionType":"2","promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0}],"preBuyFlag":"0","price":0,"priceType":"0","pricechange":false,"proSellBit":4,"processingTime":0,"promBillNo":0,"promotionExpandMoney":0,"promotionMark":"0","promotionPrice":28.9,"reduceAmout":0,"referencePrice":0,"rid":"39731","sType":"1","salePrice":28.9,"saleSum":1,"sdName":"六月鲜特级酱油","sendInfo":{"determinedTime":"15:22","distance":"2.50","extrPlace":"世纪联华中环百联店","extrPlaceSid":"004517","id":"","kdjmerchantId":"20100045171","sendTime":"4","sendType":"送货上门","sendTypeSid":"0","shopIndustrySid":"2010","storeCode":"004517"},"shoppingCartType":"5","showGoodsDiscount":0,"showSalePrice":28.9,"singleDiscountPrice":0,"stockStatus":"0","stor":523,"storeIndustrySid":"2010","supplierId":"76655","tariff":0,"tariffRate":"0","tax":"0.13","totalCapacity":0,"totalPrice":28.9,"totalWeight":0.5,"type":"25","updateTime":"2022-12-15 15:22:44 0980","userPrice":0,"virtualSellFlag":"0","weight":0.5,"yunType":"1"}],"ecpStatus":"400200300","foodBoxPrice":0,"freeFreightMoney":58,"freightDiscount":0,"freightLessPrice":0,"freightLessWeight":0,"giftInfoList":[],"goodsGroupList":[{"activityMark":"0","assignFlag":"0","baseDeliveryCharge":6,"basketMark":"0","checked":true,"comSid":"2000","conditionAmount":0,"dId":"","deliveryCharge":6,"deliveryServiceCharge":0,"determineDateTimeId":"","freeFreightAmount":0,"freeFreightNeedAmount":0,"freightCouponDetails":[{"billInfoRow":"1eba2afbf19c4924851a195dd15b8b8f","freightDeductionList":[],"freightDiscount":0,"groupid":"kdj-25"}],"freightDiscount":0,"freightFlag":"18","goodsList":[{"activeCode":"","addGoodsPrice":28.9,"assignFlag":"0","backChange":0,"barCode":"6925843406243","basketLimitGoodsNum":-1,"bl_ad":"A668822K_-_六月鲜_-_5","brandName":"欣和","brandSid":"175650","capacity":0,"categoryBackIds":"102893","categoryid":"16391","checkLevel":"1","checked":true,"checkedOriginal":false,"comSid":"2000","comsGoodsCode":"0321733001","counpDisCount":0,"couponDetails":[],"currPrice":0,"deliveryCharge":6,"depositDeductMoney":0,"depositEndTime":"2099-12-31 10:10:10","depositMoney":0,"depositStartTime":"2016-08-09 00:01:25","discountRate":0,"djSendType":"3","editable":"1","fid":"9063","finalPaymentMoney":0,"freeFreight":false,"freightMoney":0,"futuresType":"0","globalType":"0","goodsDiscount":0,"goodsGiftNumber":0,"goodsId":"167483","goodsLineNbr":"639acb437048157fbb6a3d09","goodsName":"欣和 六月鲜 特级酱油 1.8l","goodsNumber":1,"goodsOriginalNumber":1,"goodsPicUrl":"https://Img.iblimg.com/photo-59/2000/281654406_200x200.jpg","goodsPopDiscount2":0,"goodsType":"1","goodsUrl":"http://product.bl.com/167483.html","groupId":"1012000001","handPrice":0,"hasActivity":"1","if7Refund":"0","ifCanBuy":"1","ifOnlyPickup":"0","isCLFlag":false,"isDelevery":"1","isGift":"0","isMergeTemplete":"1","isNewAdd":"0","isPopEffective":"1","isTakenBySelf":"1","isWeight":"0","kdjShopId":"004517","kdjSourceMerchantId":"20100045171","kdjSourceShopId":"004517","kdjSourceStoreIndustrySid":"2010","kdjmerchantID":"20100045171","limitBuyPersonSum":-1,"limitBuySum":-1,"logisticsType":"01","mdmGoodsSid":"20000321733001","measureUnit":"1","mpReduceMoney":0,"normalSalePrice":28.9,"oldSalePrice":28.9,"orderLineNbr":"167483","personPriceList":[{"limitBuyPersonSum":-1,"limitBuySum":-1,"priceType":"0","salePrice":28.9}],"popDetails":[{"activityId":"260798","activityId2":"260807","activityName2":"到家实付满50元订单完成可返莲藕券1张","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":50,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":0,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popName":"实付满50元订单完成可返莲藕券1张","popRuleId":"260798","popTimes":1,"popType":"4","promotionConditionAmount":0,"promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0},{"activityId":"261515","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":0,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":1,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popDesc":"下单即可参加宝洁加价换购","popName":"下单即可参加宝洁换购","popRuleId":"261515","popTimes":1,"popType":"16","promotionConditionAmount":1,"promotionConditionType":"2","promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0}],"preBuyFlag":"0","price":0,"priceType":"0","pricechange":false,"proSellBit":4,"processingTime":0,"promBillNo":0,"promotionExpandMoney":0,"promotionMark":"0","promotionPrice":28.9,"reduceAmout":0,"referencePrice":0,"rid":"39731","sType":"1","salePrice":28.9,"saleSum":1,"sdName":"六月鲜特级酱油","sendInfo":{"determinedTime":"15:22","distance":"2.50","extrPlace":"世纪联华中环百联店","extrPlaceSid":"004517","id":"","kdjmerchantId":"20100045171","sendTime":"4","sendType":"送货上门","sendTypeSid":"0","shopIndustrySid":"2010","storeCode":"004517"},"shoppingCartType":"5","showGoodsDiscount":0,"showSalePrice":28.9,"singleDiscountPrice":0,"stockStatus":"0","stor":523,"storeIndustrySid":"2010","supplierId":"76655","tariff":0,"tariffRate":"0","tax":"0.13","totalCapacity":0,"totalPrice":28.9,"totalWeight":0.5,"type":"25","updateTime":"2022-12-15 15:22:44 0980","userPrice":0,"virtualSellFlag":"0","weight":0.5,"yunType":"1"}],"groupDiscountMoney":0,"groupId":"kdj-25","hasSelfSupportGoods":true,"hgCheckedNumber":0,"isDelevery":"1","isGroupPop":"0","isMatch":false,"isTakenBySelf":"1","kdjStoreInfo":{"isDistributeSupport":"1","isSinceSupport":"1","kdjShopId":"004517","storeIndustrySid":"2010"},"maxSkus":0,"merchantName":"i百联(订单0)","newOrderPay":34.9,"orderAmount":28.9,"orderDiscount":0,"orderPay":28.9,"orderTypeCode":"25","oringinDeliveryCharge":6,"packageId":"1012000001","popDetails":[{"activityId":"261515","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":0,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":1,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popDesc":"下单即可参加宝洁加价换购","popName":"下单即可参加宝洁换购","popRuleId":"261515","popTimes":1,"popType":"16","promotionConditionAmount":1,"promotionConditionType":"2","promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0},{"activityId":"260798","activityId2":"260807","activityName2":"到家实付满50元订单完成可返莲藕券1张","conditionAmount":0,"couponCode":"-1","discountAmount":0,"fqConditionAmount":50,"isCrossShoppeSupport":"1","isGroupPop":"0","isJoin":"0","isMatch":false,"maxQty":0,"maxSkus":0,"memberLimit":0,"moneyCondition":0,"orderLimit":0,"popName":"实付满50元订单完成可返莲藕券1张","popRuleId":"260798","popTimes":1,"popType":"4","promotionConditionAmount":0,"promotionDiscount":0,"promotionLimit":0,"qtyCondition":0,"xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0}],"popTimes":0,"popType":0,"popTypeMark":0,"priceType":"25","promBillNoList":[],"promationGroupId":"kdj-25","promotionConditionAmount":0,"promotionDiscount":0,"promotionLimit":0,"sendInfoList":[{"id":"","sendTime":"0","sendType":"送货上门","sendTypeSid":"0"},{"id":"","sendTime":"0","sendType":"自提","sendTypeSid":"1"}],"showOrderAmount":28.9,"showOrderDiscount":0,"tariffAmount":0,"ticketMoney":0,"totalGoodsAmount":1,"totalGoodsEffectAmount":1,"totalGoodsEffectNumber":1,"totalGoodsNumber":1,"totalWeight":0.5,"totalcheckedGoodsAmount":1,"totalcheckedGoodsNumber":1,"updateTime":"2022-12-15 15:22:44 0980","useNo":"2","xyCount":0,"xyMakeUpAmount":0,"xyMakeUpCount":0}],"goodsGroupUpdateTime":"2022-12-15 15:22:44 0980","index":0,"invCategoryList":[{"categoryList":[{"categoryCode":"00000","categoryName":"明细"}],"invType":"99"}],"invTypeList":["99"],"isCheckBLCard":"0","isDistributeSupport":"1","isShowIf7Refund":"1","isSinceSupport":"1","merchantId":"","merchantName":"","newOrderPay":34.9,"orderAmount":28.9,"orderDiscount":0,"orderPay":28.9,"originDeliveryCharge":6,"payInfoList":[{"payMet":"在线支付","payMetSid":"0"},{"payMet":"货到付款","payMetSid":"1"},{"payMet":"货到刷卡","payMetSid":"2"},{"payMet":"信用支付","payMetSid":"3"}],"popDetails":[],"pricechange":false,"quickBuyFlag":"0","seckillFlag":false,"sendInfoList":[{"id":"","sendTime":"0","sendType":"送货上门","sendTypeSid":"0"},{"id":"","sendTime":"0","sendType":"自提","sendTypeSid":"1"}],"showOrderAmount":28.9,"showOrderDiscount":0,"ticketMoney":0,"totalGoodsAmount":1,"totalGoodsEffectAmount":1,"totalGoodsEffectNumber":1,"totalGoodsNum":1,"totalGoodsNumber":1,"totalTariffMoney":0,"totalWeight":0.5,"totalcheckedGoodsAmount":1,"totalcheckedGoodsNumber":1},"resultMsg":"商品结算成功","statusCode":200}
