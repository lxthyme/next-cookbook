import type { NextApiRequest, NextApiResponse } from 'next'

import {
    mockData_已完成 as mockData
} from '@dj/getOrderDetail.html'

export default (req: NextApiRequest, res: NextApiResponse) => {

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const { obj, ...data_others } = mockData
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
    const data = {
        ...data_others,
        obj: {
            ...obj_others,
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
            // orderStatus: '1005',
            // orderTypeCode: '58',
            outFlag: 0,
        },
    }

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
        })
}
