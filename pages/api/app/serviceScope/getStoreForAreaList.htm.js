const API = (req, res) => {
    const { page } = req.body
    const total_page = Math.max(0, 5 - page)

    // const list = Array.from({ length: 10 }, (t, idx) => ({}))
    const list = []

    const data = mockData

    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, resolve), 1000)
    })
        .then(() => {
            res.status(200).json(data)
        })
}

export default API

const mockData = {
    "otherResource": [
        {
            "advList": [
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "测试1",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/776652606.png",
                    "hint": "测试1",
                    "deployId": 18861,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20174,
                    "picDesc2": "测试1",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 1,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "测试1",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/776652606.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "130006",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "测试2",
                    "picUrl": "https:\/\/img22.st.iblimg.com\/market-2\/images\/activity\/1950111817.png",
                    "hint": "测试2",
                    "deployId": 18864,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20174,
                    "picDesc2": "测试2",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 2,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "测试2",
                    "mediaUrl": "https:\/\/img22.st.iblimg.com\/market-2\/images\/activity\/1950111817.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "45",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "测试3",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/1962804973.png",
                    "hint": "测试3",
                    "deployId": 18865,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20174,
                    "picDesc2": "测试3",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 3,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "测试3",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/1962804973.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "130004",
                    "picType": "2",
                    "showType": "0"
                }
            ],
            "resourceId": "20174"
        },
        {
            "advList": [
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "商城",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/458164331.png",
                    "hint": "1010,1020,1030",
                    "deployId": 18867,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20175,
                    "picDesc2": "商城",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 1,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "商城",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/458164331.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "0",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "超市",
                    "picUrl": "https:\/\/img22.st.iblimg.com\/market-2\/images\/activity\/1656976063.png",
                    "hint": "2010,2020,2030,2040,2050,2060,2070,2080,7010,7020,7030,7040,7050,7060,7070,7080,7090,7200,7210,7310,7510",
                    "deployId": 18881,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20175,
                    "picDesc2": "超市",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 2,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "超市",
                    "mediaUrl": "https:\/\/img22.st.iblimg.com\/market-2\/images\/activity\/1656976063.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "0",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "RISO",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/1613273547.png",
                    "hint": "3060",
                    "deployId": 18869,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20175,
                    "picDesc2": "RISO",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 3,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "RISO",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/1613273547.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "0",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "特色店",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/958935976.png",
                    "hint": "4020,5201,5202",
                    "deployId": 18870,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20175,
                    "picDesc2": "特色店",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 4,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "特色店",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/958935976.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "0",
                    "picType": "2",
                    "showType": "0"
                },
                {
                    "cornerPicUrl": "",
                    "weight": 0,
                    "picDesc1": "全部",
                    "picUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/336277563.png",
                    "hint": "全部",
                    "deployId": 18866,
                    "endNtime": "2022-11-30 23:59:59",
                    "resourceId": 20175,
                    "picDesc2": "全部",
                    "resStategy": "1",
                    "showCornerPic": "0",
                    "priority": 99,
                    "type": "1",
                    "showDay": "0,",
                    "visitorVisible": "1",
                    "deployName": "全部",
                    "mediaUrl": "https:\/\/img23.st.iblimg.com\/market-2\/images\/activity\/336277563.png",
                    "startNtime": "2018-11-01 00:00:00",
                    "jumpType": "0",
                    "picType": "2",
                    "showType": "0"
                }
            ],
            "resourceId": "20175"
        }
    ],
    "rawDict": {
        "obj": "AQGBe2Wu0E2lyby3cnbsPqhY1Z96HKma\/BjRxTUAek0jl98mASjiVL+DYJfK mb01x+hEGWjUhiOxpQQgMZx7UOPmzXImF4acNbzk5vDzHvQ01lfinUC3PKqQ LlTDZFaHrNerEF19cwWKZ625AkaC4NW03IVSulL2rNjEFz8gcGjfTbPnS0zt DiHvluL+nI94GCFJwejas6B5ypnY0rMg78ZIt0z2ZYPvpk871GHhn+PcchRT V+OcX0StMYqFiMmN5XCuWMlHHaK96OGCZExyJhWqz9aoykAvNF6NaK8f7txc 4iaNajMA9pjP3SlmlxHaOIBGmocRUMs7t9cnOFgg6wsr2jRncJrPjoCCJ9pb \/lCONEGwFPeKGvGl07Lu2QCL6R5YNq4oGJF0c9k3gnfFaMEMhq3XLJUNRakH HHYn7bb9o+Edpk93MidpLLQtr++oLx8jbI2gYhBJBagofvt2BREZwMWpzMVx ttBH\/HPM+FmRfRpAq0IcrHkgLvK51XMrSHu5ov\/1M4\/3fkyo7JsHAQbNtxnM Luy26d3MrGosxGTnV7JJtZ0qGLJNRD9PsODxx7FsMASQ4tN2gg0+CUksKtBP 7f+Hvd69Hd9i6NhCqhEd13\/iDG1UFgRiuwoPPU2bq5qngBq\/ESzMurhruo5l Tz2HO+hEgpg3I00kPrCZ807Y4Ti8kxn2XmuQp3VhfgdmyvKNtuWqZWptRW1J IkHQfTjo78VmIvyAKkICg9RvNI8Pm9Cg5KiLOI\/7S861MuC5h5GehVhNvfJL bTXXKuZuq+37dN5ykQCrW1dr1XhWpwh1WTVVKirObrsKbiJXw2pFbfF4YSxY iYYpyZ+RuEKo9TUcSokoHbi2BM4VLxMQS54ttYEeQaxOTTzZF2N3Xr97lNrI kyAeyv6augB05DjDgcF3RR\/MjT8+Fq9UybdBONUu1Nn1\/IAGb8BgrKzZkmzM CoLVDQCYewAA+e5IME8lI2Ut7DPKad1cITJuIq8dYJuv+wDBdzFTbdEgaRhe SG0AXACHXfSJaRq2vfsqLt9sF8GBGUXX1wL9zXK1D37frZQlYZD+\/swVs1e4 73RW9ENdVXEDwszEcRB1PjSX7uZBi1JT6ZiAyk3EVI2tUMc1VEHQgjtpA2c6 kyLY3AbQrJFqUPQg02nPhXJPBgToC4eoh\/X0thbODylNl13YMfsVT4I3rvmu MRw\/jIPtNniV0UJlJq0Fws8PmwQrZsKvTdhCUCby5\/ThYZ3ldIdkMMkywxK5 psQ9ZVYigeZGQfQxs07b0M1HfrYQJw8umLZHY1RZXy2AKj3X\/Iqmu3qa7cpJ 6nXYvi7LVQPD8cF6T6SiC+vZ+HZVjYTKYgNWiOaLkT5ZtzkCCnRf3t2SzNo6 qQbs5BIVCuBL3a6dUlg9+SFSAunmuoiGnO4izqBjc62uqTIEwKvXd6pnZTwL 7PkB9W2rVxLfgRrSkavT8QyQMxJrwS8YHsq+p\/BAumMT02bzXEY3qhk5gNNX mEkpm+NSiVKlW7XaIKKtX5Ay7mXy0z30j8fxviyoFymx9ZQ+3FErqQH2Y0ea LuR5wuww3ehntqCMkJAVQwuSOmPuyxOMroPebjDfAmWmP4E3S+xUKTn3vCdl Pq13Sxl0ISkfdFgEEZgM926FgIUDMUDwqfbqQwhWicxyDFhqURD46y5i+DzV yrI0exzgm0toRQ0z5mCM4g4u\/HmLpuITK9aqoQ\/osMrXeYBAqhwGyJevaFP9 5tmHCeTXYOirjp3DmvGvDnNfcHs8y9LFQr0UlssYheR6Hjx157u1ckDgEhrK 2mx16Og04ye680wmWxAbHBeAgRqqh5\/+LDvFsnrHe+9tIzsnHdx58jws2DNU N9J36K4uFgSCTzdteMkDLC86rqwmnmlmJRYem29NzuzY0MlZm\/+O47rQ0b6j jliPfC6su81VQo+VYJDjqPXnWkSYNcViOAbc3JLhrZj9hBuBKDFevv5fdPq2 1ENwyROd5syIIeja+Gt9FX9Da3B9qDq8cRzzXxXCML1zFdMH3eVIPngQHf4u E2g9N6fwF5Bg9k01bRSg+\/kfU8GuSgW1UWeAhqda543RV1cuMv1WAKJmdeZ5 iNVlj3rs6eNm17+RQ76\/Ke99GlJQhIx1jCku3PMg17qP80ksUmFJs0yEcudC b6Tfswjvx3Vx6ocrolE1nb4u4aB+jcyEDhYJ18ljFK5VYQDsVxVkEMkpQlTZ +pFptff5k5B1KW46z8QzRr+nhhAf9Fh7nwqmwYB3BX+er8LfsTmyGMGsFFNi 8RZtstSBHExuSkmHFxKYmgjRt6nnrevzelRSMYIiXClxnMjq0eVfFPi9i02q g\/1kg9pHaX+8Pick2MHYPsWCh5tgMX121o8OZfKHtZS6GkEKwHDjQU108MIv MW4RR9Jj6cE0yXEol3LZ3gl7eTry5UZa+eTrr3UZfIEBNNcX5J\/LtVVU1MBM L7DErj\/fj4uk7r6kJWYEo9jjVcKnBmxNPXQX\/1QxEz7J2Pz1GnMh+QW7oH2W 6Ce5fgWXLZTbcteVrul6wKb\/VwdChhZSkNCM4g2ln3LLNgctetXkLjqdK9EG 9KSJwNHqG1IYoxXPtYVh61O1juaJLKwUqhs4Yp5awE9VGfAIrlAUH0ROgK5Z 0k4GhvifwaDYcuh5y0akutafyHYQwW+jeOsMhav06FF1ff49HVzFhGvZQmNB z3+zWPuR235kZkdSOuC7oHaQyLeR9FpGAdPJeg5beMG7xoAd0yS3DZOJ2E+G iTmljiS1Nd\/jS3KGgBwDbnNUy6OaCdiLIKjAb8EqPFjtJnbcSRGyfoYSwJOt IjZA2wdYDHBTOMA+HSNLA8Ev3AgTrLlpUmRVkAd16oNWKkYUupMYBn7PuVPX 1A8RT9e3X5CvuiuYYvHEuUBGUdYvgyZo8TM5n8nXtYPfyVCNnSV1OM4S3rV5 cA\/EmJUHdCRZXoQwvCzCQ8HV+OAfOdK3EPGAeCryWZCpwbjQU\/A1sclBP1at lyAF6NUhOvXfDn8sw9QQJfX5xlFB3NSAHQXsShqwXIwNZTGiZuICJbs+\/eNd YZ9KOFjfGDwxV+2irRZWVWK62iPCLJqb+Wvue58VEIdb5KyP1ef4E014Bwz4 uEVG8qq9b6a1RHr+rh4\/IV8pLz02FvqFTj1y2Jkzqvp2IdfB4gYaPZkW4buq WwVTkH\/BOFLEErVzdLnji5UaOkIAldeirKGYn\/Grh6gUe3ixDbKhd4z4gAqH Qy3AR6Ny+aorE+vJYyteeLVE83L38G12f5twDO75RzvEJvn\/rtDWb3z4+SS\/ VZ9cqHmwkmolYl2Pj9\/UyxIWuCledoj8iTwCS+6N\/6gpm88cVDnARTf0AhaA WCUiwKLeu+Ovs+6skl8amFmaTlrHRJsIlJOSsfEOkgv50Gz48oTGpcpKcxhb o28VKVdgDXzLe7gc+Nu1wTRnJj9e8JIPBXkhSzOEOUYC3zxjkAup88oVlRsH HWqNh\/lHd+ApiXMuE7xg2cBDgB2e4e2Wwk9M7kzJcjFJO01YTwFAfvZO1cbE MW3kP\/7Mcm7aT0\/2BmW\/l3A37TNNLwzOlsZWKanx3++YjM2QcuELf7+rEbWG wPfrQARyjzwJC6X86JokwlyPjRcZxGEKCZDLt2h+pu5vpfkgffzMOD\/EE6t1 zDO\/PGqnd5jvAAtvUJp7rjIehi6+auq\/WSbWFiuGJP6hHcfGCnfjN4pi0CO3 suieVDLGr+uEBCQ+BOCQILy919l7Ihz7Vg61buLp97ZtZGExmdSIsw3lygiO UXu8muY0GMoh2hajyaGUS9gEqddi6j3Vuuv7hyXMVBNsUOwpnxLbgDNe4NSt brZxR6OrlcBKoMW1\/rgcA3OlxnBCNzlCjZHJEeZc07uzZMXvNV1wONuUy2mz \/6jW9WHT7myF6IFkBCOgDcE\/siLTQOaoGiM0N7utr4w1hKLI9TbSGPeOjfz1 UO2tzBYUN6CVeYhs+BraD30VOxZk5sqGB8kQHaRHMoxE4vi4ZuotWLDkf814 z0KZp3NMDRpnMSLC5gekqgH5YjAbNq5g7NCuGEsohUO+yENR62+1+8oWKE4i SDyEgUn\/pDjDdLLKzCwcp0iaAm2tvhrRL3XO0Tc6OLrwC+DxN7tqYZmNIgSU AR5Xh9CChYpc5wbX0Z2XP1VLHyq7Zf6gZ+2\/T1NLe2lkSmxZGoVkkcX6WGUS SNEs+tBLS5QyBN8HcNyl1Gv73pammq\/UtB3yJOBcy7ofLHDASL\/CyDC4A\/uk 0RajP6t\/IWTfq9YIkuxyPTZgxKyZPb9e5wpcKB82XQquRaw9QYG8XkkqCNQw NQyOR9Xp+PvZbmwl\/F0M\/Q\/Chu+b0PQvE3qcvE9aqajZuO+y2gVP0zeN4Fwo 6KWlBZPoKoy+sqF9A4s4N3su0i8gyMOmtipEOt3FGrdDzcJQ6tDMM75uQGY1 tE7Py6wdNgjGiINcsmVMQbnFuDVy7Yg9n0+ny7D1nX1wIiJdgs2PZnVbDAkD hlnbfUf9CYa5+yxCrtqZoLTVLrNFyhjSUF3hWONzP3A13J6XBYSgUFIufZFN A5kvhMWWTA6iU+DboUpFgEbToGfu0ntPOhaiNkxAADsHCofy9KqW6P9unfl5 quYWPVuY5\/6lGto2TSI2AwhevDXurxhYNd5Gl6hweJgr4NMyrHs5dCTAPlpb JFydGSPur15jfSdqd2KZOmR3HMJ3pKif37858Rb+DOLq310+YeQOeJBL6GGh 0od\/bjewj41MbrRpYHjP8tUUq7CnK4cqm9S98EkzK4E0NBAk3Ee37GtGuoYp VH81KDazvfNJeSmzRA5dW4o\/9zipk6MLBhQ2aYnplrmwkUKfwJ+Ssb4HiEkc om9pkBakob57Dng8xxB5M0PioCIqAqUMEXoD3RWxRv5V2Eh48LNQkdr1F\/lf EDBJbO5aLMkbx+j893lrGgrVydHr\/P2zMoZU5sCO0y9VOkx8MeQfNGE24KWO 8YHaG0JQIuqqI1kJLmQ76d4XZGa93h70YrQCfsinZgkPGX4nSPcJoVjYTkYO AqiqcmYErFV505TOJuizBZoCueOEuKT6iIufyzyFjT2rgumTwVZqBsQ48gsK R1yeyaoE41ZPMDkI+DHgV+S\/9oVSGIdAZj84VmjcTrVXp3qRglZkQA8TFPjK 0qDulIs61ekbS7UyzZMbrWp7NL+OUHzQGo23AYPJoQWt89f85wwiHd2cx6sm oLc8dFOdKNcSHPp0LnhuuZVuHMvwr0ZLskwuKSdnG4teiP3S+Iafm3jJMciQ vR9ejToxb6IHtsxvNPsj7QiuigU7IHxE3whc8WIwE2aQarxA7JA3pSBapFU0 yzUwoRLRtZYZXDOvL7MvJK+cj05+Z8hKaWXNKcZnL5TEIX2u5ahqD2re5dcc IGFIt+QqPZQa0pVDnfGyqM4HXtTVTOo1ce8eXkgUwK7yodDymOqyEynMa5s4 5sS+MWB3+lHuRkYFUjmRBlMEDLoAPhVzb8zFna3t87d8ItXCcB1bElWZLLfR Z\/WGkKbnNSpm4R9tmMdzldiW+SJd20r4JtwWN9Nw4H6tcp4h8S9VnVotavMd rlHcBZHgYEgQt2zV0nXCldYtqicuvFi1T2OiNyAIr\/2NJEIIwJHAapOT1a9N tPUBPLCdPurf56H9cKMTcLEyJKKMiGUILFKrjavIzNkIRYaGXZQT81ZZTQWa yS8+8I6bU4XDPpHKugHkWQhW\/Lw+QzRou6KC39dk+6LxngzW1arD0sNXuV7F O0AxjhyLpomLiL\/DkXw1DQ==",
        "resCode": "00100000"
    }
}

const mockData2 = {
    "rawDict": {
        "obj": "8cyvPNA2l3f1+RGFrda0ja8i8Dg+ouicVkzNs+gKbTN0A3ECrdc+7zXoP9fM aoM6s+r1rzrMKDMI2PG68Xl8MKLVn\/3lapHPt41E7vbLWZAIRfnCMxCCNJbP OzpQcA5\/hb8nXqEoo0YJm5+xIr\/9RUl55VgGQM9BzapK5jsJAoq24QmcSjDU T5VMnCE7FRICzD\/gYckJM1O58V8A1GmO41F9SrEPKT6N\/sZCxYzqXQSqHZOO a6pvu30HDk2Rx6kkAWdDjz53foKTk23LM6To+iXmA9JXJDM\/0rKr4Z4\/ju0f dS35TG0DgJjnJt5RvjvhV5y99wBjaYNuBx8AzgQla2iu3OdYNUnZKH1Kpkp4 BXhGM3vFo\/lo26\/nR\/\/gO\/Jcxzui5bUJjuq5Dalj2UvRq1Y4vB6p2HOEHJc3 NJHCLUzfOaZeOx83sZen5df8FqMS5pRBBWezMvece9RhzKxCjPAGg+jd9KgP uuWaflApGy7zBmkTn6hAVqPSJwq443DoO40I5ZM1NpW7XhlihDJomc4Embfz BWmpE\/0j4TXA07YYv9bR+oZzQ+lu6mEk1DWGP7EcQmysnx0V3XN3GPC\/UPFr cVZnSkXTS4Cdwy31Geq0A279uDEFA3HOe\/LsEVkus4O2r3x1fK0Ksx\/lDzU+ YU4w7C5emoZ8KF0NQZsI3L9D6ExwhiPYR4YmNrqvMrXWpH33PY\/MpwdVYa80 hcJKkBkIHXEPf971yMFuGp7KwfYAVOER+mVNn1pAvk3zKgf71pwoAd+J1CI8 wK4zRY0mlyOimWe180JsrA2oLxoH4tI2WrnLgceLLfuysPimNV2OcUgtjMvS AYw0veKJEvoc5pz4EJk5ni7B4qgGdhNuu2zQQGjlfg87fJevBq\/VuNT6cOwD xIy7d1X4b0G1jEWlV8WIXe4iOy8cd0BVVMwAxaEBMx1nXKb1MDwz1+13eMHa O\/W5l3F0WeQwJdyqRhuNIp\/4J+wPWV+njxspW\/Tt83Gie+PzMqfFyec4CoWz EwK+Nq2ZRQNMYcGm0SSSkQeQHGM9UoUQB13uMLwk4mbPTG0edttDhuJL9tPz 29uBwLRtpyw\/YcsUJCTqqq2xC1iLkIGBj4jX\/JqQUNNs5n3ExtRqViJFDzYQ mXHJ0Na047bhVCanuz6fJSES4hMLPBx9DwlB2N6fcLDU9tX2azzZ6QEKep3V BiEpEq2MQq0LHMjAwJvueDLVhmYWitAp8wyeZbMGYyg7Iz\/xq23ZAcJVYD\/p vcKbeZd2\/rCWirUe8X\/c9zTqVbZCDGi74mDecS8VOk4EPcZNdTOiUTTjhNAA x5UHxy8VfbzGoVaWDcSxpvVoY5\/WP3yNTp3LyCeOarX5ZoFqlo9mi1ABfBna 2hGbOyZNUJ2PQCPUXR6Pw2OqshZmvILoTMzwUzZK7YHoVMK7kp6QSMLaN1ya UNkp09kD6GVt\/rIScQ+49SGKC71AWWUTvXHXz1h6ELR4nMzQwbkGBtuCMu6i Z0pbFCTOPwhlU4iX+N4lKEO2jt6YKk6p9r8\/85OsB5ueoYEHyptdLd2En42f uOwT4RoYpPmdVcaqRz92qN7223dO2bDzsNbSMgojQXcuApAP8YR3zN4fgpYe 1drGzf1kRrDrOVsSZ7fKfyInW7ug8ixGTlwe4yiF+7M0FzPq\/tNhf1WLB4dT SQzuj9JZ66Nwfa2yt\/N0qxzqHYpRUMeLGCt+92YIjxdCCZODxP2fHTMh22fK Z0izGAsmmSqRm9MtTMFpqC4XTs0+xbNlLIYnD3tokLpPqKo+mE4YNLB2XFm8 thxQ4Y9rBZylXgeSCkNRMrwwKlf7TwIMLAUON6dXrQ45i+qIiODluBDfKTwa j1AAskdzc+SLr8D6PkpIXYcQI7JhX7dR0LdHSO3W2XA2TX9uE+1Z12BeFoag seujjNSXYirTvsVMfwYTjAb0FACPVWq2iNUST6JUJ\/bIo5cYzqDUPRKPLM1D j4blQ69eiF8EDCfObWL\/rgJkntu7lRi5sbl4BzmBA0XPhhwQ+7zs2C8oILSk EZsoahpEJV+Pbru6eth3Gcqj1J2h\/bQIGNqbGPMm\/bywUhkT\/Dt0GhFDWp63 w3sX5m0\/OmOVIgsER6ZY8pG8oYpkMCKbiJmAHyiqqAylGYNHf01VfKJO8xSL EJ1qMgyxZyXKv5dP9KaKK++EN6HEGsv+dLEAyQ==",
        "resCode": "00100000"
    },
    "count": 22,
    "currentPage": 1,
    "list": [
        {
            "address": "淞沪路8号",
            "identification": "1",
            "distance": "12376",
            "smallproUrl": "wxb8abdfea2c8b24c4||",
            "parentType": "1000",
            "storeType": "1020",
            "storeCode": "001107",
            "storeName": "百联又一城购物中心",
            "storeId": "630913012ac048478bfd0ae8dd170cbf",
            "logo": "https:\/\/img.st.iblimg.com\/site-1\/\/2016\/01\/kkbl.jpg"
        },
        {
            "identification": "1",
            "distance": "14074",
            "parentType": "1000",
            "storeCode": "2018050303",
            "storeType": "1030",
            "storeName": "奥莱门店测试",
            "storeId": "c7f76f05967f4794bd623ac120712c72",
            "logo": "https:\/\/img21.st.iblimg.com\/site-2\/images\/store\/2018\/01\/1934159741.png"
        },
        {
            "address": "张杨路655号1-2楼",
            "identification": "4",
            "distance": "33157",
            "parentType": "3000",
            "storeCode": "000601",
            "storeType": "3060",
            "backgroundMap": "https:\/\/img21.st.iblimg.com\/site-3\/images\/store\/2018\/07\/152674834.png",
            "storeName": "RISO张杨路店",
            "storeId": "b3725bd9de3a4e09aa4c5b018a341349",
            "logo": "https:\/\/img21.st.iblimg.com\/site-3\/images\/store\/2018\/05\/1484569923.png"
        },
        {
            "address": "水产西路1028号（近富联路）",
            "distance": "4984",
            "parentType": "2000",
            "storeCode": "005901",
            "storeType": "2010",
            "storeName": "世纪联华上海顾村店",
            "storeId": "58edaf6c3bdb44da919cfbc11abaac92",
            "logo": "https:\/\/img20.st.iblimg.com\/site-3\/images\/store\/2018\/07\/152674834.png"
        },
        {
            "identification": "2",
            "distance": "6859",
            "parentType": "4000",
            "storeCode": "400002",
            "storeType": "4020",
            "backgroundMap": "https:\/\/img21.st.iblimg.com\/site-3\/images\/store\/logo\/2019\/04\/773834221.png",
            "storeName": "MP测试门店813",
            "storeId": "9062c86366914e47a0b73ebdd7de1584",
            "logo": "https:\/\/img21.st.iblimg.com\/site-3\/images\/store\/logo\/2019\/01\/1566574402.png"
        }
    ]
}
