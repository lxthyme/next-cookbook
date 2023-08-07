import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  // data.obj.list = []

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
  "resCode": "00100000",
  "obj": {
    "list": [
      {
        "storeCode": "001020",
        "storeType": "2010",
        "labels": [
          {
            "iconLabel": "券",
            // "labelDesc": "【门店扫码-到家线下券",
            "labelDesc": "到家线下券",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          },
          {
            "iconLabel": "券",
            "labelDesc": "券序号111",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          },
          {
            "iconLabel": "券",
            // "labelDesc": "【复制377629358】【门店扫码-到家线下券",
            "labelDesc": "门店扫码-到家",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          },
          {
            "iconLabel": "折",
            "labelDesc": "满10元5折",
            "ruleType": "1",
            "ruleName": "满折",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": "世纪联华上海青",
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": "SQ满减",
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "007780",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          },
          {
            "iconLabel": "折",
            "labelDesc": "到家满折活动",
            "ruleType": "1",
            "ruleName": "满折",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": "满99减10",
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": "到家满减自动化",
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "11122",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          }
        ]
      },
      {
        "storeCode": "400100",
        "storeType": "4020",
        "labels": [
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "012620",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          }
        ]
      },
      {
        "storeCode": "001100",
        "storeType": "2010",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【门店扫码-到家线下券",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          },
          {
            "iconLabel": "券",
            "labelDesc": "券序号111",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          },
          {
            "iconLabel": "券",
            "labelDesc": "【复制377629358】【门店扫码-到家线下券",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 100
          }
        ]
      },
      {
        "storeCode": "001488",
        "storeType": "2120",
        "labels": []
      },
      {
        "storeCode": "400021",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "012009",
        "storeType": "4020",
        "labels": [
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "400022",
        "storeType": "4020",
        "labels": [
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "400222",
        "storeType": "4020",
        "labels": [
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          },
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "400007",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400000",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400065",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400020",
        "storeType": "4020",
        "labels": [
          {
            "iconLabel": "满",
            "labelDesc": null,
            "ruleType": "1",
            "ruleName": "满减",
            "offsetAmount": 0
          }
        ]
      },
      {
        "storeCode": "400110",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400055",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "332211",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          }
        ]
      },
      {
        "storeCode": "112233",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          }
        ]
      },
      {
        "storeCode": "400078",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400079",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "000243",
        "storeType": "2020",
        "labels": [
          {
            "iconLabel": "券",
            "labelDesc": "【复制377378007】券未领完会展示下一场么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 666.66
          },
          {
            "iconLabel": "券",
            "labelDesc": "到家武宁门店抵用券8",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 8
          },
          {
            "iconLabel": "券",
            "labelDesc": "今天上限明天还能领要展示预告么",
            "ruleType": "11",
            "ruleName": "抵用券",
            "offsetAmount": 6
          }
        ]
      },
      {
        "storeCode": "400064",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400076",
        "storeType": "4020",
        "labels": []
      },
      {
        "storeCode": "400069",
        "storeType": "4020",
        "labels": []
      }
    ]
  }
}
