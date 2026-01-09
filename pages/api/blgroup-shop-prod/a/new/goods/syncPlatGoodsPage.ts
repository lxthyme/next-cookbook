import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

    const data = mockData
    let idx = 1
    data.obj.mdmGoodsCode += idx
    idx += 1
    data.obj.data = Array.from({ length: 5 }, (item, idx) => {
        return {
            ...data.obj.data[0],
            platformId: idx % 3,
            synFlag: idx % 4,
            sid: idx,
        }
    })

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
        })
}

export default API

const mockData = {
    "success": true,
    "msg": "",
    "obj": {
        "total": 1000,
        "pages": 0,
        "pageNo": 0,
        "pageSize": 0,
        "start": 0,
        "end": 0,
        "goodsSalesName": "双汇Q趣优惠装火腿肠 50g部分同步同步",
        "mdmGoodsCode": "23333",
        "data": [
            {
                "sid": 0.0,
                "jsonMsg": "",
                "updateBy": "路恩",
                "updateTime": "2066-06-26 09:41:55",
                "createBy": "",
                "createTime": "",
                "taskId": "",
                "categoryName": "",
                "salePrice": 0.0,
                "errorMsg": "已存在相同条码的商品，对应商品xxxxxxxxx...",
                "synFlag": 1,
                "sourceId": "",
                "platformId": 1,
                "sourceName": "联华超市上海-合作方账号",
            }
        ]
    },
    "resCode": "",
    "timestamp": 0
}
