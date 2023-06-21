export const mockDJCart = {
  t00990001优惠券风控:{
    "success": true,
    "msg": "请验证滑块",
    "resCode": "00990001",
    "riskType": "physcialOrder",
    "obj": {
      "r-lot-number": "RVIr2u7Z7NUc4cjdPi98+6byJ7qobYMhgsjqY5pmZGX3t2OsvU6/tEjEKrWjzc9bgKY9OFWJ2Myh/HLnWJI/qWnWHMSGjJfpuyP9jbxJi3stFBOTqHtEZG8Z8c7tjdGwmFT1jCy3lXCHKj95ccnYG5TxNz47d+RdEz0YYpp1fjdio4FFFuf1hgTg==",
      "r-verify-mode": "slide"
    }
  },
  /// 支付风控
  t00011支付风控: {
    "success": false,
    "resCode": "00011",
    "obj": {
      "isRisk": "1",
      "riskType": "payment",
      "smsSend": "0",
      "hidePhone": "185****6314"
    }
  },
  /// 支付风控 -> 验证码错误
  t00012支付风控验证码错误: {
    "success": false,
    "resCode": "00012",
    msg: '验证码错误',
    "obj": {
      "hidePhone": "185****6314"
    }
  },
	// 没有支付密码，设置过密码，需要校验密码 code=00013
	t00013校验密码: {
		"success": false,
		"msg": "请输入支付密码!",
		"resCode": "00013"
	},
	// 没有支付密码，未设置过密码，设置密码弹框 code=00014
	t00014未设置过密码: {
		"success": false,
		"msg": "您尚未设置过密码!",
		"resCode": "00014"
	},
	// 有支付密码，校验支付密码，校验不通过 code=00015 msg=密码不正确
	t00015校验支付密码错误: {
    "success": false,
    "msg": "密码错误,还剩2次机会",
    "resCode": "00015"
  },
	t00015校验支付密码错误被锁定: {
    "success": false,
    "msg": "支付密码被锁定，次日凌晨自动解锁",
    "resCode": "00015"
  },
	t00100000: {
    "success": true,
    "msg": "发生错误2",
    "resCode": "00100000"
  },
}
export const mockData = {
  "success": true,
  "msg": "提交订单成功！",
  "resCode": "200",
  "statusCode": "200",
  "obj": {
    "shopIndustrySid": "2040",
    "orderTypeCode": "25",
    "needMoney": 76.61,
    "omsNotifyUrl": "http://mc.cart.st.bl.com:9081/iokblShoppingCartApi/cart/payResponse.htm?dddbh=SIT990901698503",
    "activeTime": "60",
    "depositMoney": 0,
    "allNeedMoney": "76.61",
    "payNo": "SIT990901698503",
    "saleTime": "2021-12-09 13:51:43",
    "orderSourceCode": "1",
    "omsNotifyUrlByOrder": "http://oms.st.bl.com:7210/oms-core/order/payedCallBack.htm",
    "effectiveGoodsAmount": 0.00,
    "orderNoList": [{
      "orderTypeCode": "1",
      "orderNo": "LAE20211209322318",
      "success": "1",
      "sendCost": 15,
      "activeTime": "120",
      "detailPayTypeList": {},
      "packageId": "1025900200",
      "orderItemNoList": ["LAE202112093223180101"]
    }, {
      "orderTypeCode": "25",
      "orderNo": "LAZ20211209322319",
      "success": "1",
      "sendCost": 10,
      "activeTime": "60",
      "detailPayTypeList": {},
      "packageId": "1012000001",
      "orderItemNoList": ["LAZ202112093223190101", "LAZ202112093223190102", "LAZ202112093223190103"]
    }],
    "presctiptionSwitch": 1,
    "memberId": "100000002749975"
  }
}
