import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = { "success": true, "resCode": "00100000", "obj": { "list": [{ "storeCode": "200021", "storeType": "2040", "initialTime": null, "interval": null, "startTime": null, "endTime": null, "success": true, "dsd": false, "business": false, "msg": "当前门店不支持定时达", "peiSongTip": "请尽快付款，以确保我们在指定时间配送（另：不可抗力因素可能导致延误敬请谅解）", "peiSongDesc": null, "nowTime": "2022-03-15 16:11:05", "week": null, "server": "48小时内发货", "shopBeginTime": "2022-03-15 08:00:00", "shopEndTime": "2022-03-15 10:00:00", "dsdStartTime": null, "dsdEndTime": null, "defaultSendDate": null, "peiSongList": null, "yuShouInfo": null, "orderLimit": null, "limitTimeList": null }, { "storeCode": "007780", "storeType": "2020", "initialTime": "2022-03-15 17:00:00", "interval": 60, "startTime": "13:00", "endTime": "15:00", "success": true, "dsd": true, "business": false, "msg": "", "peiSongTip": "请尽快付款，以确保我们在指定时间配送（另：不可抗力因素可能导致延误敬请谅解）", "peiSongDesc": null, "nowTime": "2022-03-15 16:11:05", "week": null, "server": "", "shopBeginTime": "2022-03-15 09:00:00", "shopEndTime": "2022-03-15 16:00:00", "dsdStartTime": "2022-03-16 16:11:05", "dsdEndTime": "2022-03-15 15:00:00", "defaultSendDate": 1647273600000, "peiSongList": [{ "desc": "已约满", "date": "2022-03-15", "week": null, "timeList": [{ "server": "", "startTime": "00:00", "endTime": "00:00", "hide": "N" }] }], "yuShouInfo": null, "orderLimit": 1, "limitTimeList": [{ "shipDate": "2022-03-16", "startTime": "14:30", "endTime": "15:00", "cnt": 1 }, { "shipDate": "2022-03-16", "startTime": "13:30", "endTime": "14:00", "cnt": 1 }, { "shipDate": "2022-03-16", "startTime": "22:30", "endTime": "23:00", "cnt": 1 }] }] } }
