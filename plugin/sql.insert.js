const format_item = item => {
  return {
    // seed: id,
    // type: Object.keys(item.type).filter(key => item.type[key] >= 0).map(key => `${key}:${item.type[key]}`).flat().join(','),
    // GuangDu: item.光度,
    // ChuShiXingXi: item.初始星系 ?? '',
    // ChuShiJuLi: item.初始距离,
    // WeiXing: item.卫星,
    // ZuiDaZhongQing: item.最大重氢,
    // QiTaiJuQing: item.气态巨星 ?? 0,
    // Shui: item.水,
    // ChaoXiSuoDing: item.潮汐,
    // LiuSuan: item.硫酸,
    // DiYiXingXing: item.第一行星,
    // DiErXingXing: item.第二行星,
    seed: parseFloat(item.seed),
    chushijuli: item.初始距离,
    guangdu: parseFloat(item.光度),
    guangdu_gt2: item.光度_sort.filter(t => t >= 2).join(','),
    danjicishi: parseFloat(item.单机磁石),
    O: -1,
    blueStar: parseFloat(item.蓝巨星),
    max_h2: item.最大重氢,
    max_h2_gt2: item.最大重氢_sort.filter(t => t >= 0.2).join(','),
    chaoxi: item.潮汐,
    weixing: item.卫星,
    shui: item.水,
    liusuan_required: item.硫酸_必须,
    liusuan_record: item.硫酸_记录,
    firstXingXing: item.第一行星,
    secondXingXing: item.第二行星
  }
}
export const insertList = async (table, list) => {
  return fetch('http://0.0.0.0:3003/api/lxthyme/dsp/insert3', {
    method: 'post',
    // body: { table, item },
    body: JSON.stringify({
      table,
      list: list.map(t => format_item(t))
    })
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.code === 10000) {
        let idx = localStorage.getItem('idx')
        idx = parseFloat(idx) ?? 0
        idx += 1
        localStorage.setItem('previous_idx', idx)
      }
      // console.log('result: ', res)
      return res
    })
    .catch(error => {
      console.log('-->Insert Error: ', error)
      return Promise.reject(error)
    })
}
