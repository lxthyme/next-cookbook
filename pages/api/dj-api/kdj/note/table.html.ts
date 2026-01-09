import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

    const data = mockData

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
    "traceId": "a93a577dfb16096f",
    "obj": {
        "riderCallPhone": {
            "label": "骑手电话联系",
            "options": [
                {
                    "label": "允许",
                    "value": "允许电话联系"
                },
                {
                    "label": "不允许",
                    "value": "不允许电话联系"
                }
            ]
        },
        "riderVisit": {
            "label": "骑手敲门/按门铃",
            "options": [
                {
                    "label": "允许",
                    "value": "允许敲门/按门铃"
                },
                {
                    "label": "不允许",
                    "value": "不允许敲门/按门铃"
                }
            ]
        },
        "riderUnContact": {
            "label": "联系不上我时放指定位置",
            "options": [
                {
                    "label": "放自提架",
                    "value": "放自提架"
                }
            ]
        },
        "merchantOtherNote": {
            "label": "其他收货说明",
            "placeholder": "可以告诉我们您的特殊需求",
            "tip": "若您对配送、商品等有特别要求，我们会尽力配合，可能会存在不能满足的情况，敬请谅解。",
            "maxLength": 200
        },
        "merchantQuickNote": {
            "label": "快捷输入",
            "options": [
                {
                    "label": "不要打电话，不要打电话，不要打电话，重要事情说三遍！！！！",
                    "value": "不要打电话，不要打电话，不要打电话，重要事情说三遍！！！！",
                    "id": 131
                },
                {
                    "label": "尽量不要摁门铃，家里有人在休息，不要放在地上，门口有柜子，麻烦放在柜子上面哦!4",
                    "value": "尽量不要摁门铃，家里有人在休息，不要放在地上，门口有柜子，麻烦放在柜子上面哦!4",
                    "id": 123
                },
                {
                    "label": "请放门口，不要敲门，到了打电话5",
                    "value": "请放门口，不要敲门，到了打电话5",
                    "id": 122
                },
                {
                    "label": "放门口",
                    "value": "放门口",
                    "id": 0
                },
                {
                    "label": "放鞋柜上",
                    "value": "放鞋柜上",
                    "id": 0
                },
                {
                    "label": "别放地上",
                    "value": "别放地上",
                    "id": 0
                },
            ]
        }
    }
}
