import type { NextApiRequest, NextApiResponse } from 'next'

import {
  mockData_武宁店,
  mockData_很多二级目录,
 } from '@dj/hack.category'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } =
    mockData_武宁店
    // mockData_很多二级目录
  const { categoryList, ...obj_others } = obj;
  let data = {
    ...data_others,
    obj: {
      ...obj_others,
      categoryList,
    //   categoryList: categoryList.slice(0, 10)
    }
  }
  // data = {}
  // data.obj.categoryList = [];
  // data.obj.categoryList[1].rywCategorys = [];
  // data.obj.categoryList[1].rywCategorys = [];

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      // res.status(200).json(data)
      const d = mockData
      // d.obj.categoryList[0].rywCategorys[0].rywCategorys = undefined
      // d.obj.categoryList[0].rywCategorys = undefined
      // d.obj.categoryList.forEach((t1, idx1) => {
      //   if(idx1 == 0) {
      //     t1.rywCategorys = []
      //   } else if(idx1 == 1) {
      //     t1.rywCategorys.forEach((t2, idx2)) {
      //       if(idx2 <= 5) {
      //         t2.rywCategorys = []
      //       }
      //     }
      //   }
      // })
			d.obj.categoryList[0] = d.obj.categoryList[2]
      res.status(200).json(d)
    })
}

export default API


const mockData = {
	"success": true,
	"resCode": "00100000",
	"timestamp": 1744341518073,
	"obj": {
		"categoryList": [{
			"categoryId": "30650",
			"categoryName": "后台类目",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30650",
				"categoryName": "后台类目",
				"showAll": null,
				"showProm": null,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": null,
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30630",
			"categoryName": "新添加目录",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30687",
				"categoryName": "二级标签",
				"showAll": 0,
				"showProm": 0,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [],
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30636",
			"categoryName": "0521测试目录",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30636",
				"categoryName": "521测试目录",
				"showAll": null,
				"showProm": null,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": null,
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30640",
			// "categoryName": "排行0521榜选择否",
			"categoryName": "MP排行榜选择否",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30640",
				"categoryName": "MP排行榜选择否",
				"showAll": null,
				"showProm": null,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": null,
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30635",
			"categoryName": "mp预售目录233",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30692",
				"categoryName": "预售1",
				"showAll": 1,
				"showProm": 1,
				"categoryIcon": null,
				"resourceId": "20220606",
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [{
					"categoryId": "30692all",
					"categoryName": "全部",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 1,
					"medicalPayCate": 0
				}, {
					"categoryId": "30692promotion",
					"categoryName": "促销",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 2,
					"medicalPayCate": 0
				}],
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30631",
			"categoryName": "一挂商品",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30631",
				"categoryName": "一挂商品",
				"showAll": null,
				"showProm": null,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": null,
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30632",
			"categoryName": "二挂商品",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "30688",
				"categoryName": "二级二级",
				"showAll": 0,
				"showProm": 0,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [],
				"cateType": 0,
				"medicalPayCate": 0
			}, {
				"categoryId": "30689",
				"categoryName": "二二二",
				"showAll": 1,
				"showProm": 1,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [{
					"categoryId": "30689all",
					"categoryName": "全部",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 1,
					"medicalPayCate": 0
				}, {
					"categoryId": "30689promotion",
					"categoryName": "促销",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 2,
					"medicalPayCate": 0
				}],
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}, {
			"categoryId": "30633",
			"categoryName": "三挂商品",
			"showAll": 0,
			"showProm": 0,
			"categoryIcon": null,
			"resourceId": null,
			"promText": null,
			"categoryPicture": null,
			"rywCategorys": [{
				"categoryId": "31132",
				"categoryName": "乳品烘焙",
				"showAll": 1,
				"showProm": 1,
				"categoryIcon": null,
				"resourceId": "20220322",
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [{
					"categoryId": "31132all",
					"categoryName": "全部",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 1,
					"medicalPayCate": 0
				}, {
					"categoryId": "31132promotion",
					"categoryName": "促销",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 2,
					"medicalPayCate": 0
				}, {
					"categoryId": "31135",
					"categoryName": "冷藏牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31136",
					"categoryName": "冷藏酸奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31137",
					"categoryName": "常温牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31138",
					"categoryName": "常温牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31139",
					"categoryName": "常温酸奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31140",
					"categoryName": "黄油沙拉酱",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}],
				"cateType": 0,
				"medicalPayCate": 0
			}, {
				"categoryId": "31133",
				"categoryName": "新品推荐",
				"showAll": 1,
				"showProm": 1,
				"categoryIcon": null,
				"resourceId": null,
				"promText": null,
				"categoryPicture": null,
				"rywCategorys": [
				// 	{
				// 	"categoryId": "31132all",
				// 	"categoryName": "全部",
				// 	"showAll": null,
				// 	"showProm": null,
				// 	"categoryIcon": null,
				// 	"resourceId": null,
				// 	"promText": null,
				// 	"categoryPicture": null,
				// 	"rywCategorys": null,
				// 	"cateType": 1,
				// 	"medicalPayCate": 0
				// },
				{
					"categoryId": "31132promotion",
					"categoryName": "促销",
					"showAll": null,
					"showProm": null,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 2,
					"medicalPayCate": 0
				}, {
					"categoryId": "31135",
					"categoryName": "冷藏牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31136",
					"categoryName": "冷藏酸奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31137",
					"categoryName": "常温牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31138",
					"categoryName": "常温牛奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31139",
					"categoryName": "常温酸奶",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}, {
					"categoryId": "31140",
					"categoryName": "黄油沙拉酱",
					"showAll": 0,
					"showProm": 0,
					"categoryIcon": null,
					"resourceId": null,
					"promText": null,
					"categoryPicture": null,
					"rywCategorys": null,
					"cateType": 0,
					"medicalPayCate": 0
				}],
				"cateType": 0,
				"medicalPayCate": 0
			}],
			"cateType": 0,
			"medicalPayCate": 0
		}]
	}
}
