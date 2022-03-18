import type { NextApiRequest, NextApiResponse } from 'next'
import { mock_图片魔方 } from '@dj/resources.html'

export default (req: NextApiRequest, res: NextApiResponse) => {

    const { obj, ...data_others } = mock_图片魔方
    const data = {
        ...data_others,
        obj: obj.map(t => {
            return t
        })
    }

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json({
                "success": true,
                "resCode": "00100000",
                "timestamp": 1631008295161,
                "obj": data
            })
        })
}
