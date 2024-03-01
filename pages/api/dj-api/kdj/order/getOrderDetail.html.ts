import type { NextApiRequest, NextApiResponse } from 'next'

import {
    mockData_已完成
        // mockData_test
        as mockData
} from '@dj/getOrderDetail'
import { getCurrentDateBefore } from '@tools/common'

import { hack_Order, mockData_OrderComponent, mockData_订单, orderDetail_failure } from '@dj/hack.order'

const API = (req: NextApiRequest, res: NextApiResponse) => {

    const { obj, ...data_others } = mockData_订单.t25.t_单商品_自提.t_待付款.t订单详情
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
        freightInfos,
        ...obj_others
    } = obj
    const orderTime = getCurrentDateBefore()
    let data = {
        ...data_others,
        obj: {
            ...obj_others,
            orderDetailList: orderDetailList.map((t1, idx1) => {
                if (idx1 === 0) {
                    t1 = {
                        ...t1,
                        // goodsType: '30',
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
                        /// Y: 扫码购称重商品，N: 非称重商品
                        reserveInfo1: 'Y',
                    }
                }
                return t1;
            }),
            orderInvoiceDto,
            orderPromotionList,
            orderHistroryList,
            // orderPayList,
            orderPackageList,
            dcSpTypes,
            stallDTOList,
            logisticsHistory: mockData_OrderComponent.logisticsHistory,
            showBottonList,
            showDetailBottonList,
            // orderStatus: "1005",
            // showRiderMap: 1,
            // riderChannel: "LHDJ",
            // riderChannel: "",
            // orderStatusDesc: "配送中...233",
            // orderStatus: '1007',
            /// 扫码购校验码
            orderStatus: '1034',
            sendTypeSid: 1,
            // orderTypeCode: '58',
            fulfillStatusDesc: '您订单中包含处方药，需凭处方预约取药，请待医生开具处方药后，予以支付',
            freightInfos: hack_Order.freightInfos,
            orderPayList: mockData_OrderComponent.orderPayList,
            sendCost: 2.37,
            /// 运费
            originSendCost: 3.33,
            deliveryServiceCharge: 3.44,
            discountTransport: 3.46,
            plusDiscountPrice: 3.47,
            reWeightMoney: 3.48,
            // outFlag: 2,
          medicalInsuranceFlag: 1,
          orderTime,
        },
    }

    // data = orderDetail_failure.t_未查询到订单;

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
            // res.status(200).json({
            //     "msg": "中台数据异常!",
            //     "resCode": "00100951",
            //     "success": false
            // })
        })
}

export default API
