import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  // data.obj.data = []

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {"success":true,"resCode":"00100000","obj":{"data":[{"hot":"0","keyWord":"海飞丝"},{"hot":"0","keyWord":"椰汁"},{"hot":"0","keyWord":"芬达"},{"hot":"1","keyWord":"卫生纸"},{"hot":"0","keyWord":"茶花收纳箱"},{"hot":"0","keyWord":"旺旺雪饼"},{"hot":"0","keyWord":"剑南春"},{"hot":"0","keyWord":"心相印"},{"hot":"0","keyWord":"波力"},{"hot":"0","keyWord":"格力高"},{"hot":"0","keyWord":"金纺"},{"hot":"1","keyWord":"湿纸巾"},{"hot":"0","keyWord":"白酒"},{"hot":"1","keyWord":"淡奶油"},{"hot":"0","keyWord":"太太乐"},{"hot":"0","keyWord":"糯米"},{"hot":"0","keyWord":"滴露"},{"hot":"0","keyWord":"黄酒"},{"hot":"1","keyWord":"榴莲"},{"hot":"0","keyWord":"味精"},{"hot":"0","keyWord":"合味道"},{"hot":"0","keyWord":"雪菲力"},{"hot":"0","keyWord":"七度空间"},{"hot":"1","keyWord":"糖果"},{"hot":"0","keyWord":"卫生巾"},{"hot":"0","keyWord":"筷子"},{"hot":"0","keyWord":"芝士片"},{"hot":"0","keyWord":"水果罐头"},{"hot":"0","keyWord":"魔爪"},{"hot":"0","keyWord":"三得利"}],"hotCount":5,"count":30}}
