import type { NextApiRequest, NextApiResponse } from "next";
import {
  mockData_Test_dj_tab4,
  mockData_Prd_ydj_tab4,
  mockData_full,
} from "@dj/range";

/// https://www.baidu.com

const API = (req: NextApiRequest, res: NextApiResponse) => {
  //   const data =
  // 	data.obj.list
  //     .forEach(t => {
  //       // t.shopName = t.shopName.slice(0, 1)
  //       // t.shopName += t.shopName
  //       // t.showFreeLimitDesc += (t.showFreeLimitDesc + t.showFreeLimitDesc + t.showFreeLimitDesc);
  //     })
  const { obj, ...data_others } =
    // mockData_Prd_ydj_tab4
    // mockData_Test_dj_tab4
    mockData_full;
  	// mockData;
  const { list, ...obj_others } = obj;
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      list: [
		...list,
		{
			...list[0],
			showSinceSupport: '1',
			showDistributeSupport: '1',
		}, {
			...list[0],
			showSinceSupport: '0',
			showDistributeSupport: '0',
		}, {
			...list[0],
			showSinceSupport: '1',
			showDistributeSupport: '0',
		}, {
			...list[0],
			showSinceSupport: '0',
			showDistributeSupport: '1',
		}
	  ],
    },
  };

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000);
  }).then(() => {
    res.status(200).json(data);
  });
};

export default API
