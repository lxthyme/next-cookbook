// 种子ID,星区数量,磁石总数,蓝巨星总数,0型恒星总数,星系数据1,星系数据2,星系数据3,星系数据4,星系数据5,星系数据6,星系数据7,星系数据8,星系数据9,星系数据10,星系数据11
// 种子ID,星区数量,磁石总数,蓝巨星总数,0型恒星总数,star1,star2,star3,star4,star5,star6,star7,star8,star9,star10,star11,star12,star13,star14,star15,star16,star17,star18,star19,star20,star21,star22,star23,star24,star25,star26,star27,star28,star29,star30,star31,star32,star33,star34,star35,star36,star37,star38,star39,star40,star41,star42,star43,star44,star45,star46,star47,star48,star49,star50,star51,star52,star53,star54,star55,star56,star57,star58,star59,star60,star61,star62,star63,star64,star65,star66,star67,star68,star69,star70,star71,star72,star73,star74,star75,star76,star77,star78,star79,star80,star81,star82,star83,star84,star85,star86,star87,star88,star89,star90,star91,star92,star93,star94,star95,star96,star97,star98,star99,star100,star101,star102,star103,star104,star105,star106,star107,star108,star109,star110,star111,star112,star113,star114,star115,star116,star117,star118,star119,star120,star121,star122,star123,star124,star125,star126,star127,star128,star129,star130,star131,star132,star133,star134,star135,star136,star137,star138,star139,star140,star141,star142,star143,star144,star145,star146,star147,star148,star149,star150,star151,star152,star153,star154,star155,star156,star157,star158,star159,star160,star161,star162,star163,star164,star165,star166,star167,star168,star169,star170,star171,star172,star173,star174,star175,star176,star177,star178,star179,star180,star181,star182,star183,star184,star185,star186,star187,star188,star189,star190,star191,star192,star193,star194,star195,star196,star197,star198,star199,star200,star201,star202,star203,star204,star205,star206,star207,star208,star209,star210
const enumObj = {
  有水: 1,
  没有水: 0,
  有硫酸: 1,
  没有硫酸: 0,
  戴森球包括1号行星: 1,
  戴森球不包括1号行星: 0,
  包括第二行星: 1,
  不包括第二行星: 0
}

export const formatList = list => list
  .map(t => {
    const { seed, xingqu_count, danjicishi, blueStar, O,
      star1, star2, star3, star4, star5, star6, star7, star8, star9, star10,
      star11, star12, star13, star14, star15, star16, star17, star18, star19, star20,
      star21, star22, star23, star24, star25, star26, star27, star28, star29, star30,
      star31, star32, star33, star34, star35, star36, star37, star38, star39, star40,
      star41, star42, star43, star44, star45, star46, star47, star48, star49, star50,
      star51, star52, star53, star54, star55, star56, star57, star58, star59, star60,
      star61, star62, star63, star64, star65, star66, star67, star68, star69, star70,
      star71, star72, star73, star74, star75, star76, star77, star78, star79, star80,
      star81, star82, star83, star84, star85, star86, star87, star88, star89, star90,
      star91, star92, star93, star94, star95, star96, star97, star98, star99, star100,
      star101, star102, star103, star104, star105, star106, star107, star108, star109, star110,
      star111, star112, star113, star114, star115, star116, star117, star118, star119, star120,
      star121, star122, star123, star124, star125, star126, star127, star128
      // ,star129,star130,
      // star131,star132,star133,star134,star135,star136,star137,star138,star139,star140,
      // star141,star142,star143,star144,star145,star146,star147,star148,star149,star150,
      // star151,star152,star153,star154,star155,star156,star157,star158,star159,star160,
      // star161,star162,star163,star164,star165,star166,star167,star168,star169,star170,
      // star171,star172,star173,star174,star175,star176,star177,star178,star179,star180,
      // star181,star182,star183,star184,star185,star186,star187,star188,star189,star190,
      // star210
    } = t
    return {
      seed,
      xingqu_count,
      danjicishi,
      blueStar, O,
      list: [
        star1, star2, star3, star4, star5, star6, star7, star8, star9, star10,
        star11, star12, star13, star14, star15, star16, star17, star18, star19, star20,
        star21, star22, star23, star24, star25, star26, star27, star28, star29, star30,
        star31, star32, star33, star34, star35, star36, star37, star38, star39, star40,
        star41, star42, star43, star44, star45, star46, star47, star48, star49, star50,
        star51, star52, star53, star54, star55, star56, star57, star58, star59, star60,
        star61, star62, star63, star64, star65, star66, star67, star68, star69, star70,
        star71, star72, star73, star74, star75, star76, star77, star78, star79, star80,
        star81, star82, star83, star84, star85, star86, star87, star88, star89, star90,
        star91, star92, star93, star94, star95, star96, star97, star98, star99, star100,
        star101, star102, star103, star104, star105, star106, star107, star108, star109, star110,
        star111, star112, star113, star114, star115, star116, star117, star118, star119, star120,
        star121, star122, star123, star124, star125, star126, star127, star128
      ]
        .map(t => t.split(';'))
    }
  })
  /// validate
  .map(t => {
    if (t.list.length !== 128) {
      console.log('--->invalidate item: ', t)
    }
    return t
  })
  .map(t => {
    const f_t = t.list
      .sort((a, b) => b.length - a.length)
      // .slice(0, 5)
      .reduce((prev, cur) => {
        const type = {
          戈壁: cur.filter(tmp => tmp.includes('戈壁')).map(t => t.replace('戈壁', '')).join(','),
          灰烬冻土: cur.filter(tmp => tmp.includes('灰烬冻土')).map(t => t.replace('灰烬冻土', '')).join(','),
          水世界: cur.filter(tmp => tmp.includes('水世界')).map(t => t.replace('水世界', '')).join(','),
          冰原冻土: cur.filter(tmp => tmp.includes('冰原冻土')).map(t => t.replace('冰原冻土', '')).join(','),
          猩红冰湖: cur.filter(tmp => tmp.includes('猩红冰湖')).map(t => t.replace('猩红冰湖', '')).join(','),
          草原: cur.filter(tmp => tmp.includes('草原')).map(t => t.replace('草原', '')).join(','),
          贫瘠荒漠: cur.filter(tmp => tmp.includes('贫瘠荒漠')).map(t => t.replace('贫瘠荒漠', '')).join(','),
          红石: cur.filter(tmp => tmp.includes('红石')).map(t => t.replace('红石', '')).join(','),
          干旱荒漠: cur.filter(tmp => tmp.includes('干旱荒漠')).map(t => t.replace('干旱荒漠', '')).join(','),
          熔岩: cur.filter(tmp => tmp.includes('熔岩')).map(t => t.replace('熔岩', '')).join(','),
          樱花海: cur.filter(tmp => tmp.includes('樱花海')).map(t => t.replace('樱花海', '')).join(','),
          火山灰: cur.filter(tmp => tmp.includes('火山灰')).map(t => t.replace('火山灰', '')).join(','),
          飓风石林: cur.filter(tmp => tmp.includes('飓风石林')).map(t => t.replace('飓风石林', '')).join(','),
          黑石盐滩: cur.filter(tmp => tmp.includes('黑石盐滩')).map(t => t.replace('黑石盐滩', '')).join(','),
          海洋丛林: cur.filter(tmp => tmp.includes('海洋丛林')).map(t => t.replace('海洋丛林', '')).join(','),
          冰巨星: cur.filter(tmp => tmp.includes('冰巨星')).map(t => t.replace('冰巨星', '')).join(','),
          气态巨星: cur.filter(tmp => tmp.includes('气态巨星')).map(t => t.replace('气态巨星', '')).join(','),
        }
        const filter_type = Object.keys(type)
          .filter(k => type[k] != '')
          .reduce((prev, k) => {
            prev[k] = type[k]
            return prev
          }, {})
        const star = {
          name: cur[0],
          type: filter_type,
          卫星: cur.filter(tmp => tmp.includes('卫星')).map(t => t.replace('卫星', '')).join(''),
          潮汐: cur.filter(tmp => tmp.includes('潮汐')).map(t => t.replace('潮汐', '')).join(''),
          最大重氢: cur.filter(tmp => tmp.includes('最大重氢')).map(t => t.replace('最大重氢', '')).join(''),
          光度: cur.filter(tmp => tmp.includes('光度')).map(t => t.replace('光度', '')).join(''),
          初始距离: cur.filter(tmp => tmp.includes('初始距离')).map(t => t.replace('初始距离', '')).join(''),
          第一行星: cur.filter(tmp => tmp.includes('1号行星')).map(tmp => enumObj[tmp] ?? tmp),
          第二行星: cur.filter(tmp => tmp.includes('第二行星')).map(tmp => enumObj[tmp] ?? tmp),
          水: cur.filter(tmp => tmp.includes('有水')).map(tmp => enumObj[tmp] ?? tmp),
          硫酸_记录: cur.filter(tmp => tmp.includes('号仅记录条件的第'))
            .map(tmp => enumObj[tmp] ?? tmp)
            .map(tmp => tmp.replace(/^([\s\S]*?)\(0号仅记录条件的第([0-9]{1,})个星系数据\)/g, '$2-$1'))
            .map(tmp => tmp.split('-').map(tmp2 => enumObj[tmp2] ?? tmp2))
            .map(tmp => tmp.join('-')),
          硫酸_必须: cur.filter(tmp => tmp.includes('号必须条件的第'))
            .map(tmp => enumObj[tmp] ?? tmp)
            .map(tmp => tmp.replace(/^([\s\S]*?)\(0号必须条件的第([0-9]{1,})个星系数据\)/g, '$2-$1'))
            .map(tmp => tmp.split('-').map(tmp2 => enumObj[tmp2] ?? tmp2))
            .map(tmp => tmp.join('-')),
          others: cur
            .slice(1)
            .filter(tmp => tmp.length > 0)
            .filter(tmp => !tmp.includes('戈壁') &&
              !tmp.includes('灰烬冻土') &&
              !tmp.includes('水世界') &&
              !tmp.includes('冰原冻土') &&
              !tmp.includes('猩红冰湖') &&
              !tmp.includes('草原') &&
              !tmp.includes('贫瘠荒漠') &&
              !tmp.includes('红石') &&
              !tmp.includes('干旱荒漠') &&
              !tmp.includes('熔岩') &&
              !tmp.includes('樱花海') &&
              !tmp.includes('火山灰') &&
              !tmp.includes('飓风石林') &&
              !tmp.includes('黑石盐滩') &&
              !tmp.includes('海洋丛林') &&
              !tmp.includes('冰巨星') &&
              !tmp.includes('气态巨星') &&
              !tmp.includes('卫星') &&
              !tmp.includes('潮汐') &&
              !tmp.includes('最大重氢') &&
              !tmp.includes('光度') &&
              !tmp.includes('初始距离') &&
              !tmp.includes('第二行星') &&
              !tmp.includes('1号行星') &&
              !tmp.includes('有水') &&
              !tmp.includes('号仅记录条件的第') &&
              !tmp.includes('号必须条件的第'))
        }
        const check_水 = star.水.filter(t => t.length > 1)
        const check_硫酸_记录 = star.硫酸_记录.filter(t => t.length > 1)
        const check_硫酸_必须 = star.硫酸_必须.filter(t => t.length > 1)
        if (check_水.length > 1) {
          console.log('-->check_水: ', check_水)
        }
        if (check_硫酸_记录.length > 1) {
          console.log('-->check_硫酸_记录: ', check_硫酸_记录)
        }
        if (check_硫酸_必须.length > 1) {
          console.log('-->check_硫酸_必须: ', check_硫酸_必须)
        }
        if (star.others.length > 1) {
          console.log('-->star.others: ', star.others)
        }
        if (star.第一行星.length > 1) {
          console.log('-->star.第一行星: ', star.第一行星)
        }
        if (star.第二行星.length > 1) {
          console.log('-->star.第二行星: ', star.第二行星)
        }
        const fmt_star = {
          name: star.name,
          type: star.type,
          卫星: parseFloat(star.卫星) >= 0 ? parseFloat(star.卫星) : star.卫星,
          潮汐: parseFloat(star.潮汐) >= 0 ? parseFloat(star.潮汐) : star.潮汐,
          最大重氢: parseFloat(star.最大重氢) >= 0 ? parseFloat(star.最大重氢) : star.最大重氢,
          光度: parseFloat(star.光度) >= 0 ? parseFloat(star.光度) : star.光度,
          初始距离: parseFloat(star.初始距离) >= 0 ? parseFloat(star.初始距离) : star.初始距离,
          第一行星: parseFloat(star.第一行星) >= 0 ? parseFloat(star.第一行星) : star.第一行星,
          第二行星: parseFloat(star.第二行星) >= 0 ? parseFloat(star.第二行星) : star.第二行星,
          水: parseFloat(star.水.join(', ')) >= 0 ? parseFloat(star.水.join(', ')) : star.水,
          // 硫酸: parseFloat(star.硫酸.join(', ')) >= 0 ? parseFloat(star.硫酸.join(', ')) : star.硫酸,
          硫酸_记录: star.硫酸_记录,
          硫酸_必须: star.硫酸_必须,
          others: star.others
        }
        // prev[cur[0]] = fmt_star
        prev[cur[0]] = [...(prev[cur[0]] ?? []), fmt_star]
        const vList = prev[cur[0]]
        if (vList.length > 1) {
          /// 检查数据是否一致
          const v = vList[0]
          v.硫酸_必须 = [...v.硫酸_必须, ...vList[1].硫酸_必须]
          v.硫酸_记录 = [...v.硫酸_记录, ...vList[1].硫酸_记录]
          if (vList[0].name !== vList[1].name ||
            vList[0].others.length !== 0 ||
            vList[1].others.length !== 0 ||
            vList[0].others.join(', ') !== vList[1].others.join(', ') ||
            JSON.stringify(vList[0].type) !== JSON.stringify(vList[1].type) ||
            vList[0].最大重氢 !== vList[1].最大重氢 ||
            vList[0].光度 !== vList[1].光度 ||
            vList[0].卫星 !== vList[1].卫星 ||
            vList[0].潮汐 !== vList[1].潮汐 ||
            vList[0].初始距离 !== vList[1].初始距离 ||
            vList[0].水 !== vList[1].水 ||
            v.硫酸_必须.length !== 1 ||
            v.硫酸_记录.length !== 1 ||
            vList[0].第一行星 !== vList[1].第一行星 ||
            vList[0].第二行星 !== vList[1].第二行星) {
            console.log('---> 数据不一致!!! ', v)
          } else {
            // v.硫酸_必须 = v.硫酸_必须.length <= 1 ? v.硫酸_必须.join(', ') : v.硫酸_必须
            // v.硫酸_记录 = v.硫酸_记录.length <= 1 ? v.硫酸_记录.join(', ') : v.硫酸_记录
            v.硫酸_必须 = v.硫酸_必须.join(', ')
            v.硫酸_记录 = v.硫酸_记录.join(', ')
            prev[cur[0]] = v
          }
        }
        return prev
      }, {})

    const summary = Object.keys(f_t)
      .reduce((prev, k) => {
        const v = f_t[k]
        prev['最大重氢'] = [...(prev['最大重氢'] ?? []), v.最大重氢]
        prev['光度'] = [...(prev['光度'] ?? []), v.光度]
        prev['卫星'] = [...(prev['卫星'] ?? []), v.卫星]
        prev['潮汐'] = [...(prev['潮汐'] ?? []), v.潮汐]
        prev['初始距离'] = [...(prev['初始距离'] ?? []), v.初始距离]
        prev['水'] = [...(prev['水'] ?? []), v.水]
        prev['硫酸_记录'] = [...(prev['硫酸_记录'] ?? []), v.硫酸_记录]
        prev['硫酸_必须'] = [...(prev['硫酸_必须'] ?? []), v.硫酸_必须]
        prev['第一行星'] = [...(prev['第一行星'] ?? []), v.第一行星]
        prev['第二行星'] = [...(prev['第二行星'] ?? []), v.第二行星]
        return prev
      }, {})
    const __summary = {
      ...summary,
      sort_最大重氢: summary.最大重氢.sort((a, b) => b - a),
      sort_光度: summary.光度.sort((a, b) => b - a),
      sort_卫星: summary.卫星.sort((a, b) => b - a),
      sort_潮汐: summary.潮汐.sort((a, b) => b - a),
      sort_初始距离: summary.初始距离.sort((a, b) => b - a),
      sort_水: summary.水.sort((a, b) => b - a),
      sort_硫酸_记录: summary.硫酸_记录.sort((a, b) => parseFloat(b) - parseFloat(a)),
      sort_硫酸_必须: summary.硫酸_必须.sort((a, b) => parseFloat(b) - parseFloat(a)),
      sort_第一行星: summary.第一行星.sort((a, b) => b - a),
      sort_第二行星: summary.第二行星.sort((a, b) => b - a),
      sum_最大重氢: summary.最大重氢.reduce((prev, cur) => prev + cur, 0),
      sum_光度: summary.光度.reduce((prev, cur) => prev + cur, 0),
      sum_卫星: summary.卫星.reduce((prev, cur) => prev + cur, 0),
      sum_潮汐: summary.潮汐.reduce((prev, cur) => prev + cur, 0),
      sum_初始距离: summary.初始距离.reduce((prev, cur) => prev + cur, 0),
      sum_水: summary.水.reduce((prev, cur) => prev + cur, 0),
      sum_硫酸_记录: summary.硫酸_记录.map(t => t.split('-')[1]).map(t => parseFloat(t) >= 0 ? parseFloat(t) : t).reduce((prev, cur) => prev + cur, 0),
      sum_硫酸_必须: summary.硫酸_必须.map(t => t.split('-')[1]).map(t => parseFloat(t) >= 0 ? parseFloat(t) : t).reduce((prev, cur) => prev + cur, 0),
      sum_第一行星: summary.第一行星.reduce((prev, cur) => prev + cur, 0),
      sum_第二行星: summary.第二行星.reduce((prev, cur) => prev + cur, 0),
    }
    // Object.values(f_t)
    // .map(t => t.others)
    // .map(t => t.水)
    // .map(t => ({ 水: t.水, name: t.name }))
    // .map(t => t.硫酸).sort((a, b) => parseFloat(a) - parseFloat(b))
    // .map(t => t.光度)
    return { ...t, f_t, __summary }
  })
