import type { NextApiRequest, NextApiResponse } from 'next'
import {
	// mockData_12_18 as mockData
	mockData_failure,
	mockData_12_20 as mockData,
	mock_giftInfoList,
	mockData_Only,
	mockData_group,
	mockData_test,
	mockData_queryCart_Component,
 } from '@dj/queryCart'

const API = (req: NextApiRequest, res: NextApiResponse) => {
	const { page } = req.body

	const { obj, ...others_mockData } = JSON.parse(JSON.stringify(mockData))
	const { goodsGroupDtoList, topPopList, kdjStoreInfo, ...other_obj } = obj
	let data = {
		obj: {
			goodsGroupDtoList: goodsGroupDtoList
			.map(t1 => {
				console.log(`-->: ${t1.groupType}\t${t1.groupType === '21'}`)
				if(t1.groupType === '21') {
					return [t1, mockData_group.g20, mockData_group.g22]
				}
				return undefined
			}).flat()
			.map(t1 => {
				// if(t1.groupType === '20') {
				// 	return mockData_group.g20
				// } else if(t1.groupType === '22') {
				// 	return mockData_group.g22
				// } else if(t1.groupType === '21') {
				if(1 == 1) {
					const { freightImbodyMap, goodsGroupList, freeFreightMoney, ...other_goodsGroupList } = t1
					return {
						freightImbodyMap,
						...other_goodsGroupList,
						freeFreightMoney: 68,
						goodsGroupList: goodsGroupList.map((t2, idx2) => {
							const { goodsList, promBillNoList, ...others_t } = t2
							return {
								...others_t,
								promBillNoList,
								goodsList: goodsList.map((t3, idx3) => {
									const { goodsName, attrList, subGoodsList, giftInfoList, personPriceList, popDetails, couponDetails, ...others_t } = t3
									const f_t3 = {
										...others_t,
										personPriceList,
										// personPriceList: [],
										// personPriceList: [
										// 	{
										// 		"salePrice": 10.00,
										// 		"limitBuySum": -1,
										// 		"priceType": "0",
										// 		"limitBuyPersonSum": -1
										// 	}, {
										// 		"salePrice": 10.00,
										// 		"limitBuySum": -1,
										// 		"priceType": "0",
										// 		"limitBuyPersonSum": -1
										// 	}
										// ],
										couponDetails,
										attrList,
										// attrList: [
										// 	{
										// 		name: 'sku.name',
										// 		value: 'sku.value'
										// 	}
										// ],
										seleGiftList: mock_giftInfoList,
										/// 赠品列表:可更换
										// giftInfoList,
										giftInfoList: mock_giftInfoList,
										subGoodsList: subGoodsList,
										// giftInfoList: [
										// 	{
										// 		gifName: 'gifName233',
										// 		goodsNumber: '233',
										// 		gifGoodsId: '23',
										// 		goodsPicUrl: '',
										// 		parentGoodsId: ''
										// 	}, {
										// 		gifName: 'gifName233',
										// 		goodsNumber: '233',
										// 		gifGoodsId: '23',
										// 		goodsPicUrl: '',
										// 		parentGoodsId: ''
										// 	}
										// ],
										/// 营促销信息
										popDetails: mockData_queryCart_Component.popDetails(),
										goodsName: Array(3).fill(goodsName).join(''),
										// freedelivery: 0,
										/// 换购
										// typePop: '16',
										goodsNumber: '99',
										salePrice: '8888.88',
										normalSalePrice: '9999.99',
										/// 库存数
										// stor: '200',
										// stor: '-1',
										// limitBuySum: '200',
										// isFailureGoods: '2',
										/// 销售价
										// normalSalePrice: '233',
										/// 0-非篮筐 1-篮筐
										// basketMark: '0',
										comSid: '6000',
										goodsType: '30',
										// goodsType: '29',
										reduceTag: '1',
										limitBuyPersonSum: '99',
										// limitBuyPersonSum: '123',
										// reduceAmout: '233',
										// minOrder: '233',
										minBuySpec: '包',
										/// plus
										// priceType: '35',
										priceType: '58',
										/// 套餐
										// goodsType: '11',
										/// 库存
										// proSellBit: '3',
										/// 处方药
										// comSid: '6000',
										// goodsType: '30',
										// goodsType: '11',
										/// globalType:0-非全球购 8-全球购物(一般贸易) 85-直邮 86-保税
										// globalType: '86',
										/// 托底
										isFromButtomShop: '1',
										showSalePrice: '233.233',
										delTimeLabel: "即时达",
										delTimeSwitch: 1,
										originBuyNumber: 5,
										limitBuyNumber: 5
									}
									if(idx2 == 1) {
										return [f_t3, f_t3]
									}
									return f_t3
								}).flat(),
							};
						}),
					}
				}
				return t1
			}),
			topPopList: mockData_queryCart_Component.topPopList(),
			"customField": {
				"delTimedesc": "最快30分钟送达",
				"tdDelTimeDesc": "48小时内发货",
				"delTimeLabel": "即时达",
				"tdDelTimeLabel": "全城配"
			},
			kdjStoreInfo,
			...other_obj
		},
		...others_mockData
	}
	// obj.obj.goodsGroupDtoList.forEach(t => {
	//   t.goodsGroupList.forEach(t2 => {
	//     t2.typePop = '16'
	//   })
	// })
	// data.obj.goodsGroupDtoList[0].goodsGroupList[0].typePop = '16'
	// data.obj.goodsGroupDtoList[0].goodsGroupList[0].reduceTag = '0'
	// data.obj.goodsGroupDtoList[0].goodsGroupList[0].limitBuyPersonSum = '21'
	// data = mockData233
	// data.obj.goodsGroupDtoList[0].goodsGroupList = data.obj.goodsGroupDtoList[0].goodsGroupList.slice(1, -1)
	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, resolve), 1000)
	})
		.then(() => {
			res.status(200).json(
				data
				// mockData_test
				// mockData_failure
											// .t00100051_访问量过大
											// .t00100051_未查询到任何结果
											// .t400112002_查询购物车失败
				)
			// res.status(200).json(
			// 	)
		})
}

export default API

const mockData_allCheck = {"success":true,"resCode":"00100000","obj":{"showOrderAmount":112.9,"goodsGroupDtoList":[{"newOrderPay":112.9,"isCheckBLCard":"0","groupType":"21","showOrderAmount":112.9,"freightLessPrice":0,"groupId":"0000-26230-1012000001-1-1null0000-6336-1013000001-1-1null53415-10000-6336-1012000001-1-1null0000--1-1012000001-1-1null-26535","deliveryCharge":2.47,"freeFreightMoney":0,"totalGoodsEffectNumber":7,"merchantName":"","orderAmount":112.9,"originDeliveryCharge":0,"freightLessWeight":0,"checkLevel":"1","merchantId":"","totalGoodsNum":2,"quickBuyFlag":"0","freightImbodyMap":{"26535":{"freightLessWeight":0,"freightTemplateId":"26535","freightLessPrice":184.1,"isMergeTemplete":"1","packageId":"1012000001","deliveryCharge":2.47,"freightRuleDesc":"满198元,减免6元; 0-2.5km,每km收费:1.1元; 2.5-5km,每km收费:2.1元; 5-10km,每km收费:3.1元; 0-3.5kg,每kg收费:1元; 3.5-5kg,每kg收费:2元; 5-999kg,每kg收费:3.1元; 10-14点,每单收费:1元; 14-16点,每单收费:5元; 小心点,每单收费:8.8元;"},"12935_1013000001":{"freightLessWeight":0,"freightTemplateId":"12935","freightLessPrice":0,"isMergeTemplete":"0","packageId":"1013000001","deliveryCharge":0,"freightRuleDesc":"初始运费10元,首重3kg,超重1.1元/kg;每满68元,减免3kg;"}},"deliveryServiceCharge":0,"totalTariffMoney":0,"ticketMoney":0,"freightDiscount":0,"checked":false,"deliveryServiceAndDeliveryCharge":0,"goodsGroupUpdateTime":"2022-08-26 16:32:43 0935","index":0,"orderPay":112.9,"baseDeliveryCharge":0,"seckillFlag":false,"totalcheckedGoodsAmount":2,"pricechange":false,"totalGoodsAmount":6,"certification":false,"showOrderDiscount":0,"groupName":"","foodBoxPrice":0,"goodsGroupList":[{"orderTypeCode":"25","showOrderAmount":0,"hgCheckedNumber":0,"groupId":"53415-1","goodsList":[{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":41.9,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000401985001_01_1006.jpg","goodsName":"多芬(Dove) 鲜泽水润清爽水润沐浴乳 720ml","ifOnlyPickup":"0","showSalePrice":41.9,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"sType":"1","stor":17,"limitBuySum":-1,"kdjShopId":"007780","currPrice":0,"if7Refund":"0","reduceAmout":0,"promotionPrice":41.9,"totalPrice":41.9,"goodsId":"167030","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"6308852a7c4ba900386c40ea","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":41.9,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-26 16:32:43 0935","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 23:59:59","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2018-06-13 18:39:14","sdName":"多芬鲜泽水润清爽水润沐浴乳","depositDeductMoney":0,"brandName":"三叶草","kdjSourceShopId":"007780","kdjmerchantID":"2020007780ENT23234","personPriceList":[{"salePrice":41.9,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":0.0008,"tax":"0.13","pricechange":false,"globalType":"0","isDelevery":"1","barCode":"6902088312447","goodsType":"1","normalSalePrice":41.9,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/167030.html","finalPaymentMoney":0,"_id":"6308852a7c4ba900386c40ea","brandSid":"100178","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":41.9,"promotionExpandMoney":0,"supplierId":"-1","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"102004","preBuyFlag":"0","popDetails":[{"xyMakeUpCount":0,"xyCount":0,"orderLimit":0,"xyMakeUpAmount":0,"discountAmount":0,"popName":"满减4月13日1400","isJoin":"0","promotionConditionType":"1","activityId":"0","promotionDiscount":0,"qtyCondition":0,"conditionAmount":0,"labelDesc":"满减4月13日1400","moneyCondition":0,"popType":"1","isCrossShoppeSupport":"1","promotionDiscountType":"1","fqConditionAmount":0,"popDesc":"满减4月13日1400","isMatch":false,"memberLimit":0,"popTimes":1,"maxSkus":0,"popRuleId":"53415","isGroupPop":"0","maxQty":0,"promotionLimit":0}],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"16679","activeCode":"","backChange":0,"ifCanBuy":"1","editable":"1","measureUnit":"瓶","comsGoodsCode":"0401985001","mdmGoodsSid":"20000401985001","totalWeight":0.001,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":1,"activityId":"0","deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":false,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":1,"popTimes":0,"groupName":"","comSid":"2000","maxSkus":0,"popRuleId":"53415","totalGoodsNumber":1,"hasSelfSupportGoods":true,"groupDes":"满减4月13日1400","promotionLimit":0,"newOrderPay":0,"xyMakeUpCount":0,"groupType":"21","xyCount":0,"popTypeMark":1,"xyMakeUpAmount":0,"promotionConditionType":"1","promotionDiscount":0,"orderAmount":0,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":1,"isCrossShoppeSupport":"1","assignFlag":"0","promotionDiscountType":"1","tariffAmount":0,"priceType":"25","updateTime":"2022-08-26 16:32:43 0935","orderPay":0,"totalcheckedGoodsAmount":0,"activityMark":"1","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0,"isGroupPop":"0","totalGoodsEffectAmount":1,"totalcheckedGoodsNumber":0,"determineDateTimeId":"","activityName2":"满减4月13日1400","did":"","basketMark":"0"},{"orderTypeCode":"25","showOrderAmount":0,"hgCheckedNumber":0,"groupId":"0000--1-1012000001-1-1null","goodsList":[{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":8907.19,"freightMoney":0,"goodsOriginalNumber":2,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://img11.st.iblimg.com/goods-5/2017/02/42713_@1_@200X200.jpg","goodsName":"马来西亚进口 福多巧克力瑞士卷 108g","ifOnlyPickup":"0","showSalePrice":8907.19,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"sType":"1","stor":964,"limitBuySum":-1,"kdjShopId":"007780","currPrice":0,"if7Refund":"0","reduceAmout":0,"promotionPrice":8907.19,"totalPrice":17814.38,"goodsId":"72493","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"6308820d7c4ba900386c4079","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":8907.19,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-26 16:19:27 0854","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 10:10:10","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"minOrder":2,"futuresType":"0","totalCapacity":0,"goodsNumber":2,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2016-09-09 09:19:27","sdName":"福多巧克力瑞士卷","depositDeductMoney":0,"brandName":"福多","kdjSourceShopId":"007780","kdjmerchantID":"2020007780ENT23234","personPriceList":[{"salePrice":8907.19,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":0.11,"tax":"0.13","pricechange":false,"globalType":"0","isDelevery":"1","barCode":"9556023522650","goodsType":"1","bl_ad":"20003_-_18709_-_1","normalSalePrice":8907.19,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/72493.html","finalPaymentMoney":0,"_id":"6308820d7c4ba900386c4079","brandSid":"107094","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":8907.19,"promotionExpandMoney":0,"supplierId":"-1","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"102685","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"16001","activeCode":"","backChange":0,"ifCanBuy":"1","editable":"1","measureUnit":"盒","comsGoodsCode":"0245518001","mdmGoodsSid":"20000245518001","totalWeight":0.22,"logisticsType":"01"},{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":8000,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"activityRuleForProm":"21091720114745","goodsPicUrl":"https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_1861355871_200x200.jpg","goodsName":"乐事孜然爆羊排味薯片","ifOnlyPickup":"0","showSalePrice":1111,"checkedOriginal":false,"activityTypeForProm":"35","isPopEffective":"1","processingTime":0,"sType":"1","stor":96,"limitBuySum":1,"kdjShopId":"007780","currPrice":0,"if7Refund":"0","reduceAmout":0,"promotionPrice":1111,"totalPrice":1111,"goodsId":"162680","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"6308820d7c4ba900386c4078","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":8000,"priceType":"35","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-26 16:19:26 0846","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 10:10:10","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2016-09-09 09:21:55","sdName":"乐事孜然爆羊排味薯片","depositDeductMoney":0,"brandName":"乐事","kdjSourceShopId":"007780","kdjmerchantID":"2020007780ENT23234","personPriceList":[{"salePrice":1111,"limitBuySum":1,"priceType":"35","limitBuyPersonSum":10,"activeCode":"21091720114745"},{"salePrice":8000,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":0.1,"tax":"0.13","pricechange":false,"globalType":"0","isDelevery":"1","barCode":"6924743918436","goodsType":"1","bl_ad":"20003_-_18709_-_1","normalSalePrice":8000,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/162680.html","finalPaymentMoney":0,"_id":"6308820d7c4ba900386c4078","brandSid":"201389","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":10,"addGoodsPrice":1111,"promotionExpandMoney":0,"supplierId":"-1","rule":"21091720114745","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":6889,"freeFreight":false,"categoryBackIds":"102662","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"15969","activeCode":"21091720114745","backChange":0,"ifCanBuy":"1","editable":"1","measureUnit":"袋","comsGoodsCode":"0809894001","mdmGoodsSid":"20000809894001","totalWeight":0.1,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":3,"deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":false,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":2,"popTimes":0,"groupName":"","comSid":"2000","maxSkus":0,"totalGoodsNumber":3,"promotionConditionAmount":0,"hasSelfSupportGoods":true,"groupDes":"","promotionLimit":0,"newOrderPay":0,"xyMakeUpCount":0,"groupType":"21","xyCount":0,"popTypeMark":0,"xyMakeUpAmount":0,"promotionDiscount":0,"orderAmount":0,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":0,"assignFlag":"0","tariffAmount":0,"priceType":"25","updateTime":"2022-08-26 16:19:27 0854","orderPay":0,"totalcheckedGoodsAmount":0,"activityMark":"0","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0,"isGroupPop":"0","totalGoodsEffectAmount":2,"totalcheckedGoodsNumber":0,"determineDateTimeId":"","did":"","basketMark":"0"},{"orderTypeCode":"25","showOrderAmount":0,"hgCheckedNumber":0,"groupId":"0000-6336-1012000001-1-1null","goodsList":[{"fid":"23035","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"36934","type":"25","oldSalePrice":0.2,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://Img.st.iblimg.com/fast2homemethod-4/offlinegoods/goods/SP_466044064_200x200.jpg","goodsName":"三牛奶盐苏打 散装三牛奶盐苏打 散装三牛奶盐苏打 散装三牛奶盐苏打 散装三牛奶盐苏打 散装三牛奶盐苏打 散装","ifOnlyPickup":"0","showSalePrice":67,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"isFromButtomShop":"1","sType":"1","stor":4727,"limitBuySum":-1,"kdjShopId":"200021","currPrice":0,"if7Refund":"0","reduceAmout":0,"promotionPrice":67,"totalPrice":67,"goodsId":"3364200","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"6305d99272ec7b004535f691","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"tdLable":"48H内发货","mpReduceMoney":0,"salePrice":67,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-24 15:56:03 0280","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 23:59:59","promBillNo":0,"goodsPopDiscount2":0,"yunType":"2","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":0,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2021-12-06 10:49:24","sdName":"三牛奶盐苏打","depositDeductMoney":0,"brandName":"茶花","kdjSourceShopId":"007780","kdjmerchantID":"20402000211","personPriceList":[{"salePrice":67,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":6,"tax":"0.13","sendDays":"2","pricechange":true,"globalType":"0","isDelevery":"1","barCode":"0000007707667","goodsType":"1","bl_ad":"AKCLASSIFY_-_15660_-_12","normalSalePrice":67,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/3364200.html","finalPaymentMoney":0,"_id":"6305d99272ec7b004535f691","brandSid":"178761","storeIndustrySid":"2040","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":0.2,"promotionExpandMoney":0,"supplierId":"6336","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"212037","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"16052","activeCode":"","backChange":0,"ifCanBuy":"1","editable":"1","measureUnit":"kg","comsGoodsCode":"90770766001","mdmGoodsSid":"200090770766001","totalWeight":6,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":1,"deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":false,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":1,"popTimes":0,"groupName":"","comSid":"2000","maxSkus":0,"totalGoodsNumber":1,"promotionConditionAmount":0,"hasSelfSupportGoods":true,"groupDes":"","promotionLimit":0,"newOrderPay":0,"xyMakeUpCount":0,"groupType":"21","xyCount":0,"popTypeMark":0,"xyMakeUpAmount":0,"promotionDiscount":0,"orderAmount":0,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":0,"assignFlag":"0","tariffAmount":0,"priceType":"25","updateTime":"2022-08-24 15:56:03 0280","orderPay":0,"totalcheckedGoodsAmount":0,"activityMark":"0","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0,"isGroupPop":"0","totalGoodsEffectAmount":1,"totalcheckedGoodsNumber":0,"determineDateTimeId":"","activityName2":"满减4月13日1400","did":"","basketMark":"0"},{"orderTypeCode":"25","showOrderAmount":99,"hgCheckedNumber":0,"groupId":"0000-6336-1013000001-1-1null","goodsList":[{"fid":"12935","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"36339","type":"25","oldSalePrice":99,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://Img.st.iblimg.com/fast2homemethod-4/offlinegoods/goods/SP_77581715_200x200.jpg","goodsName":"日清草莓夹心黑可可 300g","ifOnlyPickup":"0","showSalePrice":99,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"isFromButtomShop":"1","sType":"1","stor":20,"limitBuySum":-1,"kdjShopId":"200021","currPrice":0,"if7Refund":"1","reduceAmout":0,"promotionPrice":99,"totalPrice":99,"goodsId":"3364201","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"0","goodsLineNbr":"6305d98b72ec7b004535f690","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"tdLable":"48H内发货","mpReduceMoney":0,"salePrice":99,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-24 15:55:56 0520","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 23:59:59","promBillNo":0,"goodsPopDiscount2":0,"yunType":"2","basketLimitGoodsNum":-1,"groupId":"1013000001","deliveryCharge":0,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":1,"tariffRate":"0","stockStatus":"0","checked":true,"depositStartTime":"2021-12-06 10:49:24","sdName":"日清草莓夹心黑可可","depositDeductMoney":0,"brandName":"茶花","kdjSourceShopId":"007780","kdjmerchantID":"20402000211","personPriceList":[{"salePrice":99,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":0.05,"tax":"0.13","sendDays":"1","pricechange":false,"globalType":"0","isDelevery":"1","barCode":"6909588032929","goodsType":"1","bl_ad":"AKCLASSIFY_-_15784_-_12","normalSalePrice":99,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/3364201.html","finalPaymentMoney":0,"_id":"6305d98b72ec7b004535f690","brandSid":"178761","storeIndustrySid":"2040","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":99,"promotionExpandMoney":0,"supplierId":"6336","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"212037","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"15974","activeCode":"","backChange":0,"couponDetails":[],"ifCanBuy":"1","editable":"1","measureUnit":"盒","comsGoodsCode":"90770879001","orderLineNbr":"3364201","mdmGoodsSid":"200090770879001","totalWeight":0.05,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":1,"deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":true,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":1,"popTimes":0,"groupName":"","comSid":"2000","maxSkus":0,"totalGoodsNumber":1,"promotionConditionAmount":0,"hasSelfSupportGoods":true,"groupDes":"","promotionLimit":0,"newOrderPay":99,"xyMakeUpCount":0,"groupType":"21","xyCount":0,"popTypeMark":0,"xyMakeUpAmount":0,"promotionDiscount":0,"orderAmount":99,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":0,"assignFlag":"0","tariffAmount":0,"priceType":"25","updateTime":"2022-08-24 15:55:56 0520","orderPay":99,"totalcheckedGoodsAmount":1,"activityMark":"0","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0.05,"isGroupPop":"0","totalGoodsEffectAmount":1,"totalcheckedGoodsNumber":1,"determineDateTimeId":"","activityName2":"满减4月13日1400","did":"","basketMark":"0"},{"orderTypeCode":"25","showOrderAmount":13.9,"hgCheckedNumber":0,"groupId":"0000-26230-1012000001-1-1null","goodsList":[{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":13.9,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000499446001_01_1006.jpg","goodsName":"三全凌黑糯米汤圆","ifOnlyPickup":"0","showSalePrice":13.9,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"sType":"1","stor":20,"limitBuySum":-1,"kdjShopId":"007780","currPrice":0,"if7Refund":"2","reduceAmout":0,"promotionPrice":13.9,"totalPrice":13.9,"goodsId":"1095452","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"630467a327835b0045c320b0","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":13.9,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-23 13:37:40 0154","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 23:59:59","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":4,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":1,"tariffRate":"0","stockStatus":"0","checked":true,"depositStartTime":"2018-06-13 18:39:20","sdName":"三全凌黑糯米汤圆","depositDeductMoney":0,"brandName":"茶花","kdjSourceShopId":"007780","kdjmerchantID":"2020007780ENT23234","personPriceList":[{"salePrice":13.9,"limitBuySum":-1,"priceType":"0","limitBuyPersonSum":-1}],"depositMoney":0,"weight":0.0005,"pricechange":false,"globalType":"0","isDelevery":"1","barCode":"6908791000121","goodsType":"1","bl_ad":"20003_-_18709_-_1","normalSalePrice":13.9,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/1095452.html","finalPaymentMoney":0,"_id":"630467a327835b0045c320b0","brandSid":"178761","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":13.9,"promotionExpandMoney":0,"supplierId":"26230","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"103451","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","singleDiscountPrice":0,"categoryid":"18478","activeCode":"","backChange":0,"couponDetails":[],"ifCanBuy":"1","editable":"1","comsGoodsCode":"0499446001","orderLineNbr":"1095452","mdmGoodsSid":"20000499446001","totalWeight":0.001,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":1,"deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":true,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":1,"popTimes":0,"groupName":"","comSid":"2000","maxSkus":0,"totalGoodsNumber":1,"promotionConditionAmount":0,"hasSelfSupportGoods":true,"groupDes":"","promotionLimit":0,"newOrderPay":13.9,"xyMakeUpCount":0,"groupType":"21","xyCount":0,"popTypeMark":0,"xyMakeUpAmount":0,"promotionDiscount":0,"orderAmount":13.9,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":0,"assignFlag":"0","tariffAmount":0,"priceType":"25","updateTime":"2022-08-23 13:37:40 0154","orderPay":13.9,"totalcheckedGoodsAmount":1,"activityMark":"0","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0.0005,"isGroupPop":"0","totalGoodsEffectAmount":1,"totalcheckedGoodsNumber":1,"determineDateTimeId":"","activityName2":"满减4月13日1400","did":"","basketMark":"0"}],"totalGoodsNumber":7,"orderDiscount":0,"totalWeight":0,"isShowIf7Refund":"0","totalGoodsEffectAmount":6,"totalcheckedGoodsNumber":2},{"newOrderPay":0,"isCheckBLCard":"0","groupType":"20","showOrderAmount":0,"freightLessPrice":0,"groupId":"0000-20-26535","deliveryCharge":0,"freeFreightMoney":0,"totalGoodsEffectNumber":0,"merchantName":"失效商品","orderAmount":0,"originDeliveryCharge":0,"freightLessWeight":0,"checkLevel":"1","merchantId":"","totalGoodsNum":0,"quickBuyFlag":"0","deliveryServiceCharge":0,"totalTariffMoney":0,"ticketMoney":0,"freightDiscount":0,"checked":true,"deliveryServiceAndDeliveryCharge":0,"goodsGroupUpdateTime":"","index":1,"orderPay":0,"baseDeliveryCharge":0,"seckillFlag":false,"totalcheckedGoodsAmount":0,"pricechange":false,"totalGoodsAmount":2,"certification":false,"showOrderDiscount":0,"groupName":"失效商品","foodBoxPrice":0,"goodsGroupList":[{"showOrderAmount":0,"hgCheckedNumber":0,"groupId":"0000-20","goodsList":[{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":27,"freightMoney":0,"goodsOriginalNumber":1,"goodsGiftNumber":0,"price":0,"activityRuleForProm":"22090120389594","goodsPicUrl":"https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000787316001_01_1006.jpg","goodsName":"阿明 南瓜子 180g/袋","ifOnlyPickup":"0","showSalePrice":27,"checkedOriginal":false,"activityTypeForProm":"34","isPopEffective":"1","processingTime":0,"sType":"1","stor":0,"limitBuySum":-1,"kdjShopId":"007780","currPrice":0,"if7Refund":"0","promotionPrice":27,"totalPrice":27,"goodsId":"86608","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"630dbab3f3029300381b175f","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":27,"priceType":"34","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-30 15:22:28 0068","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2022-09-04 23:59:59","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":6,"futuresType":"0","totalCapacity":0,"goodsNumber":1,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2022-09-01 00:00:00","sdName":"阿明精选南瓜子","depositDeductMoney":0,"brandName":"阿明","kdjmerchantID":"2020007780ENT23234","depositMoney":0,"weight":0.18,"tax":"0.09","pricechange":false,"globalType":"0","isDelevery":"1","barCode":"6903406653044","goodsType":"1","bl_ad":"AKCLASSIFY_-_15674_-_12","normalSalePrice":27,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/86608.html","finalPaymentMoney":0,"_id":"630dbab3f3029300381b175f","brandSid":"103939","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":27,"promotionExpandMoney":0,"supplierId":"28236","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"102825","preBuyFlag":"0","popDetails":[{"xyMakeUpCount":0,"xyCount":0,"orderLimit":0,"xyMakeUpAmount":0,"discountAmount":0,"popName":"到家满减验证分摊","isJoin":"0","promotionConditionType":"1","activityId":"0","promotionDiscount":0,"qtyCondition":0,"conditionAmount":0,"labelDesc":"到家满减验证分摊","moneyCondition":0,"popType":"1","isCrossShoppeSupport":"1","promotionDiscountType":"1","fqConditionAmount":0,"popDesc":"到家满减验证分摊","isMatch":false,"memberLimit":0,"popTimes":1,"maxSkus":0,"popRuleId":"54314","isGroupPop":"0","maxQty":0,"promotionLimit":0}],"isGift":"0","reduceTag":"0","singleDiscountPrice":0,"categoryid":"16016","activeCode":"22090120389594","backChange":0,"ifCanBuy":"1","editable":"0","measureUnit":"袋","comsGoodsCode":"0787316001","mdmGoodsSid":"20000787316001","totalWeight":0.18,"logisticsType":"01"},{"fid":"26535","shoppingCartType":"5","discountRate":0,"isNewAdd":"0","rid":"37103","type":"25","oldSalePrice":0.5,"freightMoney":0,"goodsOriginalNumber":99,"goodsGiftNumber":0,"price":0,"goodsPicUrl":"https://img.st.iblimg.com/goods-14/2000/2016/11/SP_2000_20000189951001_01_1006.jpg","goodsName":"越南进口 丰灵TIPO牛奶味面包干 152g","ifOnlyPickup":"0","showSalePrice":10,"checkedOriginal":false,"isPopEffective":"1","processingTime":0,"sType":"1","stor":0,"limitBuySum":-1,"kdjShopId":"007780","currPrice":0,"if7Refund":"0","promotionPrice":10,"totalPrice":990,"goodsId":"70704","capacity":0,"referencePrice":0,"checkLevel":"1","isMergeTemplete":"1","goodsLineNbr":"63071d8e72ec7b0045360778","userPrice":0,"handPrice":0,"isTakenBySelf":"1","tariff":0,"counpDisCount":0,"showGoodsDiscount":0,"mpReduceMoney":0,"salePrice":10,"priceType":"0","virtualSellFlag":"0","hasActivity":"1","updateTime":"2022-08-26 16:19:58 0222","userId":100000002749975,"isCLFlag":false,"depositEndTime":"2099-12-31 10:10:10","promBillNo":0,"goodsPopDiscount2":0,"yunType":"1","basketLimitGoodsNum":-1,"groupId":"1012000001","deliveryCharge":2.47,"shoppingCartId":"93887c58-1fa2-4247-a9ea-d2f4d541f394","promotionMark":"0","proSellBit":6,"futuresType":"0","totalCapacity":0,"goodsNumber":99,"saleSum":0,"tariffRate":"0","stockStatus":"0","checked":false,"depositStartTime":"2016-09-09 09:19:21","sdName":"丰灵TIPO牛奶味面包干","depositDeductMoney":0,"brandName":"到家","kdjSourceShopId":"007780","kdjmerchantID":"2020007780ENT23234","depositMoney":0,"weight":0.00002,"tax":"0.13","pricechange":true,"globalType":"0","isDelevery":"1","barCode":"8934760212033","goodsType":"1","bl_ad":"20003_-_18709_-_1","normalSalePrice":10,"djSendType":"3","comSid":"2000","goodsUrl":"https://product.st.bl.com/70704.html","finalPaymentMoney":0,"_id":"63071d8e72ec7b0045360778","brandSid":"200687","storeIndustrySid":"2020","isWeight":"0","limitBuyPersonSum":-1,"addGoodsPrice":0.5,"promotionExpandMoney":0,"supplierId":"-1","kdjSourceMerchantId":"2020007780ENT23234","goodsDiscount":0,"freeFreight":false,"categoryBackIds":"102843","preBuyFlag":"0","popDetails":[],"isGift":"0","kdjSourceStoreIndustrySid":"2020","reduceTag":"0","singleDiscountPrice":0,"categoryid":"16001","activeCode":"","backChange":0,"ifCanBuy":"1","editable":"0","measureUnit":"包","comsGoodsCode":"0189951001","mdmGoodsSid":"20000189951001","totalWeight":0.002,"logisticsType":"01"}],"deliveryCharge":0,"totalGoodsEffectNumber":0,"deliveryServiceCharge":0,"freightDiscount":0,"ticketMoney":0,"checked":true,"oringinDeliveryCharge":0,"promBillNoList":[],"baseDeliveryCharge":0,"isMatch":false,"isDelevery":"0","totalGoodsAmount":2,"popTimes":0,"groupName":"失效商品","comSid":"2000","maxSkus":0,"totalGoodsNumber":100,"promotionConditionAmount":0,"hasSelfSupportGoods":true,"groupDes":"","promotionLimit":0,"newOrderPay":0,"xyMakeUpCount":0,"groupType":"20","xyCount":0,"popTypeMark":0,"xyMakeUpAmount":0,"promotionDiscount":0,"orderAmount":0,"isTakenBySelf":"0","conditionAmount":0,"groupDiscountMoney":0,"popType":0,"assignFlag":"0","tariffAmount":0,"updateTime":"","orderPay":0,"totalcheckedGoodsAmount":0,"activityMark":"0","showOrderDiscount":0,"orderDiscount":0,"totalWeight":0,"isGroupPop":"0","totalGoodsEffectAmount":0,"totalcheckedGoodsNumber":0,"determineDateTimeId":"","did":"","basketMark":"0"}],"totalGoodsNumber":100,"orderDiscount":0,"totalWeight":0,"isShowIf7Refund":"0","totalGoodsEffectAmount":0,"totalcheckedGoodsNumber":0}],"deliveryCharge":0,"freeFreightMoney":198,"totalGoodsEffectNumber":7,"orderAmount":112.9,"ticketMoney":0,"freightDiscount":0,"checked":false,"topPopList":[],"oringinDeliveryCharge":0,"showGoodsDiscount":0,"showCouponDiscount":0,"tariffAmount":0,"updateTime":"2022-08-30 15:22:28 0068","orderPay":112.9,"totalcheckedGoodsAmount":2,"totalGoodsAmount":8,"freightRuleDes":"满198元,减免6元; 0-2.5km,每km收费:1.1元; 2.5-5km,每km收费:2.1元; 5-10km,每km收费:3.1元; 0-3.5kg,每kg收费:1元; 3.5-5kg,每kg收费:2元; 5-999kg,每kg收费:3.1元; 10-14点,每单收费:1元; 14-16点,每单收费:5元; 小心点,每单收费:8.8元;","showOrderDiscount":0,"djSendType":"0","orderDiscount":0,"totalWeight":0,"totalGoodsNumber":107,"totalGoodsEffectAmount":6,"totalcheckedGoodsNumber":2,"kdjStoreInfo":{"kdjShopId":"007780","storeIndustrySid":"2020"}}}