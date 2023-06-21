/// -1:不可开票,0:未申请,1:已申请,2成功,3失败,4排队中
export const hackData_Invoice = {
  t_未完成: {
    "success": false,
    "msg": "您的订单未完成，请稍后再试!",
    "resCode": "00100051"
  },
  t__1不可开票: {
    "success": true,
    "resCode": "00100000",
    "obj": {
      "invoiceH5Url": null,
      "invoiceFlag": "-1",
      "orderTypeCode": "25",
      "orderNo": "LAZ20230612384913",
      "orderTime": "2023-06-12 18:58:48",
      "freightInvoiceUrl": "",
      "checkMsg": "订单整单使用礼品卡，优惠券，积分支付，或整单ECP支付，不支持开票!",
      "statusDesc": "暂不支持开票",
      "invoiceUrl": ""
    }
  },
  t_0未申请: {
    "success": true,
    "resCode": "00100000",
    "obj": {
      "invoiceH5Url": null,
      "invoiceFlag": "0",
      "orderTypeCode": "25",
      "orderNo": "LAZ20221230370249",
      "orderTime": "2022-12-30 10:54:49",
      "freightInvoiceUrl": "",
      "statusDesc": "申请开票",
      "invoiceUrl": ""
    }
  },
  t_1已申请: {
    "success": true,
    "resCode": "00100000",
    "obj": {
      "invoiceH5Url": null,
      "invoiceFlag": "1",
      "orderTypeCode": "25",
      "checkMsg": "该订单已申请开票！",
      "orderNo": "LAZ20230609384804",
      "orderTime": "2023-06-09 17:38:47",
      "freightInvoiceUrl": "",
      "statusDesc": "发票申请已提交，30分钟后可查看",
      "invoiceUrl": ""
    }
  },
  t_2成功: {
    "success": true,
    "resCode": "00100000",
    "obj": {
      "invoiceH5Url": "https://mh5.bl.com/h5.html#/costInvoice?simg=https://img25.iblimg.com/invoice-27/504780335.jpg",
      "invoiceFlag": "2",
      "orderTypeCode": "25",
      "checkMsg": "该订单已申请开票！",
      "orderNo": "LAZ20230221375732",
      "orderTime": "2023-02-21 19:00:45",
      "freightInvoiceUrl": "",
      "invoiceUrl": "https://img25.iblimg.com/invoice-27/504780335.jpg"
    }
  },
  t_3失败: {
    "success": true,
    "resCode": "00100000",
    "obj": {
      "invoiceH5Url": null,
      "invoiceFlag": "3",
      "orderTypeCode": "25",
      "checkMsg": "该订单已申请开票！",
      "orderNo": "LWZ20230506381314",
      "orderTime": "2023-05-06 14:07:13",
      "freightInvoiceUrl": "",
      "statusDesc": "开票失败，请联系客服",
      "invoiceUrl": ""
    }
  },
  t_4排队中: {}
}
