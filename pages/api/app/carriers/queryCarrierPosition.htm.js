export default (req, res) => {
    const { page } = req.body;
    const total_page = Math.max(0, 5 - page);

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const list = [];

    const data = mockData2;

    setTimeout(() => {
        res.status(200).json(data);
    }, 1000);
};

// const mockData2 = { "msg": "很抱歉，此订单不支持查看骑手位置", "resCode": "E8015" }
const mockData2 = {
    "obj": "2wR+GTJfuZ7ecO4LXgN9JOJeFitU1UcouLxZwn00Hn+pJtumqhdnNEu1XEgI 49a53qWQbqLyLCgmqj5WKKe3CftWAi2hhZOBieg+rF6X6m7gwwo2PzHwV36R 07Hl6uKjGxgUMMp7nm9og/MjbAT90TbJvbu5/U58GOXVxPfipkTrGd4aljPl Wgv58NK/9uJ+OFm5qWPp3tOkCF0ALMJiLPoYnkxcs/BW5Vx5G5FjTVQ2AisB yN3QpRi+KDCSZQ21hnIVScEYIsY/utnHlA5wEJTBuCivyroiF/Wc+wJ24L+7 BSHgWU2NqSaRf4SFUIiUj6voH3AxMfcDmpbGkWbGdf09G+q06RDyi/a0P5Ke r7YyQUGQyxVoucXXbolvVZDshabc+XuNJQemr4Y1OldXvkgc/ajV4FQW73zZ NeZoMB2w5MizbXTaOC01hCGbseetR7UKX+su/EkEStUPFn9GdZVBX8FoC+S/ dZnqfj4k+a9MRhGBn+Yf6SJhgdC7312OJW35F2JoTp/pg7IN5nXBRAyL0ENC IUkrCmIoxxsueoKWKxqWsbJsJ5XU70E3tsMCk75XfhLYk0mxzLP/YA1Q5oPz ac23FqGU",
    "resCode": "00100000",
    "resCode": "E8015",
    "resCode": "00100005"
}

/// { "orderNoList": ["LAZ20210816464754"], "resource": "LHDJ" }
const mockData = {
	"obj": "ZcaEeEhC/Bv31cfaRNB1NcOHrbAYA7Np+AIV2gg9ofzrYCOGem71QY9653Yo 7IwydYi8RJoWURFXDVBOv/Wa6BIjWtyB9Ko4WDkuxR4Lbi0hVCuOttioAeh2 KcqYgNnHACVxt+YvNJ+ye3eRD/yAc7SgbRLys6GVtikcD5pvsk3J24bo1sAB m+v1HPldMMju+/jxx5ALdkFfl0ighmV2JbQUddaDKVOczaMi5w4mHusFA5Nr gTAGy5x9hvwa9XzIXwXmepn5MEnmUntXzNu06zBkyViorjf4MAR/dPuK7XHe wptoouvCZ++pkh7OOtQLbLLAKFBUPrVrzubRYhsXQ4loANOXxgXEfGVYJgHF m96pQQAimeapXJGa3OB/OWzGzlFV0VJUXHHETMPSBVSBqCcKZgU0j/Mh4j2z IiKXqC4kGYaE7BMi8UnqLCMmLIkehNqFgif0D7payfEw4D2LUskLehdqh/MI qiTOmp5/luOP93RqTo31AsxngQfbEgm1uJCwJBKaLENIwI18a4ycNGeRa8yw BePXRVVeigmea8nWdBu1aN/D3kq9EdzpD8MUxcUDBZPqAQmjYDudyFzLMbRC ray0UxRa",
	"resCode": "00100000"
}
// {
//     obj: [
//         {
//             carrierName: "王汪-踪233",
//             carrierPhone: "19974537894",
//             distance: 68,
//             expressNo: "LAZ20210816464754",
//             latitude: "31.232604",
//             longitude: "121.534066",
//             orderNo: "LAZ20210816464754",
//             orderStatus: "1003",
//             receiverAddress:
//                 "上海市 市辖区 浦东新区 6号线_源深体育中心_地铁站__1号口",
//             receiverLatitude: "31.233004",
//             receiverLongitude: "121.534645",
//             senderAddress: "羽山路298号",
//             senderLatitude: "31.2315",
//             senderLongitude: "121.54149",
//         },
//     ],
//     resCode: "00100000",
// }
