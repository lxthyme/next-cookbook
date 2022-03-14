import { mockData_光明奶卡 } from '@mockData/dj/queryCouponsV2.htm'

export default function (req, res) {
  const { page } = req.body

  const { obj, ...data_others } = mockData_光明奶卡
  const { couponAutoInfoList, cantUseList, couponsList, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      cantUseList,
      couponsList,
      couponAutoInfoList: couponAutoInfoList.map((t, idx) => {
        let tmp = t
        if (0 == idx) {
          tmp = {
            ...t,
            couponRuleId: '53023',
            couponCodes: ['1672058309584'],
          }
        }
        return tmp
      }),
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
