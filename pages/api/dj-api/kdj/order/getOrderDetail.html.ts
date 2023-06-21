import type { NextApiRequest, NextApiResponse } from 'next'

import {
    mockData_已完成
    // mockData_test
    as mockData
} from '@dj/getOrderDetail'

import { mockData_OrderComponent, mockData_订单 } from '@dj/hack.order'

const API = (req: NextApiRequest, res: NextApiResponse) => {

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const { obj, ...data_others } = mockData_订单
        // .t25_收银台异常.t订单详情
        .t25.t已取消.t订单详情
        // .tA1.t_配送方式不同.t订单详情
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
        ...obj_others
    } = obj
    let data = {
        ...data_others,
        obj: {
            ...obj_others,
            orderDetailList: orderDetailList.map((t, idx) => {
                if (idx === 0) {
                    t = {
                        ...t,
                        // goodsType: '30',
                        // goodsType: '29',
                        goodsName: Array(2).fill('马来西亚进口 福多巧克力瑞士卷 108g').join(','),
                        reWeightMoney: '233',
                        // purchaseType: '16',
                        // priceType: '34',
                        // medicineDirectionShow: 1,
                        goodsStan: 'goodsStan 22222',
                        goodsColor: 'goodsColor 2333',
                        canReturnFlag: 3,
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
            fulfillStatusDesc: '233',
            // outFlag: 2,
        },
    }

    data.obj.orderPayList = mockData_OrderComponent.orderPayList

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
        })
}

export default API
