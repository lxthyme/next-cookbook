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
    "totalNum" : 0,
    "totalNumber" : 0,
    "cartNum" : 0,
    "rawDict" : {
      "obj" : "9P7QcafgSR\/GOkanDLTjzZmQ6jFx1kKIsRM9VJLBSjfqVDn88zFNUwGjjuZz YmoRimF\/j2dbX8UztBnJaKm1Bs+be9L6zqUb",
      "resCode" : "00100000"
    },
    "cloudNum" : 0,
    "fastHomeNum" : 0
  }
