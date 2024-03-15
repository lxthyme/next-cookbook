import type { NextApiRequest, NextApiResponse } from 'next'

import {
	// mockData_Prd_dj_tab4,
	// mockData_Prd_ydj_tab4,
	// mockData_Test_dj_tab4,
	// mockData_2022_01_26 as mockData,
	// mockData_ALL_B2C as mockData
	// mockData_分类球合并优化 as mockData
	mockData, mockData_template,
	mockData_极速版
	// mockData_API_瀑布流OneTab as mockData
} from "@dj/query";

import {
	Category_all,
	Notify_all,
	Slide_all
} from '@dj/hack.query.html.package'

const API = (req: NextApiRequest, res: NextApiResponse) => {
	// const mockData = await mockGet('query.html.js', 'mockData_OnlyO2O')
	// const obj = mockData.mockData_Prd_dj_tab4
	// const obj = mockData.mockData_Prd_ydj_tab4
	// let obj =
	//   // mockData_Prd_dj_tab4
	//   // mockData_Prd_ydj_tab4
	//   mockData_Test_dj_tab4
	// obj.obj.templet.moduleList[1].busiType = 4
	// // obj.obj.templet.moduleList[1].tabItemList = obj.obj.templet.moduleList[1].tabItemList.slice(0, 1)
	// obj.obj.templet.moduleList[1].tabItemList = [
	//   obj.obj.templet.moduleList[1].tabItemList[0],
	//   obj.obj.templet.moduleList[1].tabItemList[2],
	// ]
	// // obj.obj.templet.moduleList[1].tabItemList.forEach(t => {
	// //   t.labelTxt = '23123213'
	// //   t.showLabel = 1
	// // })
	// // obj.obj.templet.moduleList[1].labelColor = '#000000'

	// obj = mockData
	// obj.obj.templet.moduleList[1].tabItemList[0].moduleList = obj.obj.templet.moduleList[1].tabItemList[0].moduleList.slice(0, 12)
	const { obj, ...data_others } = mockData
	const { tabBar, moduleList, config, ...f_templetOthers } = obj.templet
	const { tabBarInfoList, ...f_tabBarOthers } = tabBar
	const data2 = {
		...data_others,
		obj: {
			onOff: obj.onOff,
			templet: {
				// tabBar: {
				// 	tabBarInfoList,
				// 	...f_tabBarOthers,
				// 	// bkPic: "https://Img.st.iblimg.com/fast2home-2/images/kdj/index/2019/09/2136514702.png",
				// 	// barType: 2,
				// 	// bkPicWidth: 750,
				// 	// bkPicHeight: 98,
				// },
				tabBar: {
					...mockData_template.tabBar,
					tabBarInfoList: mockData_template.tabBar.tabBarInfoList.map((t, idx) => {
						if(idx === 0) {
							// t.picTop = 'http://0.0.0.0:3003/img/icon_picTop.png'
							t.picTop = 'https://media.githubusercontent.com/media/lxthyme/next-cookbook/d47f4d1bcedb4d185207b2dc859d602ddc825d9e/public/img/icon_picTop.png'
						}
						return t
					}),
				},
				moduleList,
				// moduleList: moduleList.map((t, idx) => {
				// 	if (idx === 1) {
				// 		const { tabItemList, ...tabItemList_others } = t
				// 		return {
				// 			...tabItemList_others,
				// 			tabItemList: tabItemList?.map((t2, idx2) => {
				// 				const { moduleList: moduleList2, ...moduleList2_others } = t2
				// 				// moduleList2.find(t3 => t3.moduleType == 'Product').showType = 6
				// 				// moduleList2.filter(t3 => t3.moduleType == 'Product').forEach(tt => {
				// 				// 	tt.showType = 6
				// 				// })
				// 				let idx_Notify = 1;
				// 				let idx_Category = 1;
				// 				let idx_Slide = 1;
				// 				return {
				// 					...moduleList2_others,
				// 					moduleList: moduleList2.map((t3, idx3) => {
				// 						if (t3.moduleType === 'WaterFall') {
				// 							t3.wfList = t3.wfList?.slice(0, 1)
				// 						} else if (t3.moduleType === 'Notify') {
				// 							if (idx_Notify == 1) {
				// 								idx_Notify += 1
				// 								return [...Notify_all, t3]
				// 							} else {
				// 								return []
				// 							}
				// 						} else if (t3.moduleType === 'Category') {
				// 							// t2.categoryInfoList = [
				// 							// 	t2.categoryInfoList[1],
				// 							// 	t2.categoryInfoList[0],
				// 							// 	...t2.categoryInfoList.slice(2)
				// 							// ]
				// 							if (idx_Category == 1) {
				// 								idx_Category += 1
				// 								return [...Category_all, t3]
				// 							} else {
				// 								return []
				// 							}
				// 						} else if (t3.moduleType === 'Slide') {
				// 							if (idx_Slide == 1) {
				// 								idx_Slide += 1
				// 								return [...Slide_all, t3]
				// 							} else {
				// 								return []
				// 							}
				// 						}
				// 						return t3
				// 					}).flat()
				// 				}
				// 			})
				// 		}
				// 	}
				// 	return t
				// }),
				config,
				...f_templetOthers
			}
		}
	}
	const data = mockData_极速版
	console.log('-->data2: ', data)
	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, resolve), 100)
	})
		.then(() => {
			res.status(200).json(data)
		})
}

export default API
