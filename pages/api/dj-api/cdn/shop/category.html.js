export default (req, res) => {
    const { page } = req.body
    const total_page = Math.max(0, 5 - page)

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const list = []

    // const data = mockData
    const data = YDJMockData

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json({
                "success": true,
                "resCode": "00100000",
                "obj": data
            })
        })
}

const mockData = {
    "categoryList": [{
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/03/736125566.gif",
        "rywCategorys": [],
        "categoryName": "新品尝鲜",
        "categoryId": 28832
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/830555700.gif",
        "rywCategorys": [],
        "categoryName": "热销爆款",
        "categoryId": 29892
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/804110052.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "饮用水",
            "categoryId": 21841
        }, {
            "rywCategorys": [],
            "categoryName": "碳酸乳饮",
            "categoryId": 21840
        }, {
            "rywCategorys": [],
            "categoryName": "茶饮料",
            "categoryId": 29615
        }, {
            "rywCategorys": [],
            "categoryName": "量贩啤酒",
            "categoryId": 21821
        }, {
            "rywCategorys": [],
            "categoryName": "功能饮品",
            "categoryId": 21822
        }],
        "categoryName": "整箱酒饮",
        "categoryId": 21820
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1545032570.png",
        "rywCategorys": [],
        "categoryName": "冰淇淋",
        "categoryId": 26872
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1192971311.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "简装月饼",
            "categoryId": 28241
        }, {
            "rywCategorys": [],
            "categoryName": "月饼礼盒",
            "categoryId": 28242
        }, {
            "rywCategorys": [],
            "categoryName": "蟹券礼盒",
            "categoryId": 29979
        }],
        "categoryName": "月饼蟹券",
        "categoryId": 26874
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/2134616341.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "精选水果",
            "categoryId": 29962
        }, {
            "rywCategorys": [],
            "categoryName": "苹果梨",
            "categoryId": 22020
        }, {
            "rywCategorys": [],
            "categoryName": "柑橙柚",
            "categoryId": 22021
        }, {
            "rywCategorys": [],
            "categoryName": "热带果",
            "categoryId": 22023
        }, {
            "rywCategorys": [],
            "categoryName": "瓜果桃",
            "categoryId": 22022
        }, {
            "rywCategorys": [],
            "categoryName": "萄莓果",
            "categoryId": 22401
        }],
        "categoryName": "新鲜水果",
        "categoryId": 20725
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1425910879.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "根茎类",
            "categoryId": 20784
        }, {
            "rywCategorys": [],
            "categoryName": "菌菇豆类",
            "categoryId": 20786
        }, {
            "rywCategorys": [],
            "categoryName": "瓜果类",
            "categoryId": 20787
        }, {
            "rywCategorys": [],
            "categoryName": "香辛葱蒜",
            "categoryId": 20789
        }, {
            "rywCategorys": [],
            "categoryName": "豆制品",
            "categoryId": 20790
        }, {
            "rywCategorys": [],
            "categoryName": "方便净菜",
            "categoryId": 20792
        }],
        "categoryName": "时令蔬菜",
        "categoryId": 20726
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/931840360.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "牛羊肉",
            "categoryId": 20793
        }, {
            "rywCategorys": [],
            "categoryName": "家禽",
            "categoryId": 20795
        }, {
            "rywCategorys": [],
            "categoryName": "蛋品",
            "categoryId": 20796
        }, {
            "rywCategorys": [],
            "categoryName": "腌腊制品",
            "categoryId": 20797
        }],
        "categoryName": "肉禽蛋品",
        "categoryId": 20727
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/1549248183.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "鱼",
            "categoryId": 20798
        }, {
            "rywCategorys": [],
            "categoryName": "虾蟹贝",
            "categoryId": 20799
        }, {
            "rywCategorys": [],
            "categoryName": "水发/干货",
            "categoryId": 20800
        }, {
            "rywCategorys": [],
            "categoryName": "蟹券礼盒",
            "categoryId": 25601
        }],
        "categoryName": "海鲜水产",
        "categoryId": 20728
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/13704534.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "冷藏牛奶",
            "categoryId": 20736
        }, {
            "rywCategorys": [],
            "categoryName": "冷藏酸奶",
            "categoryId": 22025
        }, {
            "rywCategorys": [],
            "categoryName": "常温牛奶",
            "categoryId": 20735
        }, {
            "rywCategorys": [],
            "categoryName": "常温酸奶",
            "categoryId": 22024
        }, {
            "rywCategorys": [],
            "categoryName": "面包烘焙",
            "categoryId": 26880
        }, {
            "rywCategorys": [],
            "categoryName": "黄油奶酪沙拉酱",
            "categoryId": 20739
        }, {
            "rywCategorys": [],
            "categoryName": "冰淇淋",
            "categoryId": 20738
        }],
        "categoryName": "乳品烘焙",
        "categoryId": 20734
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/1294823399.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "水饺馄饨",
            "categoryId": 22029
        }, {
            "rywCategorys": [],
            "categoryName": "速冻汤圆",
            "categoryId": 22031
        }, {
            "rywCategorys": [],
            "categoryName": "包子面点",
            "categoryId": 22051
        }, {
            "rywCategorys": [],
            "categoryName": "火锅丸滑",
            "categoryId": 22053
        }, {
            "rywCategorys": [],
            "categoryName": "熟食/火腿肠",
            "categoryId": 26881
        }, {
            "rywCategorys": [],
            "categoryName": "半成品菜",
            "categoryId": 29312
        }, {
            "rywCategorys": [],
            "categoryName": "方便面",
            "categoryId": 26861
        }, {
            "rywCategorys": [],
            "categoryName": "卷面挂面",
            "categoryId": 26882
        }, {
            "rywCategorys": [],
            "categoryName": "酒酿罐头",
            "categoryId": 26862
        }],
        "categoryName": "面点速食",
        "categoryId": 22040
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/952249790.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "食用油",
            "categoryId": 20809
        }, {
            "rywCategorys": [],
            "categoryName": "大米",
            "categoryId": 20804
        }, {
            "rywCategorys": [],
            "categoryName": "酱油醋/料酒",
            "categoryId": 20805
        }, {
            "rywCategorys": [],
            "categoryName": "糖盐/调味料",
            "categoryId": 20806
        }, {
            "rywCategorys": [],
            "categoryName": "调味酱",
            "categoryId": 26863
        }, {
            "rywCategorys": [],
            "categoryName": "罐头酱菜",
            "categoryId": 20808
        }, {
            "rywCategorys": [],
            "categoryName": "面粉/生粉",
            "categoryId": 20811
        }, {
            "rywCategorys": [],
            "categoryName": "五谷杂粮",
            "categoryId": 20807
        }, {
            "rywCategorys": [],
            "categoryName": "南北干货",
            "categoryId": 20810
        }],
        "categoryName": "粮油调味",
        "categoryId": 20730
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/792686911.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "饮用水",
            "categoryId": 20754
        }, {
            "rywCategorys": [],
            "categoryName": "碳酸饮料",
            "categoryId": 20748
        }, {
            "rywCategorys": [],
            "categoryName": "功能饮料",
            "categoryId": 20749
        }, {
            "rywCategorys": [],
            "categoryName": "咖啡饮料",
            "categoryId": 20753
        }, {
            "rywCategorys": [],
            "categoryName": "果蔬饮料",
            "categoryId": 20750
        }, {
            "rywCategorys": [],
            "categoryName": "茶饮料",
            "categoryId": 20752
        }, {
            "rywCategorys": [],
            "categoryName": "乳饮料",
            "categoryId": 20751
        }, {
            "rywCategorys": [],
            "categoryName": "咖啡粉/伴侣",
            "categoryId": 26885
        }, {
            "rywCategorys": [],
            "categoryName": "麦片/冲调",
            "categoryId": 26886
        }, {
            "rywCategorys": [],
            "categoryName": "奶粉/保健",
            "categoryId": 26887
        }],
        "categoryName": "水饮冲调",
        "categoryId": 20721
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/1180264770.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "啤酒",
            "categoryId": 26884
        }, {
            "rywCategorys": [],
            "categoryName": "黄酒",
            "categoryId": 26864
        }, {
            "rywCategorys": [],
            "categoryName": "葡萄酒",
            "categoryId": 26865
        }, {
            "rywCategorys": [],
            "categoryName": "白酒",
            "categoryId": 26866
        }, {
            "rywCategorys": [],
            "categoryName": "洋酒/预调酒",
            "categoryId": 26867
        }],
        "categoryName": "中外名酒",
        "categoryId": 26883
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1333186581.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "薯片膨化",
            "categoryId": 20762
        }, {
            "rywCategorys": [],
            "categoryName": "肉干小食",
            "categoryId": 20765
        }, {
            "rywCategorys": [],
            "categoryName": "饼干曲奇",
            "categoryId": 20763
        }, {
            "rywCategorys": [],
            "categoryName": "蛋糕点心",
            "categoryId": 20766
        }, {
            "rywCategorys": [],
            "categoryName": "巧克力",
            "categoryId": 20767
        }, {
            "rywCategorys": [],
            "categoryName": "口香糖",
            "categoryId": 29694
        }, {
            "rywCategorys": [],
            "categoryName": "糖果果冻",
            "categoryId": 20768
        }, {
            "rywCategorys": [],
            "categoryName": "干果蜜饯",
            "categoryId": 20769
        }, {
            "rywCategorys": [],
            "categoryName": "坚果炒货",
            "categoryId": 20764
        }, {
            "rywCategorys": [],
            "categoryName": "月饼",
            "categoryId": 29912
        }],
        "categoryName": "休闲零食",
        "categoryId": 20722
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1894738204.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "抽纸面纸",
            "categoryId": 20821
        }, {
            "rywCategorys": [],
            "categoryName": "卫生纸",
            "categoryId": 20823
        }, {
            "rywCategorys": [],
            "categoryName": "卷纸",
            "categoryId": 20822
        }, {
            "rywCategorys": [],
            "categoryName": "湿纸巾",
            "categoryId": 20825
        }, {
            "rywCategorys": [],
            "categoryName": "手帕纸",
            "categoryId": 20820
        }, {
            "rywCategorys": [],
            "categoryName": "厨房用纸",
            "categoryId": 20824
        }],
        "categoryName": "生活用纸",
        "categoryId": 20732
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/08/1234769456.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "洗衣液",
            "categoryId": 22043
        }, {
            "rywCategorys": [],
            "categoryName": "洗衣粉",
            "categoryId": 22042
        }, {
            "rywCategorys": [],
            "categoryName": "洗衣皂",
            "categoryId": 22044
        }, {
            "rywCategorys": [],
            "categoryName": "衣物护理",
            "categoryId": 22045
        }, {
            "rywCategorys": [],
            "categoryName": "消毒杀菌",
            "categoryId": 26889
        }, {
            "rywCategorys": [],
            "categoryName": "驱虫杀虫",
            "categoryId": 26868
        }, {
            "rywCategorys": [],
            "categoryName": "厨房清洁",
            "categoryId": 26869
        }, {
            "rywCategorys": [],
            "categoryName": "浴室清洁",
            "categoryId": 26870
        }, {
            "rywCategorys": [],
            "categoryName": "卧室清洁",
            "categoryId": 26890
        }],
        "categoryName": "居家清洁",
        "categoryId": 22041
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/1935886752.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "洗发护发",
            "categoryId": 20771
        }, {
            "rywCategorys": [],
            "categoryName": "沐浴清洁",
            "categoryId": 20773
        }, {
            "rywCategorys": [],
            "categoryName": "牙刷牙膏",
            "categoryId": 20772
        }, {
            "rywCategorys": [],
            "categoryName": "美体护肤",
            "categoryId": 20770
        }, {
            "rywCategorys": [],
            "categoryName": "女性护理",
            "categoryId": 20775
        }, {
            "rywCategorys": [],
            "categoryName": "男士护理",
            "categoryId": 20776
        }, {
            "rywCategorys": [],
            "categoryName": "母婴天地",
            "categoryId": 26888
        }, {
            "rywCategorys": [],
            "categoryName": "计生用品",
            "categoryId": 20777
        }],
        "categoryName": "个人洗护",
        "categoryId": 20723
    }, {
        "categoryPicture": "https://Img.iblimg.com/fast2home-2/images/fastgoGoods/category/2021/07/1889631239.png",
        "rywCategorys": [{
            "rywCategorys": [],
            "categoryName": "清洁用具",
            "categoryId": 26871
        }, {
            "rywCategorys": [],
            "categoryName": "一次性用品",
            "categoryId": 20832
        }, {
            "rywCategorys": [],
            "categoryName": "锅碗瓢盆",
            "categoryId": 20833
        }, {
            "rywCategorys": [],
            "categoryName": "收纳晾晒",
            "categoryId": 26891
        }, {
            "rywCategorys": [],
            "categoryName": "内衣裤/袜",
            "categoryId": 20828
        }, {
            "rywCategorys": [],
            "categoryName": "毛巾拖鞋",
            "categoryId": 26893
        }, {
            "rywCategorys": [],
            "categoryName": "雨具鞋油",
            "categoryId": 20829
        }, {
            "rywCategorys": [],
            "categoryName": "电池插座",
            "categoryId": 20826
        }, {
            "rywCategorys": [],
            "categoryName": "宠物食品",
            "categoryId": 20827
        }],
        "categoryName": "生活日用",
        "categoryId": 20733
    }]
}

const YDJMockData = {
    "categoryList": [
        {
            "rywCategorys": [
                {
                    "rywCategorys": [],
                    "categoryName": "处方药",
                    "categoryId": 14925
                },
                {
                    "rywCategorys": [],
                    "categoryName": "非处方药",
                    "categoryId": 14926
                },
                {
                    "rywCategorys": [],
                    "categoryName": "疫情药品",
                    "categoryId": 14927
                },
                {
                    "rywCategorys": [],
                    "categoryName": "都有的",
                    "categoryId": 14928
                }
            ],
            "categoryName": "金2陵东路有",
            "categoryId": 14884
        },
        {
            "rywCategorys": [
                {
                    "rywCategorys": [],
                    "categoryName": "处方药",
                    "categoryId": 14893
                },
                {
                    "rywCategorys": [],
                    "categoryName": "非处方药",
                    "categoryId": 14894
                },
                {
                    "rywCategorys": [],
                    "categoryName": "疫情药品",
                    "categoryId": 14895
                },
                {
                    "rywCategorys": [],
                    "categoryName": "都有的",
                    "categoryId": 14896
                }
            ],
            "categoryName": "托底门店",
            "categoryId": 14885
        },
        {
            "rywCategorys": [
                {
                    "rywCategorys": [],
                    "categoryName": "处方药",
                    "categoryId": 14897
                },
                {
                    "rywCategorys": [],
                    "categoryName": "非处方药",
                    "categoryId": 14903
                },
                {
                    "rywCategorys": [],
                    "categoryName": "疫情药品",
                    "categoryId": 14904
                },
                {
                    "rywCategorys": [],
                    "categoryName": "都有的",
                    "categoryId": 14924
                }
            ],
            "categoryName": "两家门店都有的商品",
            "categoryId": 14886
        },
        {
            "categoryPicture": "https://Img.st.iblimg.com/fast2home-2/images/fastgoGoods/category/2018/09/1246212569.png",
            "rywCategorys": [],
            "categoryName": "处方药2",
            "categoryId": 14110
        },
        {
            "categoryPicture": "https://Img.st.iblimg.com/fast2home-2/images/fastgoGoods/category/2018/09/106430588.png",
            "rywCategorys": [],
            "categoryName": "非处方药",
            "categoryId": 14109
        },
        {
            "categoryPicture": "https://Img.st.iblimg.com/fast2home-2/images/fastgoGoods/category/2020/03/1051044732.png",
            "rywCategorys": [],
            "categoryName": "感冒发烧",
            "categoryId": 14108
        },
        {
            "rywCategorys": [],
            "categoryName": "功能保健",
            "categoryId": 14112
        },
        {
            "rywCategorys": [],
            "categoryName": "预防病毒",
            "categoryId": 14113
        },
        {
            "rywCategorys": [],
            "categoryName": "第十一个目录",
            "categoryId": 15744
        },
        {
            "rywCategorys": [],
            "categoryName": "眼科用药",
            "categoryId": 14111
        },
        {
            "categoryPicture": "https://Img.st.iblimg.com/fast2home-2/images/fastgoGoods/category/2020/03/1051044732.png",
            "rywCategorys": [],
            "categoryName": "疫情药品",
            "categoryId": 14273
        }
    ]
}
