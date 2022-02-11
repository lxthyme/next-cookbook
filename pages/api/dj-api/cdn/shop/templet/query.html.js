import {
	mockData_Prd_dj_tab4,
	mockData_Prd_ydj_tab4,
	mockData_Test_dj_tab4,
	mockData_2022_01_26 as mockData
} from "../../../../../../mockData/dj/query.html";

const API = async (req, res) => {
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
	const { obj: tmp, ...f_objOthers } = mockData
	const { tabBar, moduleList, config, ...f_templetOthers } = tmp.templet
	const { tabBarInfoList, ...f_tabBarOthers } = tabBar
	const obj = {
		...f_objOthers,
		obj: {
			onOff: tmp.onOff,
			templet: {
				tabBar: {
					tabBarInfoList,
					...f_tabBarOthers,
					// bkPic: "https://Img.st.iblimg.com/fast2home-2/images/kdj/index/2019/09/2136514702.png",
					// barType: 2,
					// bkPicWidth: 750,
					// bkPicHeight: 98,
				},
				moduleList: moduleList.map((t, idx) => {
					if(idx === 1) {
						const { tabItemList, ...tabItemList_others } = t
						return {
							...tabItemList_others,
							tabItemList: tabItemList.map((t, idx) => {
								const { moduleList, ...moduleList_others } = t
								return {
									...moduleList_others,
									moduleList: moduleList.map(t => {
										if(t.moduleType === 'Category') {
											t.categoryInfoList = [
												t.categoryInfoList[1],
												t.categoryInfoList[0],
												...t.categoryInfoList.slice(2)
											]
										}
										return t
									})
								}
							})
						}
					}
					return t
				}),
				config,
				...f_templetOthers
			}
		}
	}
	return new Promise(function (resolve) {
		setTimeout(resolve.bind(null, resolve), 100)
	})
		.then(() => {
			res.status(200).json(obj)
		})
}

export default API
