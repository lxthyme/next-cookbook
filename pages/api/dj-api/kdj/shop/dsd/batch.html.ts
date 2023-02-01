import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_peiSongList } from '@dj/batch'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData_peiSongList
  const { list, ...obj_others } = obj;
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: list.map((t, idx) => {
        let { peiSongList, limitTimeList, hide, ...t_others } = t
        hide = idx === 0 ? 'Y' : 'N'
        hide = 'N'
        return {
          ...t_others,
          limitTimeList,
          hide,
          peiSongList: peiSongList.map((t2, idx2) => {
            const appendCount = 7 - t2.timeList.length
            if (appendCount > 0) {
              t2.timeList = [...t2.timeList, ...mockTimeList.slice(0, 6)]
              console.log(`[${appendCount}]t2.timeList: `, t2.timeList)
            }
            if (idx2 === 0) {
              t2.hide = 'Y'
            } else if (idx2 === 1) {
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

export default API

const mockTimeList = [{
  "server": null,
  "startTime": "09:00",
  "endTime": "10:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "11:00",
  "endTime": "12:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "12:00",
  "endTime": "13:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "13:00",
  "endTime": "14:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "14:00",
  "endTime": "15:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "15:00",
  "endTime": "16:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}, {
  "server": null,
  "startTime": "16:00",
  "endTime": "17:00",
  "hide": "N",
  "limit": 1,
  "order": 0
}]
