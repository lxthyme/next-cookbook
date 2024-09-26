import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = {
    success: true,
    resCode: "00100000",
    obj: {
      rankTabs: [
        { rankTagId: 1, rankTagName: "热卖榜" },
        // { rankTagId: 2, rankTagName: "回购榜" },
        { rankTagId: 3, rankTagName: "好评榜" },
      ],
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
