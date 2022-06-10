import type { NextApiRequest, NextApiResponse } from 'next'

import {
	// mockData_Prd_dj_tab4,
	// mockData_Prd_ydj_tab4,
	// mockData_Test_dj_tab4,
	// mockData_2022_01_26 as mockData,
	// mockData_ALL_B2C as mockData
	mockData_tmp as mockData
} from "@dj/query.html";

export default (req: NextApiRequest, res: NextApiResponse) => {
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
	const { obj, ...data_others } = mockData_test
	const { tabBar, moduleList, config, ...f_templetOthers } = obj.templet
	const { tabBarInfoList, ...f_tabBarOthers } = tabBar
	const data = {
		...data_others,
		obj: {
			onOff: obj.onOff,
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
					if (idx === 1) {
						const { tabItemList, ...tabItemList_others } = t
						return {
							...tabItemList_others,
							tabItemList: tabItemList?.map((t2, idx2) => {
								const { moduleList: moduleList2, ...moduleList2_others } = t2
								// moduleList2.find(t3 => t3.moduleType == 'Product').showType = 6
								moduleList2.filter(t3 => t3.moduleType == 'Product').forEach(tt => {
									tt.showType = 6
								})
								let index = 0;
								return {
									...moduleList2_others,
									moduleList: moduleList2.map((t3, idx3) => {
										if (t3.moduleType === 'Notify') {
											// const t31 = JSON.parse(JSON.stringify(t3))
											// const t32 = JSON.parse(JSON.stringify(t3))
											// const t33 = JSON.parse(JSON.stringify(t3))
											// t31.showType = '1'
											// t32.showType = '2'
											// t33.showType = '3'
											// return [t31, t32, t33]
										} else if (t3.moduleType === 'Category') {
											// t2.categoryInfoList = [
											// 	t2.categoryInfoList[1],
											// 	t2.categoryInfoList[0],
											// 	...t2.categoryInfoList.slice(2)
											// ]
											index += 1;
											t3.styleType = '4'
											t3.categoryInfoList = ['15784', '15654', '15644', '15824', '15660', '15653', '15651', '15658', '15661', '15652', '15655', '15645', '15662', '15656']
												.map(t4 => {
													return {
														cateId: `${t4}`
													}
												})
											// const t31 = JSON.parse(JSON.stringify(t3))
											// const t32 = JSON.parse(JSON.stringify(t3))
											// const t33 = JSON.parse(JSON.stringify(t3))
											// const t34 = JSON.parse(JSON.stringify(t3))
											// const t35 = JSON.parse(JSON.stringify(t3))
											// const t36 = JSON.parse(JSON.stringify(t3))
											// const t37 = JSON.parse(JSON.stringify(t3))
											// const t38 = JSON.parse(JSON.stringify(t3))
											// const t39 = JSON.parse(JSON.stringify(t3))
											// const t40 = JSON.parse(JSON.stringify(t3))
											// const t41 = JSON.parse(JSON.stringify(t3))
											// const t42 = JSON.parse(JSON.stringify(t3))
											// const t43 = JSON.parse(JSON.stringify(t3))
											// const t44 = JSON.parse(JSON.stringify(t3))
											// const t45 = JSON.parse(JSON.stringify(t3))
											// const t46 = JSON.parse(JSON.stringify(t3))
											// const t47 = JSON.parse(JSON.stringify(t3))
											// const t48 = JSON.parse(JSON.stringify(t3))
											// const t49 = JSON.parse(JSON.stringify(t3))
											// const t50 = JSON.parse(JSON.stringify(t3))
											// const t51 = JSON.parse(JSON.stringify(t3))
											// t31.categoryInfoList = t3.categoryInfoList.slice(0, 3)
											// t32.categoryInfoList = t3.categoryInfoList.slice(0, 4)
											// t33.categoryInfoList = t3.categoryInfoList.slice(0, 5)
											// t34.categoryInfoList = t3.categoryInfoList.slice(0, 6)
											// t35.categoryInfoList = t3.categoryInfoList.slice(0, 7)
											// t36.categoryInfoList = t3.categoryInfoList.slice(0, 8)
											// t37.categoryInfoList = t3.categoryInfoList.slice(0, 9)
											// t38.categoryInfoList = t3.categoryInfoList.slice(0, 10)
											// t39.categoryInfoList = t3.categoryInfoList.slice(0, 11)
											// t40.categoryInfoList = t3.categoryInfoList.slice(0, 12)
											// t41.categoryInfoList = t3.categoryInfoList.slice(0, 13)
											// t42.categoryInfoList = t3.categoryInfoList.slice(0, 14)
											// t43.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 1))
											// t44.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 2))
											// t45.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 3))
											// t46.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 4))
											// t47.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 5))
											// t48.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 6))
											// t49.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 7))
											// t50.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 8))
											// t51.categoryInfoList.splice(t3.categoryInfoList.length, 0, ...t3.categoryInfoList.slice(0, 9))
											// return [t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51]
										}
										return t3
									}).flat()
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
			res.status(200).json(data)
		})
}

const mockData_test = { "success": true, "resCode": "00100000", "timestamp": 1653978373675, "obj": { "onOff": "Y", "templet": { "temType": 1, "mBy": "米萍", "channel": "APP", "tabBar": { "tabBarInfoList": [], "backColor": "#FFFAF0", "templetSid": 4604, "cartNumColor": "#FF0000", "bkPic": null, "barType": 1, "bkPicWidth": 750, "bkPicHeight": 98, "sid": 14859 }, "cTime": "2022-05-06 17:25:03", "version": 1653906153000, "sid": 4604, "moduleList": [{ "pic1ButName": null, "ssButName": null, "mwButId": 82426, "distance": null, "smButId": 82421, "syButId": 82423, "pic1ResourceId": null, "pic2ButName": null, "searchResId": null, "sid": 4704, "styleType": 4, "pic2ResourceId": null, "bgType": 0, "pic1": null, "syButName": null, "smButName": null, "inStore": 1, "pic2": null, "zzButId": 82427, "searchModeType": 1, "pic1ButId": 82424, "hyButName": null, "bgWidth": 750, "mdButId": 82419, "moduleType": "Head", "pic1JumpType": null, "entButton": "1,2", "bgImg": null, "pic1ModeType": 1, "qdButName": null, "entButtonList": [1, 2], "hyButId": 82418, "pic2ModeType": 1, "backColor": "#FF774F", "pic2ButId": 82425, "qdButId": 82420, "mdButName": null, "zzButName": null, "mwButName": null, "pic2JumpType": null, "ssButId": 82422, "bgHeight": 350 }, { "styleType": 3, "fcDef": null, "moduleType": "Tab", "fcActive": null, "showType": 1, "busiType": 1, "position": 1, "tabItemList": [{ "resourceId": null, "tabName": "O2O", "storeGoodsType": 1, "butId": 82428, "tabType": 1, "addInfo": null, "pic": null, "labelTxt": "O2O角标", "showLabel": 1, "sid": 3986, "tabSid": 3924, "modeType": 1, "moduleList": [{ "picWidth": 750, "styleType": 1, "modeType": 1, "resourceId": "2020102301", "picHeight": 400, "moduleType": "VipProduct", "buttonInfo": "83880&_&,83881&_&", "buttonList": [{ "name": null, "id": 83880 }, { "name": null, "id": 83881 }], "resourceIdSec": null, "sid": 16052 }, { "picWidth": 750, "styleType": 1, "isLogin": 0, "modeType": 1, "resourceId": "2020102302", "picHeight": 240, "moduleType": "VipCoupon", "buttonInfo": "72148&_&", "buttonList": null, "sid": 16452 }, { "picWidth": 750, "bgWidth": null, "resourceId": "20210207", "picHeight": 350, "moduleType": "Slide", "butId": 82431, "showBg": 0, "showRadius": 1, "showAddr": 1, "sid": 14897, "bgPic": null, "styleType": 1, "modeType": 1, "bgColor": null, "butName": null, "bgHeight": null }, { "styleType": 1, "modeType": 1, "resourceId": "201808201637", "moduleType": "Notify", "butId": 82432, "showType": 1, "pic": "https://Img.st.iblimg.com/fast2home-2/images/kdj/index/2018/10/1640740375.png", "butName": null, "sid": 13677 }, { "moduleType": "Category", "showText": 1, "but1Id": 83840, "buttonList": [{ "name": null, "id": 83840 }, { "name": null, "id": 83841 }, { "name": null, "id": 83842 }, { "name": null, "id": 83843 }, { "name": null, "id": 83844 }, { "name": null, "id": 83845 }, { "name": null, "id": 83846 }, { "name": null, "id": 83847 }, { "name": null, "id": 83848 }, { "name": null, "id": 83849 }, { "name": null, "id": 83850 }, { "name": null, "id": 83851 }, { "name": null, "id": 83852 }, { "name": null, "id": 83853 }, { "name": null, "id": 83854 }, { "name": null, "id": 83855 }, { "name": null, "id": 83856 }, { "name": null, "id": 83857 }, { "name": null, "id": 83858 }, { "name": null, "id": 83859 }], "but3Id": 83842, "textColor": null, "but2Id": 83841, "but1Name": null, "but5Id": 83844, "sid": 14736, "but3Name": null, "but4Id": 83843, "but5Name": null, "styleType": 3, "modeType": 1, "but4Pic": null, "but5Pic": null, "categoryInfoList": [{ "jumpType": 1, "resourceId": null, "butPriorEnd": 20, "butStart": 1, "butEnd": 20, "categoryId": 14736, "sid": 16308, "butPriorStart": 1 }], "but1Pic": null, "buttonInfo": "83840&_&,83841&_&,83842&_&,83843&_&,83844&_&,83845&_&,83846&_&,83847&_&,83848&_&,83849&_&,83850&_&,83851&_&,83852&_&,83853&_&,83854&_&,83855&_&,83856&_&,83857&_&,83858&_&,83859&_&", "but3Pic": null, "but2Pic": null, "but4Name": null, "but2Name": null }, { "moduleType": "Category", "showText": 1, "but1Id": 83865, "buttonList": [{ "name": null, "id": 83865 }, { "name": null, "id": 83866 }, { "name": null, "id": 83867 }, { "name": null, "id": 83868 }, { "name": null, "id": 83869 }, { "name": null, "id": 83870 }, { "name": null, "id": 83871 }, { "name": null, "id": 83872 }, { "name": null, "id": 83873 }, { "name": null, "id": 83874 }], "but3Id": 83867, "textColor": null, "but2Id": 83866, "but1Name": null, "but5Id": 83869, "sid": 14741, "but3Name": null, "but4Id": 83868, "but5Name": null, "styleType": 2, "modeType": 1, "but4Pic": null, "but5Pic": null, "categoryInfoList": [{ "jumpType": 1, "resourceId": null, "butPriorEnd": 10, "butStart": 1, "butEnd": 10, "categoryId": 14741, "sid": 16309, "butPriorStart": 1 }], "but1Pic": null, "buttonInfo": "83865&_&,83866&_&,83867&_&,83868&_&,83869&_&,83870&_&,83871&_&,83872&_&,83873&_&,83874&_&", "but3Pic": null, "but2Pic": null, "but4Name": null, "but2Name": null }, { "styleType": 1, "modeType": 1, "resourceId": "2020010701", "moduleType": "Timer", "butId": 82443, "butName": null, "sid": 13535 }, { "modeType": 1, "resourceId": "2020010701", "moduleType": "Product", "butId": 82444, "showType": 3, "productNum": 6, "butName": null, "sid": 17566 }, { "picWidth": 375, "resourceId": "2021082506", "picHeight": 220, "moduleType": "Picture", "but1Id": 82445, "but3Id": 82447, "but2Id": 82446, "but1Name": null, "but5Id": 82449, "sid": 17875, "but3Name": null, "but4Id": 82448, "but5Name": null, "but6Id": 82450, "modeType": 1, "showType": 5, "but6Name": null, "but4Name": null, "but2Name": null }, { "modeType": 1, "resourceId": "20220511", "moduleType": "Product", "butId": 82945, "showType": 6, "productNum": 200, "butName": null, "sid": 17592 }, { "picWidth": 750, "resourceId": "2021090601", "picHeight": 350, "moduleType": "Picture", "but1Id": 82451, "but3Id": 82453, "but2Id": 82452, "but1Name": null, "but5Id": 82455, "sid": 17876, "but3Name": null, "but4Id": 82454, "but5Name": null, "but6Id": 82456, "modeType": 1, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "picWidth": 750, "resourceId": "20210617", "picHeight": 350, "moduleType": "Picture", "but1Id": 82457, "but3Id": 82459, "but2Id": 82458, "but1Name": null, "but5Id": 82461, "sid": 17877, "but3Name": null, "but4Id": 82460, "but5Name": null, "but6Id": 82462, "modeType": 1, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "modeType": 1, "resourceId": "20210617", "moduleType": "Product", "butId": 82463, "showType": 4, "productNum": 10, "butName": null, "sid": 17567 }, { "picWidth": 750, "resourceId": "2020010703", "picHeight": 350, "moduleType": "Picture", "but1Id": 82464, "but3Id": 82466, "but2Id": 82465, "but1Name": null, "but5Id": 82468, "sid": 17878, "but3Name": null, "but4Id": 82467, "but5Name": null, "but6Id": 82469, "modeType": 1, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "modeType": 1, "resourceId": "2020010703", "moduleType": "Product", "butId": 82470, "showType": 5, "productNum": 30, "butName": null, "sid": 17568 }, { "styleType": 1, "modeType": 1, "moduleType": "WaterFall", "sid": 2423, "wfList": [{ "picWidth": 343, "wfSid": 2423, "resIdPic": null, "picHeight": 500, "scopeMax": 20, "butId": 83882, "contType": 2, "scopeMin": 1, "itemInd": 0, "sid": 5087, "firstGoodsNum": null, "goodsTotal": 10, "showPic": 0, "resIdGoods": "2021081801", "butName": null }, { "picWidth": 343, "wfSid": 2423, "resIdPic": null, "picHeight": 500, "scopeMax": 20, "butId": 83883, "contType": 1, "scopeMin": 1, "itemInd": 1, "sid": 5088, "firstGoodsNum": null, "goodsTotal": 200, "showPic": 0, "resIdGoods": "2021081803", "butName": null }, { "picWidth": 343, "wfSid": 2423, "resIdPic": null, "picHeight": 500, "scopeMax": 20, "butId": 83884, "contType": 1, "scopeMin": 1, "itemInd": 2, "sid": 5089, "firstGoodsNum": null, "goodsTotal": 200, "showPic": 0, "resIdGoods": "20210617", "butName": null }] }], "picUn": null, "tabInd": 0, "butName": null }, { "resourceId": null, "tabName": "联华云超", "storeGoodsType": 1, "butId": 82473, "tabType": 2, "addInfo": null, "pic": null, "labelTxt": "联华角标", "showLabel": 1, "sid": 3987, "tabSid": 3924, "modeType": 1, "moduleList": [{ "picWidth": 750, "resourceId": "20220420", "picHeight": 110, "moduleType": "Picture", "but1Id": 82478, "but3Id": 82480, "but2Id": 82479, "but1Name": null, "but5Id": 82482, "sid": 17879, "but3Name": null, "but4Id": 82481, "but5Name": null, "but6Id": 82483, "modeType": 2, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "picWidth": 750, "resourceId": "202204201", "picHeight": 350, "moduleType": "Picture", "but1Id": 82484, "but3Id": 82486, "but2Id": 82485, "but1Name": null, "but5Id": 82488, "sid": 17880, "but3Name": null, "but4Id": 82487, "but5Name": null, "but6Id": 82489, "modeType": 2, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "picWidth": 750, "bgWidth": null, "resourceId": "2021092301", "picHeight": 350, "moduleType": "Slide", "butId": 82490, "showBg": 0, "showRadius": 1, "showAddr": 1, "sid": 14898, "bgPic": null, "styleType": 1, "modeType": 2, "bgColor": null, "butName": null, "bgHeight": null }, { "picWidth": 750, "resourceId": "2021092302", "picHeight": 350, "moduleType": "Picture", "but1Id": 82491, "but3Id": 82493, "but2Id": 82492, "but1Name": null, "but5Id": 82495, "sid": 17881, "but3Name": null, "but4Id": 82494, "but5Name": null, "but6Id": 82496, "modeType": 2, "showType": 1, "but6Name": null, "but4Name": null, "but2Name": null }, { "modeType": 2, "resourceId": "2021092302", "moduleType": "Product", "butId": 82497, "showType": 4, "productNum": 10, "butName": null, "sid": 17569 }, { "modeType": 2, "resourceId": "2021092302", "moduleType": "Product", "butId": 82982, "showType": 6, "productNum": 5, "butName": null, "sid": 17593 }], "picUn": null, "tabInd": 1, "butName": null }], "labelColor": "#000000", "sid": 3924 }], "name": "APP--武宁--O2O+B2C-最新-0506", "cBy": "米萍", "mTime": "2022-05-30 18:22:33", "isDel": null, "config": { "cpPicType": 1, "cpTitResId": null, "prmButName": null, "myCpButId": 82415, "bkTopPic": null, "prmResId": "2021092201", "ctCpPicWidth": null, "sid": 4124, "cpButId": 82414, "myCpPicType": 1, "showPrm": 1, "ctCpPicType": 1, "prmPicHeight": 120, "ctCpButName": null, "adButId": null, "getMoreCoupon": 1, "adButName": null, "ctCpButId": 82416, "showCpPop": 1, "c_popPriority": "type:1,priority:1_type:2,priority:2", "myCpPicWidth": null, "adResId": "2020061502", "popPriority": [{ "type": 1, "priority": 1 }, { "type": 2, "priority": 2 }], "showYyzz": 1, "showAdPop": 1, "prmButId": 82417, "ctCpPic": null, "backColor": "#464BA0", "myCpPic": null, "cpTitModeType": 1, "templetSid": 4604, "ctCpPicHeight": null, "myCpPicHeight": null, "adModeType": 1, "cpPic": null, "prmPicWidth": 120, "cpButName": null, "myCpButName": null }, "tempType": 1, "status": 1 } } }
