import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockDat_未领取2个
  // mockDat_已领取2个
   as mockData,
  // mockData_光明奶卡
 } from '@dj/coupon.v2.list'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const buttonFlagEnum = {
    1: '立即领取',
    2: '已领取',
    3: '已领完',
    4: '达到个人领券上限',
  }
  /** 领取状态:
   *      1:立即领取;
   *      2:再领一张;
   *      3:已领完(本人已领);
   *      4:已领完(本人未领)
   *
   * buttonFlag:
   *      1: 立即领取
   *      2: 已领取
   *      3: 已领完
   *      4: 达到个人领券上限
  */

  const { obj, ...data_others } = mockData
  const { list, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: list.map((t, idx) => {
        // t.receiveFlag = '3'
        // t.receiveFlag = '4'
        // t.receiveFlag = `${idx % 3}`
        t.alreadyPercentNum = `${idx * 10 % 100}`
        if(idx === 0) {
          // t.plusFlag = '1'
          // t.mpShopName = "【仅配送】到家抵用券8元【仅配送】到家抵用券8元"
          // t.couponTypeId = '17'
          // t.signinAcquire = '0'
          // t.offsetAmount = '999'
          // // t.receiveFlag = '3'
          // t.isTop = '1'
          // // t.noticeDesc1 = '[1]到家抵用券8元【仅配送】到家抵用券8元'
          // // t.noticeDesc2 = '[2]到家抵用券8元【仅配送】到家抵用券8元'
        } else {
          // t.receiveFlag = '1'
        }

        return t
      })
    }
  }
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
