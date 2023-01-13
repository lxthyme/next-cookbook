import type { NextApiRequest, NextApiResponse } from 'next'
import {
    // mock_图片魔方,
    mock_分类页改版 as mockData
 } from '@dj/resources'

export default (req: NextApiRequest, res: NextApiResponse) => {

    const { obj, ...data_others } = mockData
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
            res.status(200).json(data)
        })
}
