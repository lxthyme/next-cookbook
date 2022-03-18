import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_扫码购 } from '@dj/findStore.html'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const {obj, ...data_others } = mockData_扫码购
  const { list, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: list.slice(0, 1)
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {
  "success": true,
  "msg": "配置的1500米范围内扫码购门店列表",
  "resCode": "00100000",
  "obj": {
    "count": 10,
    "list": [{
      "storeName": "百联到家加盟店",
      "storeCode": "008415",
      "storeType": "2080",
      "addr": "上海市 市辖区 黄浦区 四川南路20号",
      "longitude": "121.487409",
      "lantitude": "31.227971",
      "distance": "490",
      "nlist": [{
        "telantName": "百联到家加盟店",
        "telantCode": "20800084152"
      }]
    }, {
      "storeName": "东方商厦阿炼的leme店",
      "storeCode": "001110",
      "storeType": "1020",
      "addr": "上海市 市辖区 黄浦区 四川南路26号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "东方商厦阿炼的leme店",
        "telantCode": "10200011101"
      }]
    }, {
      "storeName": "数字化世纪联华东宝店",
      "storeCode": "001017",
      "storeType": "2010",
      "addr": "上海市 市辖区 黄浦区 四川南路22号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "数字化世纪联华东宝店",
        "telantCode": "20100010171"
      }]
    }, {
      "storeName": "世纪联华上海青浦店",
      "storeCode": "001020",
      "storeType": "2010",
      "addr": "上海市 市辖区 黄浦区 四川南路26号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "世纪联华上海青浦店",
        "telantCode": "20100010201"
      }]
    }, {
      "storeName": "快客天虹店",
      "storeCode": "009488",
      "storeType": "2030",
      "addr": "上海市 市辖区 虹口区 水电路690号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "快客天虹店",
        "telantCode": "20300094881"
      }]
    }, {
      "storeName": "联华超市武宁生活馆",
      "storeCode": "007780",
      "storeType": "2020",
      "addr": "上海市 市辖区 卢湾区 四川南路2600号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "联华超市武宁生活馆馆馆",
        "telantCode": "2020007780ENT23234"
      }, {
        "telantName": "test0120",
        "telantCode": "20200077801221"
      }, {
        "telantName": "cgjtest0308",
        "telantCode": "2020007780335wu"
      }, {
        "telantName": "test001",
        "telantCode": "202000778022"
      }, {
        "telantName": "cgjtest1103",
        "telantCode": "2020007780110111"
      }]
    }, {
      "storeName": "世纪联华中环百联店",
      "storeCode": "004517",
      "storeType": "2010",
      "addr": "上海市 市辖区 普陀区 真光路1258号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "世纪联华中环百联店",
        "telantCode": "2010004517ENTPF-01"
      }]
    }, {
      "storeName": "联华超市武西店",
      "storeCode": "004538",
      "storeType": "2020",
      "addr": "上海市 市辖区 长宁区 万航渡路544号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "联华超市武西店",
        "telantCode": "20200045381"
      }]
    }, {
      "storeName": "阿炼的新标超数字化门店",
      "storeCode": "000243",
      "storeType": "2020",
      "addr": "上海市 市辖区 黄浦区 四川南路22号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "阿炼的新标超数字化门店",
        "telantCode": "20200002431"
      }]
    }, {
      "storeName": "快客数字化崂山店",
      "storeCode": "001223",
      "storeType": "2030",
      "addr": "上海市 市辖区 黄浦区 四川南路23号",
      "longitude": "121.487473",
      "lantitude": "31.227801",
      "distance": "504",
      "nlist": [{
        "telantName": "阿炼的快客崂山店",
        "telantCode": "20300012231"
      }]
    }]
  }
}
