import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_peiSongList } from '@dj/batch.html'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData_peiSongList
  const { list, ...obj_others } = obj;
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: list.map(t => {
        const { peiSongList, limitTimeList, ...t_others } = t
        return {
          ...t_others ,
          limitTimeList,
          peiSongList: peiSongList.map((t2, idx2) => {
            if(idx2 === 0) {
              t2.hide = 'Y'
            } else if(idx2 === 1) {
              t2.timeList.forEach((t3, idx3) => {
                t3.hide = idx3 % 3 === 2 ? 'N' : 'Y'
              })
            }
            return t2
          })
        }
      })
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
