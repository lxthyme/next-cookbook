import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...data_others } = mockData
  const { couponTemplateIds, labelList, previewList, discountAll, couponList, couponInfoList, xgList, memDiscount, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      couponTemplateIds,
      // labelList,
      labelList: labelList.map(t => {
        if(t.ruletype == '61') {
          t.bigPopDes = '龙年大吉'
          t.smallPopDes = '加购同享N折'
        }
        // t.ruletype = '19'
        return t
      }),
      previewList,
      // previewList: [{
      //   "activeCode": "22110720403282",
      //   "activeDesc": "20000021232001",
      //   "activeEndTime": "2022-11-22 23:59:59",
      //   "activeName": "武宁标签预售",
      //   "activityStartTime": null,
      //   "deliveryDay": "2",
      //   "deliveryMethod": "2",
      //   "goodsDetSid": "162634",
      //   "goodsPreviewPrice": null,
      //   "ruletype": "19",
      //   "ruleName": "预售",
      //   "deliveryDate": "2022年11月12日"
      // }],
      discountAll,
      couponList,
      couponInfoList,
      xgList,
      memDiscount,
    }
  }
  const result = updateData(DJPlusStatus.hsPoints, data.obj.memDiscount, data.obj.discountAll)
  data.obj.memDiscount = result.memDiscount
  data.obj.discountAll = result.discountAll

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

enum DJPlusStatus {
  /// ①无N倍积分+开通
  NoPlus_NoPoints,
  /// ②有N倍积分+开通
  NoPlus_HasPoints,
  /// ②有N倍积分+开通(无plus活动)
  NoPlus_HasPoints_NoPlusActivity,
  /// ② 无N倍积分
  noPoints,
  /// ④ 无N倍积分+提示升级
  noPoints_SJ,
  /// ⑥ 无N倍积分+提示续费
  noPoints_XF,
  /// ① 有N倍积分
  hsPoints,
  /// ③ 有N倍积分+提示升级
  hsPoints_SJ,
  /// ⑤ 有N倍积分+提示续费
  hsPoints_XF,
}
const updateData = (status: DJPlusStatus, memDiscount: [string: any], discountAll: [string: any]) => {
  if(status === DJPlusStatus.NoPlus_NoPoints) {
    /// ①无N倍积分+开通
    // discountAll && discountAll.discountPreAmount.floatValue > 0
    // memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: 0,
    }
    discountAll = {
      ...discountAll,
      discountPreAmount: "21",
    }
    } else if(status === DJPlusStatus.NoPlus_HasPoints) {
    /// ②有N倍积分+开通
    // discountAll && discountAll.discountPreAmount.floatValue > 0
    // memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: '11',
    }
    discountAll = {
      ...discountAll,
      discountPreAmount: '22',
    }
    } else if(status === DJPlusStatus.NoPlus_HasPoints_NoPlusActivity) {
    /// ②有N倍积分+开通(无plus活动)
    // !(discountAll && discountAll.discountPreAmount.floatValue > 0)
    // memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 0,
      plusPointRate: '12',
    }
    discountAll = {
      ...discountAll,
      discountPreAmount: 0,
    }
    } else if(status === DJPlusStatus.noPoints) {
    /// ② 无N倍积分
    // memDiscount.isAllowContinue == 0 && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 0,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints) {
    /// ① 有N倍积分
    // memDiscount.isAllowContinue == 0 && memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 0,
      plusPointRate: '13',
    }
    } else if(status === DJPlusStatus.noPoints_SJ) {
    /// ④ 无N倍积分+提示升级
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 2 || memDiscount.membershipModel == 3) && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 2,
      // membershipModel: 3,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints_SJ) {
        /// ③ 有N倍积分+提示升级
        // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 2 || memDiscount.membershipModel == 3) && memDiscount.plusPointRate.integerValue > 0
        memDiscount = {
          ...memDiscount,
          isPlus: 1,
          isAllowContinue: 1,
          membershipModel: 2,
          // membershipModel: 3,
          plusPointRate: '14',
        }
    } else if(status === DJPlusStatus.noPoints_XF) {
    /// ⑥ 无N倍积分+提示续费
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 1) && memDiscount.plusPointRate.integerValue <= 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 1,
      plusPointRate: 0,
    }
    } else if(status === DJPlusStatus.hsPoints_XF) {
    /// ⑤ 有N倍积分+提示续费
    // memDiscount.isAllowContinue == 1 && (memDiscount.membershipModel == 1) && memDiscount.plusPointRate.integerValue > 0
    memDiscount = {
      ...memDiscount,
      isPlus: 1,
      isAllowContinue: 1,
      membershipModel: 1,
      plusPointRate: '15',
    }
    }
    return {discountAll: {
      ...discountAll,
      plusType: 'discount',
      discountPreAmount: discountAll.isPlus === 1 ? '234.3' : discountAll.discountPreAmount,
    }, memDiscount: {
      ...memDiscount,
      plusTime: 33,
      plusTimeUnit: '天',
      totalRights: '233.3',
      openPlusRights: '2333.3',
    }}
}

const mockData = {"success":true,"resCode":"00100000","obj":{"couponTemplateIds":["368693871","377351594","399412787"],"labelList":[{"ruleid":"64357","ruleName":"搭配购","ruletype":"61","buyMember":null,"conditionType":null,"discountType":null,"activityTag":null,"sLabel":"到家搭配购活动","mLabel":" 到家搭配购活动1","lLabel":null,"actDesc":null,"bigPopDes":"搭配A","smallPopDes":"可以买B","ruleChid":"64357","ruleMid":"64358","ruleSid":"64359","skuType":"1"}],"previewList":[],"discountInfo":null,"discountAll":{"discountAmount":"0","discountPreAmount":"99.00","plusType":"price","hasPlusActivity":1,"sharePreAmount":"99.00","shareOrigAmount":"0","goodsId":null,"discountList":[]},"couponList":[{"couponCode":null,"couponRuleId":null,"contentTextPc":null,"erCode":"http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2020&shopId=007780&couponId=368693871&QRid=0.27279240590129283","cloudFlag":"0","signinAcquire":"1","isAcquiredCoupon":"N","userDayCouponCount":"0","merchants":null,"waitDays":null,"offsetAmount":"3","maxNumPerUserDay":"1","produceNum":"87","couponListUrl":null,"dayCouponCount":"1","enableTimeFrom":"2023-05-23 00:00:00","buttonFlagMsg":"立即领取","contentTextScreen":null,"siteStore":null,"stores":null,"effectDays":null,"couponDetailUrl":null,"useChannel":"1,2,60,22","validType":"0","maxNumDay":"27","enableTimeTo":"2024-05-23 23:59:59","issueNum":"61","showOrder":null,"acquireType":"3","maxNum":"100","birthdayFlag":"0","couponPicUrl":null,"openTimeFrom":"2023-05-23 00:00:00","couponTypeId":"11","pointsValue":null,"notSentCouponCount":null,"contentTextApp":null,"jumpValue":null,"jumpType":"13","couponChannelType":null,"couponName":"100-到家抵用券购物车专用99-3\t","couponType":"抵用券","openTimeTo":"2024-05-23 23:59:59","maxNumPerUser":"1","couponDesc":"到家抵用券购物车专用99-3\t","canAcquireCoupon":"Y","couponTemplateId":"368693871","suitShopCount":null,"couponShortDesc":"到家抵用券购物车专用99-3\t","acquireFlag":"0","userCouponCount":"0","mpShopName":null,"couponScope":"1","nextGenerateTime":null,"currentGenerateTime":null,"buttonFlag":"1","receiveFlag":"1","alreadyPercentNum":"4","noticeDesc1":null,"noticeDesc2":null,"conditionAmount":null,"conditionFlag":null,"plusFlag":"0","shopAndBuMatch":null,"plusWeightFlag":"0","activityId":null,"bl_uuid":null,"useStoreList":null,"orderNumber":null,"myCouponFlag":null},{"couponCode":null,"couponRuleId":null,"contentTextPc":null,"erCode":"http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2010&shopId=0&couponId=377351594&QRid=0.43541541715223653","cloudFlag":"0","signinAcquire":"1","isAcquiredCoupon":"Y","userDayCouponCount":"0","merchants":null,"waitDays":"0","offsetAmount":"20","maxNumPerUserDay":"60","produceNum":"125","couponListUrl":null,"dayCouponCount":"1","enableTimeFrom":null,"buttonFlagMsg":"立即领取","contentTextScreen":null,"siteStore":null,"stores":null,"effectDays":"2","couponDetailUrl":null,"useChannel":"1,2,22,64","validType":"1","maxNumDay":"5","enableTimeTo":null,"issueNum":"121","showOrder":null,"acquireType":"3","maxNum":"200","birthdayFlag":"0","couponPicUrl":null,"openTimeFrom":"2022-07-06 00:00:00","couponTypeId":"17","pointsValue":"0","notSentCouponCount":null,"contentTextApp":null,"jumpValue":null,"jumpType":"2","couponChannelType":null,"couponName":"到家PLUS免首重券","couponType":"运费券","openTimeTo":"2024-07-06 23:59:59","maxNumPerUser":"100","couponDesc":"到家PLUS免首重券到家PLUS免首重券到家PLUS免首重券","canAcquireCoupon":"Y","couponTemplateId":"377351594","suitShopCount":null,"couponShortDesc":"到家PLUS免首重券","acquireFlag":"0","userCouponCount":"3","mpShopName":null,"couponScope":"1","nextGenerateTime":null,"currentGenerateTime":null,"buttonFlag":"1","receiveFlag":"1","alreadyPercentNum":"20","noticeDesc1":null,"noticeDesc2":null,"conditionAmount":null,"conditionFlag":null,"plusFlag":"1","shopAndBuMatch":null,"plusWeightFlag":"1","activityId":null,"bl_uuid":null,"useStoreList":null,"orderNumber":null,"myCouponFlag":null},{"couponCode":null,"couponRuleId":null,"contentTextPc":null,"erCode":"http://m.st.bl.com/h5-web/marketing/view_coupon_detail.html?apiType=coupon&shopType=2020&shopId=0&couponId=399412787&QRid=0.7402778962463944","cloudFlag":"0","signinAcquire":"1","isAcquiredCoupon":"Y","userDayCouponCount":"0","merchants":null,"waitDays":"0","offsetAmount":"6","maxNumPerUserDay":"100","produceNum":"174","couponListUrl":null,"dayCouponCount":"2","enableTimeFrom":null,"buttonFlagMsg":"立即领取","contentTextScreen":null,"siteStore":null,"stores":null,"effectDays":"5","couponDetailUrl":null,"useChannel":"1,2,22,64","validType":"1","maxNumDay":"5","enableTimeTo":null,"issueNum":"171","showOrder":null,"acquireType":"3","maxNum":"200","birthdayFlag":"0","couponPicUrl":null,"openTimeFrom":"2023-11-16 00:00:00","couponTypeId":"17","pointsValue":"0","notSentCouponCount":null,"contentTextApp":null,"jumpValue":null,"jumpType":"13","couponChannelType":null,"couponName":"到家最新专享券","couponType":"运费券","openTimeTo":"2024-11-16 23:59:59","maxNumPerUser":"100","couponDesc":"到家最新专享券到家最新专享券","canAcquireCoupon":"Y","couponTemplateId":"399412787","suitShopCount":null,"couponShortDesc":"专享1元券","acquireFlag":"0","userCouponCount":"8","mpShopName":null,"couponScope":"1","nextGenerateTime":null,"currentGenerateTime":null,"buttonFlag":"1","receiveFlag":"1","alreadyPercentNum":"40","noticeDesc1":null,"noticeDesc2":null,"conditionAmount":null,"conditionFlag":null,"plusFlag":"0","shopAndBuMatch":null,"plusWeightFlag":"0","activityId":null,"bl_uuid":null,"useStoreList":null,"orderNumber":null,"myCouponFlag":null}],"couponInfoList":[{"acceptCouponTemplateId":["368693871"],"memo":"到家抵用券购物车专用99-3\t","popDes":null},{"acceptCouponTemplateId":["377351594"],"memo":"到家PLUS免首重券","popDes":null},{"acceptCouponTemplateId":["399412787"],"memo":"到家最新专享券","popDes":null}],"xgList":[],"plusMember":0,"memDiscount":{"isPlus":0,"membershipModel":null,"isAllowContinue":0,"plusTime":null,"plusTimeUnit":null,"totalRights":null,"openPlusRights":"2688","points":"80.0","plusPointRate":null,"plusRulePoint":null},"showPlusTip":1,"djxgActType":null}}
