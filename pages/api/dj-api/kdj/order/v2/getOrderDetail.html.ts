import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_2022_01_20 } from '@dj/v2.getOrderDetail'
import { mockData_订单 } from '@dj/order'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...obj_others } = mockData_订单.t托底_配送方式不同.t订单详情
  const { orderList, allOrderList, showBottonList, showDetailBottonList, logisticsHistory, ...obj_tmp_others } = obj
  let data = {
    obj: {
      allOrderList,
      showBottonList,
      showDetailBottonList,
      logisticsHistory,
      ...obj_tmp_others,
      orderList: orderList.map(t => {
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
          ...t_others
        } = t
        return {
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
          ...t_others,
          deliveryServiceCharge: '233'
        }
      }),
    },
    ...obj_others
  }

  data = mockData_订单.t托底_配送方式不同.t订单详情
  data = mockData_订单.t托底_配送方式相同.t订单详情

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
