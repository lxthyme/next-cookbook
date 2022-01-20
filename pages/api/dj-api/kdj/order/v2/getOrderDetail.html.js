import { mockData_2022_01_20 } from '../../../../../../mockData/dj/v2.getOrderDetail.html'

const API = (req, res) => {
  const { page } = req.body

  const { obj: obj_tmp, ...obj_others } = mockData
  const { orderList, allOrderList, showBottonList, showDetailBottonList, logisticsHistory, ...obj_tmp_others } = obj_tmp
  const obj = {
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

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API
