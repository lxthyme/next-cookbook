import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_2022_01_20 } from '@dj/v2.getOrderDetail'
import { hack_Order, mockData_OrderComponent, mockData_订单 } from '@dj/hack.order'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...obj_others } = mockData_订单
      // .t25_收银台异常.t订单详情
      // .t25.t已取消.t订单详情
      // .tA1.t_单商品_配送方式不同.t_已取消.t订单详情
      // .tA1.t_配送方式不同.t订单详情
      // .tA1.t_单商品_配送方式不同.t_待付款.t订单详情
      // .tA1.t_多商品_配送方式不同.t_已取消.t订单详情
      .tA1.t_单商品_配送方式不同.t_待付款2.t订单详情
      // .tA1.t_配送方式相同.t订单详情
      // .tA1.t_3子单_配送方式不同.t订单详情
      // .t58.t_开具处方单.t订单详情
      // .t58.t_待支付.t订单详情
      // .t58.t_开具处方单多单.t订单详情
      // .t58.t_部分开具处方单.t订单详情
      // .t58.t_处方单部分待审核多单.t订单详情
      // .t58.t_处方单待审核.t订单详情
      // .t58.t_处方单待付款多单.t订单详情
      // .t46.t待校验.t订单详情

  const { orderList, allOrderList, showBottonList, showDetailBottonList, logisticsHistory, ...obj_tmp_others } = obj
  let data = {
    ...obj_others,
    obj: {
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
          ...t_others,
          orderDetailList: orderDetailList.map((t, idx) => {
            if (idx === 0) {
                t = {
                    ...t,
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
            } else if (idx === 1) {
              t = {
                  ...t,
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
                  canReturnFlag: 3,
              }
            } else if (idx === 2) {
              t = {
                  ...t,
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
            return t;
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
        }
      }),
      allOrderList,
      showBottonList,
      showDetailBottonList,
      logisticsHistory,
      freightInfos: hack_Order.freightInfos,
      orderPayList: mockData_OrderComponent.orderPayList,
    },
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
