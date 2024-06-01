import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_2022_01_20 } from '@dj/v2.getOrderDetail'
import { hack_Order, mockData_OrderComponent, mockData_订单, orderDetail_failure } from '@dj/hack.order'
import { getCurrentDateBefore } from '@tools/common'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...obj_others } = mockData_订单.tA1.t_多商品_配送方式相同.t_待付款.t订单详情

  const { orderList, allOrderList, showBottonList, showDetailBottonList, logisticsHistory, ...obj_tmp_others } = obj
  const orderTime = getCurrentDateBefore()
  let data = {
    ...obj_others,
    obj: {
      ...obj_tmp_others,
      orderList: orderList.slice(0, 1).map((t1, idx1) => {
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
          ...t1_others
        } = t1
        if(idx1 === 0) {
          t1.medicalInsuranceFlag = 0
        } else {
          t1.medicalInsuranceFlag = 1
        }
        return {
          ...t1_others,
          orderDetailList: orderDetailList.map((t2, idx2) => {
            if (idx2 === 0) {
                t2 = {
                    ...t2,
                    goodsType: '30',
                    // goodsType: '29',
                    goodsName: Array(2).fill('马来西亚进口 福多巧克力瑞士卷 108g').join(','),
                    reWeightMoney: '233',
                    purchaseType: '16',
                    priceType: '34',
                    medicineDirectionShow: 1,
                    goodsStan: 'goodsStan 22222',
                    goodsColor: 'goodsColor 2333',
                    /// 是否可售后
                    ///     0: 不展示(默认)
                    ///     1: 可售后
                    ///     2: 所有商品已售后
                    ///     3: 商品已超售后期
                    canReturnFlag: 3,
                }
            } else if (idx2 === 1) {
              t2 = {
                  ...t2,
                  // goodsType: '30',
                  // // goodsType: '29',
                  // goodsName: Array(2).fill('马来西亚进口 福多巧克力瑞士卷 108g').join(','),
                  // reWeightMoney: '233',
                  // purchaseType: '16',
                  // priceType: '34',
                  // medicineDirectionShow: 1,
                  // goodsStan: 'goodsStan 22222',
                  // goodsColor: 'goodsColor 2333',
                  /// 是否可售后
                  ///     0: 不展示(默认)
                  ///     1: 可售后
                  ///     2: 所有商品已售后
                  ///     3: 商品已超售后期
                  // canReturnFlag: 3,
              }
            } else if (idx2 === 2) {
              t2 = {
                  ...t2,
                  // goodsType: '30',
                  // // goodsType: '29',
                  // goodsName: Array(2).fill('马来西亚进口 福多巧克力瑞士卷 108g').join(','),
                  reWeightMoney: '233',
                  // purchaseType: '16',
                  // priceType: '34',
                  // medicineDirectionShow: 1,
                  // goodsStan: 'goodsStan 22222',
                  // goodsColor: 'goodsColor 2333',
                  /// 是否可售后
                  ///     0: 不展示(默认)
                  ///     1: 可售后
                  ///     2: 所有商品已售后
                  ///     3: 商品已超售后期
                  // canReturnFlag: 3,
              }
            }
            return t2;
        }),
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
          // orderStatus: "1005",
          // showRiderMap: 1,
          // riderChannel: "LHDJ",
          // riderChannel: "",
          // orderStatusDesc: "配送中...233",
          orderStatus: '1007',
          orderTypeCode: '58',
          fulfillStatusDesc: '您订单中包含处方药，需凭处方预约取药，请待医生开具处方药后，予以支付',
          // freightInfos: hack_Order.freightInfos,
          // orderPayList: mockData_OrderComponent.orderPayList,
          sendCost: 3.14,
          /// 运费
          originSendCost: 3.00,
          deliveryServiceCharge: 3.10,
          discountTransport: 3.11,
          plusDiscountPrice: 3.12,
          reWeightMoney: 3.13,
          // outFlag: 2,
          // medicalInsuranceFlag: 0,
          medicalInsuranceFlag: t1.medicalInsuranceFlag,
          storeName: '上海市第一医药金陵东路店即时达门店上海市第一医药金陵东路店即时达门店',
        }
      }),
      orderTime,
      allOrderList,
      showBottonList,
      showDetailBottonList,
      logisticsHistory,
      freightInfos: hack_Order.freightInfos,
      orderPayList: mockData_OrderComponent.orderPayList,
      discountTransport: '5.15',
      allSendCost: 4.14,
    },
  }

  // data = orderDetail_failure.t_未查询到订单;
  // data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API


const mockData = {"success":true,"resCode":"00100000","obj":{"parentOrderNo":"SIT1272401737692","allGoodsPrice":219.33,"allSendCost":3,"eDiscount":0,"cashDiscount":0,"activityDiscount":0,"allNeedMoney":222.33,"orderList":[{"plusMember":0,"orderSourceCode":1,"orderTypeCode":"58","orderSubTypeCode":null,"orderNoList":null,"pageNumber":1,"pageSize":10,"orderType":"处方订单","orderNo":"PAP20240424539446","memberId":"100000002749975","mchId":"100090150505415","memberEmail":null,"orderUsername":" ","orderPhone":"18521006314","orderStatusList":null,"orderStatus":"1029","statusPay":null,"startTime":null,"endTime":null,"signTime":null,"groupBuyingNo":null,"saleMoneySum":141.33,"reWeightMoney":0,"sendCost":0,"deliveryServiceCharge":0,"deliveryBaseCost":0,"distanceCost":null,"weightCost":0,"timeCost":null,"extraCost":null,"originSendCost":0,"discountTransport":0,"discountMoneySum":0,"needMoney":141.33,"orderTime":"2024-04-24 11:11:38","receptName":"张","receptPhone":"18521006314","merchantType":"第一医药","merchantNo":null,"merchantName":null,"completionTime":null,"delayCompleteTimes":0,"sendTimeFlag":5,"sendTimeDesc":"24小时内发货","orderStatusDesc":"已取消","orderRefundMonStatus":null,"refundMonList":null,"sendTypeSid":1,"sendType":"送货上门","extrPlaceSid":null,"extrPlace":null,"clientRemark":null,"payMetSid":1,"payMet":"在线支付","receptAddressDetail":"上海市 市辖区 黄浦区 四川南路26号_豫园地铁站6号口步行330米__友谊大厦涉外商务楼_友谊大厦","parentOrderNo":"SIT1272401737692","allNeedMoney":141.33,"aliasOrderNo":null,"extrCode":null,"deliveryNo":null,"refundMonNo":null,"operatorIdList":null,"orderDetailList":[{"itemAmount":42,"showSkuPrice":42,"shopSid":"001456","goodsSid":2260304,"goodsDetSid":"1434969","goodsCode":"3277337","picUrl":"https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_2023759756_200x200.jpg","goodsUrl":null,"goodsName":"宝树堂 复方樟脑乳膏 15g","goodsStan":"100g","goodsColor":null,"integral":0,"oriPrice":null,"salePrice":42,"saleSum":1,"sendSum":null,"totalPrice":null,"refundNum":null,"allowReNum":1,"orderDetailNo":"PAP202404245394460103","stockDetailCodes":null,"cateName":null,"merchantName":null,"discountInfo":null,"merchantId":"60100014561","tax":"0.13","goodsType":"29","isReWeight":null,"reWeightMoney":0,"tariffRate":0,"tariff":0,"overExpress":null,"if7Refund":0,"tariffNo":null,"shipOrigin":null,"measureUnit":"盒","goodsWeight":0.015,"discountAmount":0,"purchaseType":"25","purchaseRule":null,"isDefault":null,"bgCateSid":"212037","importPort":null,"importWarehouse":null,"limitedType":null,"isGift":0,"groupGoodCode":null,"groupGoodsName":null,"goodsGiftRelation":null,"rule":null,"groupName":null,"bl_ad":"200070_-_22597_-_1","isMergeTemplete":"1","isFq":0,"reserveInfo1":null,"reserveInfo2":null,"reserveInfo3":null,"promShopCartMZ":"65e534dbb9cd670038bc1fb7","showDiscountAmount":0,"showSalePrice":42,"payType":null,"barCode":"6930171800052","medicineDirectionShow":0,"price":42,"priceType":"0","activeCode":null,"canReturnFlag":0,"dkSid":null,"dkName":null,"dcSpType":null,"jgSpLineNbr":null,"fwSpLineNbr":null,"qcNbr":null,"serviceGoodsDTO":null,"medicareCateCode":"6930171800052","medicareCountryCode":"6930171800052","medicareOnlineFlag":"0"},{"itemAmount":33.33,"showSkuPrice":33.33,"shopSid":"001456","goodsSid":2268407,"goodsDetSid":"1999218","goodsCode":"3285434","picUrl":"https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_495539419_200x200.jpg","goodsUrl":null,"goodsName":"盐酸伐昔洛韦片0.15g*6s","goodsStan":"0.15g*6s","goodsColor":null,"integral":0,"oriPrice":null,"salePrice":33.33,"saleSum":1,"sendSum":null,"totalPrice":null,"refundNum":null,"allowReNum":1,"orderDetailNo":"PAP202404245394460102","stockDetailCodes":null,"cateName":null,"merchantName":null,"discountInfo":null,"merchantId":"60100014561","tax":"0.13","goodsType":"30","isReWeight":null,"reWeightMoney":0,"tariffRate":0,"tariff":0,"overExpress":null,"if7Refund":0,"tariffNo":null,"shipOrigin":null,"measureUnit":"盒","goodsWeight":0.1,"discountAmount":0,"purchaseType":"25","purchaseRule":null,"isDefault":null,"bgCateSid":"212037","importPort":null,"importWarehouse":null,"limitedType":null,"isGift":0,"groupGoodCode":null,"groupGoodsName":null,"goodsGiftRelation":null,"rule":null,"groupName":null,"bl_ad":"AKCLASSIFY_-_14110_-_12","isMergeTemplete":"1","isFq":0,"reserveInfo1":null,"reserveInfo2":null,"reserveInfo3":null,"promShopCartMZ":"662878496dc0650038baf56e","showDiscountAmount":0,"showSalePrice":33.33,"payType":null,"barCode":"6923528198186","medicineDirectionShow":0,"price":33.33,"priceType":"0","activeCode":null,"canReturnFlag":0,"dkSid":null,"dkName":null,"dcSpType":null,"jgSpLineNbr":null,"fwSpLineNbr":null,"qcNbr":null,"serviceGoodsDTO":null,"medicareCateCode":"6923528198186","medicareCountryCode":"6923528198186","medicareOnlineFlag":"0"},{"itemAmount":66,"showSkuPrice":66,"shopSid":"001456","goodsSid":2269518,"goodsDetSid":"2000277","goodsCode":"3286625","picUrl":"https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_1294116011_200x200.jpg","goodsUrl":null,"goodsName":"板蓝根颗粒10g*20袋","goodsStan":"10g*20袋","goodsColor":null,"integral":0,"oriPrice":null,"salePrice":66,"saleSum":1,"sendSum":null,"totalPrice":null,"refundNum":null,"allowReNum":1,"orderDetailNo":"PAP202404245394460101","stockDetailCodes":null,"cateName":null,"merchantName":null,"discountInfo":null,"merchantId":"60100014561","tax":"0.13","goodsType":"29","isReWeight":null,"reWeightMoney":0,"tariffRate":0,"tariff":0,"overExpress":null,"if7Refund":0,"tariffNo":null,"shipOrigin":null,"measureUnit":"袋","goodsWeight":0.067,"discountAmount":0,"purchaseType":"25","purchaseRule":null,"isDefault":null,"bgCateSid":"212037","importPort":null,"importWarehouse":null,"limitedType":null,"isGift":0,"groupGoodCode":null,"groupGoodsName":null,"goodsGiftRelation":null,"rule":null,"groupName":null,"bl_ad":"AKCLASSIFY_-_14924_-_12","isMergeTemplete":"1","isFq":0,"reserveInfo1":null,"reserveInfo2":null,"reserveInfo3":null,"promShopCartMZ":"65d7040aba7c850038e9a473","showDiscountAmount":0,"showSalePrice":66,"payType":null,"barCode":"6928856300010","medicineDirectionShow":0,"price":66,"priceType":"0","activeCode":null,"canReturnFlag":0,"dkSid":null,"dkName":null,"dcSpType":null,"jgSpLineNbr":null,"fwSpLineNbr":null,"qcNbr":null,"serviceGoodsDTO":null,"medicareCateCode":"6928856300010","medicareCountryCode":"6928856300010","medicareOnlineFlag":"0"}],"orderList":null,"orderInvoiceDto":{"operator":null,"sid":545669,"orderNo":"PAP20240424539446","billingId":null,"invType":0,"invName":"个人","invDesc":null,"invoiceAddress":null,"invoiceToName":null,"invioceToPhone":null,"receptInvEm":null,"invoiceAdditionInfo":null,"invoiceBankAccount":null,"invoiceBankName":null,"invoiceCompany":null,"registryAddress":null,"registryPhone":null,"invoiceProv":null,"invoiceCity":null,"invoiceDistrict":null,"invoiceUrl":null,"invoiceSubject":null,"invoiceUrlGoods":null,"invoiceUrlExpenses":null,"imageUrlByOrder":null,"imageUrlByFreight":null,"delWay":null,"courierNo":null,"delComName":null,"openingCycle":null,"status":null,"invoiceH5Url":null,"freightInvoiceCode":null,"freightInvoiceNumber":null,"orderInvoiceCode":null,"orderInvoiceNumber":null,"deliveryMode":""},"orderPromotionList":[],"orderHistroryList":[{"sid":2151564,"orderNo":"PAP20240424539446","orderStatus":"1029","orderStatusDesc":"已取消","displyStatus":"您的订单已经取消","operateTime":1713930600558,"operator":"JOB","isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:50:00"},{"sid":2151549,"orderNo":"PAP20240424539446","orderStatus":"1001","orderStatusDesc":"待支付","displyStatus":"您的订单已经生成，等待付款","operateTime":1713928336022,"operator":null,"isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:12:16"},{"sid":2151547,"orderNo":"PAP20240424539446","orderStatus":"1000","orderStatusDesc":"待开方","displyStatus":"您的订单已经生成,等待医生开具处方","operateTime":1713928299128,"operator":null,"isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:11:39"}],"orderPayList":[],"promotionPayId":null,"content":null,"jigouName":null,"accountNo":null,"accountDate":null,"householdNo":null,"orderTypeList":null,"extrFlag":0,"courierNo":null,"delComName":null,"delComNo":null,"parkingDuration":null,"plateNbr":null,"provinceCode":"866","cityCode":"867","districtCode":"868","provinceName":null,"cityName":null,"districtName":null,"userName":null,"identityCardNumber":null,"gbuyId":null,"checkLevel":null,"orderPackageList":[],"orderLogisticsList":null,"saleAllSum":3,"externalLink":null,"vatId":null,"vatPackageId":null,"isHide":0,"courierName":null,"courierPhone":null,"storeCode":"001456","storeName":"上海市第一医药商店test","storeAddress":"地址详情四川南路26号四川南路26号四川南路26号四川南路26号四川南路26号四川南路26号","storePic":"https://img20.st.iblimg.com/site-1/images/store/logo/2017/02/1001006487.png","activeTime":30,"totalTariff":0,"shopSid":null,"changeMoney":null,"serviceFee":18.3729,"payType":null,"tokenId":null,"omsNotifyUrl":"http://oms.st.iblidc.com:7210/oms-core/order/payedCallBack.htm","industrySid":"6000","subIndustrySid":null,"stockType":"1","cpsToken":null,"vatType":null,"packageId":"4018DYSD0","shopDetailAddress":"上海市 市辖区 黄浦区 四川南路26号_豫园地铁站6号口步行330米__友谊大厦涉外商务楼_友谊大厦","shopShortAddress":null,"aliasSaleTime":null,"shopIndustrySid":"6010","storeIndustrySid":"6010","applyNo":null,"distance":null,"customerStockoutProgram":"3","entryTime":null,"availableTime":null,"pointAmount":null,"parkingAmount":null,"couponAmount":null,"certificateType":null,"identificationNo":null,"frontalFace":null,"flipFace":null,"certificationStatus":null,"refundIfApply":null,"cardExtractPhone":null,"groupGoodsList":null,"finalPaymentMoney":0,"depositMoney":0,"depositStartTime":"2020-05-19 15:18:09","depositEndTime":"2099-12-31 23:59:59","finalPayStartTime":null,"finalPayEndTime":null,"giftOrderType":null,"comSid":"6000","giftActivityId":null,"outPlantCode":null,"source":null,"isFq":0,"needGiftOrder":null,"manageType":2,"fid":"20235","dateSelect":null,"receptDistrict":"868","receptCity":"867","receptProv":"866","versionName":null,"showSaleMoneySum":141.33,"showDiscountMoneySum":0,"orderNos":null,"delivTime":null,"isAYearAgo":null,"sendStartTime":null,"sendEndTime":null,"payTime":null,"sendDate":null,"dcSpTypes":[],"stallDTOList":[],"dkSids":null,"cateringOrderStatusList":null,"pickUpType":null,"serviceGoodsAmount":null,"shopLogo":null,"bu":"1","isSpecial":null,"isRefund":null,"fulfillStatus":"1003","fulfillStatusDesc":"医生已完成开方 待药师审核","prescriptionId":"6132","cateringOrderRelationship":null,"logisticsHistory":[{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1029","packageStatusDesc":null,"packageDesc":"您的订单已经取消","timeStatusUpdate":1713930600000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:50:00"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1001","packageStatusDesc":null,"packageDesc":"您的订单已经生成，等待付款","timeStatusUpdate":1713928336000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:12:16"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1000","packageStatusDesc":null,"packageDesc":"您的订单已经生成,等待医生开具处方","timeStatusUpdate":1713928299000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:11:39"}],"showBottonList":[5],"showDetailBottonList":[5,8,9],"viewRefundUrl":null,"orderStatusFlag":0,"riderChannel":null,"showRiderMap":null,"jumpDeliveryHis":null,"consigneeLat":"31.23187","consigneeLng":"121.489972","sellerLat":"31.19","sellerLng":"121.45","ecpPay":null,"plusDiscountPrice":0,"payJump":1,"excludeTemplate":"","otsStatus":null,"specialOrder":0,"qrCodeUrl":null,"barCodeUrl":null,"freightInfos":[],"orderLabel":"处方药","promiseTime":null,"deliveryStatusCode":null,"oosTypeDesc":"缺货时与我联系","prescriptionFromTime":null,"medicalInsuranceFlag":null,"ybPayAmt":null,"unYbPayAmt":null},{"plusMember":0,"orderSourceCode":1,"orderTypeCode":"58","orderSubTypeCode":null,"orderNoList":null,"pageNumber":1,"pageSize":10,"orderType":"处方订单","orderNo":"PAP20240424539447","memberId":"100000002749975","mchId":"100090150505415","memberEmail":null,"orderUsername":" ","orderPhone":"18521006314","orderStatusList":null,"orderStatus":"1029","statusPay":null,"startTime":null,"endTime":null,"signTime":null,"groupBuyingNo":null,"saleMoneySum":78,"reWeightMoney":0,"sendCost":3,"deliveryServiceCharge":0,"deliveryBaseCost":0,"distanceCost":null,"weightCost":3,"timeCost":null,"extraCost":null,"originSendCost":3,"discountTransport":0,"discountMoneySum":0,"needMoney":81,"orderTime":"2024-04-24 11:11:38","receptName":"张","receptPhone":"18521006314","merchantType":"第一医药","merchantNo":null,"merchantName":null,"completionTime":null,"delayCompleteTimes":0,"sendTimeFlag":3,"sendTimeDesc":"立即配送","orderStatusDesc":"已取消","orderRefundMonStatus":null,"refundMonList":null,"sendTypeSid":1,"sendType":"送货上门","extrPlaceSid":null,"extrPlace":null,"clientRemark":null,"payMetSid":1,"payMet":"在线支付","receptAddressDetail":"上海市 市辖区 黄浦区 四川南路26号_豫园地铁站6号口步行330米__友谊大厦涉外商务楼_友谊大厦","parentOrderNo":"SIT1272401737692","allNeedMoney":81,"aliasOrderNo":null,"extrCode":null,"deliveryNo":null,"refundMonNo":null,"operatorIdList":null,"orderDetailList":[{"itemAmount":78,"showSkuPrice":78,"shopSid":"001100","goodsSid":2269517,"goodsDetSid":"1003165","goodsCode":"3286624","picUrl":"https://Img.st.iblimg.com/fast2homemethod-2/offlinegoods/goods/SP_1266342987_200x200.jpg","goodsUrl":null,"goodsName":"拜新同 硝苯地平控释片30mg*7片","goodsStan":"30mg*7片","goodsColor":null,"integral":0,"oriPrice":null,"salePrice":78,"saleSum":1,"sendSum":null,"totalPrice":null,"refundNum":null,"allowReNum":1,"orderDetailNo":"PAP202404245394470101","stockDetailCodes":null,"cateName":null,"merchantName":null,"discountInfo":null,"merchantId":"60200011001","tax":"0.13","goodsType":"30","isReWeight":null,"reWeightMoney":0,"tariffRate":0,"tariff":0,"overExpress":null,"if7Refund":0,"tariffNo":null,"shipOrigin":null,"measureUnit":"盒","goodsWeight":2,"discountAmount":0,"purchaseType":"25","purchaseRule":null,"isDefault":null,"bgCateSid":"212037","importPort":null,"importWarehouse":null,"limitedType":null,"isGift":0,"groupGoodCode":null,"groupGoodsName":null,"goodsGiftRelation":null,"rule":null,"groupName":null,"bl_ad":"AKCLASSIFY_-_14110_-_12","isMergeTemplete":"1","isFq":0,"reserveInfo1":null,"reserveInfo2":null,"reserveInfo3":null,"promShopCartMZ":"661cc977054ef400393572aa","showDiscountAmount":0,"showSalePrice":78,"payType":null,"barCode":"6924147654015","medicineDirectionShow":0,"price":78,"priceType":"0","activeCode":null,"canReturnFlag":0,"dkSid":null,"dkName":null,"dcSpType":null,"jgSpLineNbr":null,"fwSpLineNbr":null,"qcNbr":null,"serviceGoodsDTO":null,"medicareCateCode":"6924147654015","medicareCountryCode":"XC08CAX066A011010100002","medicareOnlineFlag":"1"}],"orderList":null,"orderInvoiceDto":{"operator":null,"sid":545670,"orderNo":"PAP20240424539447","billingId":null,"invType":0,"invName":"个人","invDesc":null,"invoiceAddress":null,"invoiceToName":null,"invioceToPhone":null,"receptInvEm":null,"invoiceAdditionInfo":null,"invoiceBankAccount":null,"invoiceBankName":null,"invoiceCompany":null,"registryAddress":null,"registryPhone":null,"invoiceProv":null,"invoiceCity":null,"invoiceDistrict":null,"invoiceUrl":null,"invoiceSubject":null,"invoiceUrlGoods":null,"invoiceUrlExpenses":null,"imageUrlByOrder":null,"imageUrlByFreight":null,"delWay":null,"courierNo":null,"delComName":null,"openingCycle":null,"status":null,"invoiceH5Url":null,"freightInvoiceCode":null,"freightInvoiceNumber":null,"orderInvoiceCode":null,"orderInvoiceNumber":null,"deliveryMode":""},"orderPromotionList":[],"orderHistroryList":[{"sid":2151565,"orderNo":"PAP20240424539447","orderStatus":"1029","orderStatusDesc":"已取消","displyStatus":"您的订单已经取消","operateTime":1713930602372,"operator":"JOB","isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:50:02"},{"sid":2151550,"orderNo":"PAP20240424539447","orderStatus":"1001","orderStatusDesc":"待支付","displyStatus":"您的订单已经生成，等待付款","operateTime":1713928373216,"operator":null,"isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:12:53"},{"sid":2151548,"orderNo":"PAP20240424539447","orderStatus":"1000","orderStatusDesc":"待开方","displyStatus":"您的订单已经生成,等待医生开具处方","operateTime":1713928299169,"operator":null,"isDisplay":null,"previousStatus":null,"remark":null,"orderTime":"2024-04-24 11:11:39"}],"orderPayList":[],"promotionPayId":null,"content":null,"jigouName":null,"accountNo":null,"accountDate":null,"householdNo":null,"orderTypeList":null,"extrFlag":0,"courierNo":null,"delComName":null,"delComNo":null,"parkingDuration":null,"plateNbr":null,"provinceCode":"866","cityCode":"867","districtCode":"868","provinceName":null,"cityName":null,"districtName":null,"userName":null,"identityCardNumber":null,"gbuyId":null,"checkLevel":null,"orderPackageList":[],"orderLogisticsList":null,"saleAllSum":1,"externalLink":null,"vatId":null,"vatPackageId":null,"isHide":0,"courierName":null,"courierPhone":null,"storeCode":"001100","storeName":"上海市第一医药金陵东路店即时达门店","storeAddress":"药到家地址(26号名称)超长的时候ABC都开始低分段发挥地方低分段","storePic":"https://blqqd-pa-filemanager-sit-pub.st.iblimg.com/bl-site-public/images/store/logo/2023/11/2ae0cea8a967692ce6a1c3402ef6d28-b7e8b2b5d58b45e0b14b581836b9f5fe.jpg","activeTime":30,"totalTariff":0,"shopSid":null,"changeMoney":null,"serviceFee":10.14,"payType":null,"tokenId":null,"omsNotifyUrl":"http://oms.st.iblidc.com:7210/oms-core/order/payedCallBack.htm","industrySid":"6000","subIndustrySid":null,"stockType":"1","cpsToken":null,"vatType":null,"packageId":"4018DYSD0","shopDetailAddress":"上海市 市辖区 黄浦区 四川南路26号_豫园地铁站6号口步行330米__友谊大厦涉外商务楼_友谊大厦","shopShortAddress":null,"aliasSaleTime":null,"shopIndustrySid":"6020","storeIndustrySid":"6020","applyNo":null,"distance":null,"customerStockoutProgram":"3","entryTime":null,"availableTime":null,"pointAmount":null,"parkingAmount":null,"couponAmount":null,"certificateType":null,"identificationNo":null,"frontalFace":null,"flipFace":null,"certificationStatus":null,"refundIfApply":null,"cardExtractPhone":null,"groupGoodsList":null,"finalPaymentMoney":0,"depositMoney":0,"depositStartTime":"2020-09-22 11:12:33","depositEndTime":"2099-12-31 23:59:59","finalPayStartTime":null,"finalPayEndTime":null,"giftOrderType":null,"comSid":"6000","giftActivityId":null,"outPlantCode":null,"source":null,"isFq":0,"needGiftOrder":null,"manageType":2,"fid":"15035","dateSelect":null,"receptDistrict":"868","receptCity":"867","receptProv":"866","versionName":null,"showSaleMoneySum":78,"showDiscountMoneySum":0,"orderNos":null,"delivTime":null,"isAYearAgo":null,"sendStartTime":null,"sendEndTime":null,"payTime":null,"sendDate":null,"dcSpTypes":[],"stallDTOList":[],"dkSids":null,"cateringOrderStatusList":null,"pickUpType":null,"serviceGoodsAmount":null,"shopLogo":null,"bu":"1","isSpecial":null,"isRefund":null,"fulfillStatus":"1003","fulfillStatusDesc":"医生已完成开方 待药师审核","prescriptionId":"6133","cateringOrderRelationship":null,"logisticsHistory":[{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1029","packageStatusDesc":null,"packageDesc":"您的订单已经取消","timeStatusUpdate":1713930602000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:50:02"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1001","packageStatusDesc":null,"packageDesc":"您的订单已经生成，等待付款","timeStatusUpdate":1713928373000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:12:53"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1000","packageStatusDesc":null,"packageDesc":"您的订单已经生成,等待医生开具处方","timeStatusUpdate":1713928299000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:11:39"}],"showBottonList":[5],"showDetailBottonList":[5,8,9],"viewRefundUrl":null,"orderStatusFlag":0,"riderChannel":null,"showRiderMap":null,"jumpDeliveryHis":null,"consigneeLat":"31.23187","consigneeLng":"121.489972","sellerLat":"31.24","sellerLng":"121.48","ecpPay":null,"plusDiscountPrice":0,"payJump":1,"excludeTemplate":"","otsStatus":null,"specialOrder":0,"qrCodeUrl":null,"barCodeUrl":null,"freightInfos":[{"desc":"超重运费","price":"3"}],"orderLabel":"处方药","promiseTime":null,"deliveryStatusCode":null,"oosTypeDesc":"缺货时与我联系","prescriptionFromTime":null,"medicalInsuranceFlag":null,"ybPayAmt":null,"unYbPayAmt":null}],"allOrderList":[],"totalTariffAmount":0,"totalServiceFee":28.5129,"omsNotifyUrl":"http://oms.st.iblidc.com:7210/oms-core/order/payedCallBack.htm","showAllGoodsPrice":219.33,"showActivityDiscount":0,"isPay":null,"showBottonList":[5],"showDetailBottonList":[5,8,9],"merge":0,"status":"1029","statusDesc":"已取消","activeTime":30,"orderTime":"2024-04-24 11:11:38","payMet":"在线支付","originSendCost":3,"discountTransport":0,"reWeightMoney":0,"saleAllSum":4,"totalDeliveryServiceCharge":0,"merId":"100090150505415","logisticsHistory":[{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1029","packageStatusDesc":null,"packageDesc":"您的订单已经取消","timeStatusUpdate":1713930600000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:50:00"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1001","packageStatusDesc":null,"packageDesc":"您的订单已经生成，等待付款","timeStatusUpdate":1713928336000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:12:16"},{"sid":null,"deliveryNo":null,"orderNo":null,"packageStatus":"1000","packageStatusDesc":null,"packageDesc":"您的订单已经生成,等待医生开具处方","timeStatusUpdate":1713928299000,"riderCode":null,"serviceType":null,"riderName":null,"riderLat":null,"riderLng":null,"riderMobile":null,"timePositionUpdate":null,"cancleType":null,"cancelReason":null,"orderInfoContent":null,"updateTime":null,"context":null,"areaCode":null,"areaName":null,"statusDate":"2024.04.24","statusTime":"11:11:39"}],"orderPayList":null,"payJump":1,"excludeTemplate":"","prescriptionFromTime":null,"pay":null}}
