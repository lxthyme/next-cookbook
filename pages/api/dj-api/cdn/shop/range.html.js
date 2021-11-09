import { mockData_Prd_ydj_tab4 } from "../../../../../mockData/dj/range.html";
const API = (req, res) => {
  const obj = mockData_Prd_ydj_tab4
  obj.obj.list
    .forEach(t => {
      t.shopName = t.shopName.slice(0, 1)
    })

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API
