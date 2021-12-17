export const getList = (page, pageSize = 20, table) => {
  return fetch(`http://0.0.0.0:3003/api/lxthyme/dsp/get?pageSize=${pageSize}&page=${page}&table=${table}`)
    .then(res => res.json())
    .then(res => {
      if (res.code === 10000) {
        return res
      } else {
        return Promise.reject(res)
      }
    })
}
export const getAllList = (page, pageSize, table, idx) => {
  getList(page, pageSize, table)
    .then((res) => {
      const { page, pageSize, total, list } = res
      // console.log('Params: ', { page, pageSize, total })
      // return new Promise(async (resolve, reject) => {
      //   const result = await list.map(async t => {
      //     await insert(t)
      //   })
      //   console.log('Result: ', result)
      //   resolve({ page, pageSize, total })
      // })
      // window.allGetList.push(list)
      return Promise.all(list.map(async t => {
        return await insert(t)
      }))
        .then(res => {
          // window.allInsertResult.push(res)
          return { page, pageSize, total }
        })
    })
    .then(({ page, pageSize, total }) => {
      console.log('Go Next!!!', { page, pageSize, total })
      if ((pageSize * page) < total) {
        return getAllList(page + 1, pageSize, table, idx)
      } else if ((pageSize * page) >= total && (idx + 1) < window.NeedInsertTables.length) {
        const nextTable = window.NeedInsertTables[idx + 1]
        return getAllList(1, pageSize, nextTable, idx + 1)
      }
      return 0
    })
}
