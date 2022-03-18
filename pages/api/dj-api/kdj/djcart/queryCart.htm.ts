import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_12_18 as mockData } from '@dj/queryCart.htm'

export default (req: NextApiRequest, res: NextApiResponse) => {
	const { page } = req.body

	const { obj: tmp_obj, ...others_mockData } = mockData
	const { goodsGroupDtoList, topPopList, kdjStoreInfo, ...other_obj } = tmp_obj
	const { freightImbodyMap, goodsGroupList, ...other_goodsGroupList } = goodsGroupDtoList[0]
	const obj = {
		obj: {
			goodsGroupDtoList: [
				{
					freightImbodyMap,
					goodsGroupList: goodsGroupList.map(t => {
						const { goodsList, promBillNoList, ...others_t } = t
						return {
							promBillNoList,
							...others_t,
							goodsList: goodsList.map(t => {
								const { attrList, giftInfoList, personPriceList, popDetails, couponDetails, ...others_t } = t
								return {
									personPriceList: [
										{
											"salePrice": 10.00,
											"limitBuySum": -1,
											"priceType": "0",
											"limitBuyPersonSum": -1
										}, {
											"salePrice": 10.00,
											"limitBuySum": -1,
											"priceType": "0",
											"limitBuyPersonSum": -1
										}
									],
									popDetails,
									couponDetails,
									attrList: [
										{
											name: 'sku.name',
											value: 'sku.value'
										}
									],
									/// 赠品列表:可更换
									giftInfoList: [
										{
											gifName: 'gifName233',
											goodsNumber: '233',
											gifGoodsId: '23',
											goodsPicUrl: '',
											parentGoodsId: ''
										}, {
											gifName: 'gifName233',
											goodsNumber: '233',
											gifGoodsId: '23',
											goodsPicUrl: '',
											parentGoodsId: ''
										}
									],
									/// 营促销信息
									popDetails,
									...others_t,
									/// 换购
									// typePop: '16',
									goodsNumber: '233',
									/// 库存数
									// stor: '200',
									// stor: '-1',
									limitBuySum: '200',
									// isFailureGoods: '2',
									/// 销售价
									normalSalePrice: '233',
									/// 0-非篮筐 1-篮筐
									basketMark: '0',
									// reduceTag: '1',
									limitBuyPersonSum: '233',
									/// plus
									priceType: '35',
									/// 套餐
									goodsType: '11',
									/// 处方药
									comSid: '6000',
									goodsType: '30',
									/// globalType:0-非全球购 8-全球购物(一般贸易) 85-直邮 86-保税
									globalType: '85',
									/// 托底
									isFromButtomShop: '1',
								}
							}),
						};
					}),
					...other_goodsGroupList
				},
				goodsGroupDtoList[1],
				goodsGroupDtoList[2],
			].filter(t => t),
			topPopList: [
				...topPopList
			],
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
	// obj.obj.goodsGroupDtoList[0].goodsGroupList[0].typePop = '16'
	// obj.obj.goodsGroupDtoList[0].goodsGroupList[0].reduceTag = '1'
	// obj.obj.goodsGroupDtoList[0].goodsGroupList[0].limitBuyPersonSum = '21'

	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, resolve), 1000)
	})
		.then(() => {
			res.status(200).json(obj)
		})
}
