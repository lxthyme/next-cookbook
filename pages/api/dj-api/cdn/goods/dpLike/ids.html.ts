import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  data.obj.ids = []

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {"success":true,"resCode":"00100000","obj":{"ids":["2020_007780_2020007780ENT23234@@1@@69829|data1","2020_007780_2020007780ENT23234@@1@@69990|data2","2020_007780_2020007780ENT23234@@1@@162681|data3","2020_007780_2020007780ENT23234@@1@@163441|data4","2020_007780_2020007780ENT23234@@1@@72493|data5","2020_007780_2020007780ENT23234@@1@@1013284|data6","2020_007780_2020007780ENT23234@@1@@162606|data7","2020_007780_2020007780ENT23234@@1@@162607|data8","2020_007780_2020007780ENT23234@@1@@67179|data9","2020_007780_2020007780ENT23234@@1@@131570|data10"]}}
