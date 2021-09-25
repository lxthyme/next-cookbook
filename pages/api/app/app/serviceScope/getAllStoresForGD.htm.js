export default (req, res) => {
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

const mockData = {
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
