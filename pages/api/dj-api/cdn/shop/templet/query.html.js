import {
  mockData_Prd_dj_tab4,
  mockData_Prd_ydj_tab4,
  mockData_Test_dj_tab4
} from "../../../../../../mockData/dj/query.html";

const API = async (req, res) => {
  // const mockData = await mockGet('query.html.js', 'mockData_OnlyO2O')
  // const obj = mockData.mockData_Prd_dj_tab4
  // const obj = mockData.mockData_Prd_ydj_tab4
  const obj =
    // mockData_Prd_dj_tab4
    // mockData_Prd_ydj_tab4
    mockData_Test_dj_tab4
  obj.obj.templet.moduleList[1].busiType = 3
  obj.obj.templet.moduleList[1].tabItemList = obj.obj.templet.moduleList[1].tabItemList.slice(0, 1)
  // obj.obj.templet.moduleList[1].tabItemList.forEach(t => {
  //   t.labelTxt = '23123213'
  //   t.showLabel = 1
  // })
  obj.obj.templet.moduleList[1].labelColor = '#000000'
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 100)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API
