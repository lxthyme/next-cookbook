export default function(req, res) {
  const { page } = req.body

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {
	"obj": "MX8nobtOkMqB6dJLr6KpkH9cTeKpumQwheCAsz8ybn9PFTzzgqZURq5GVrRH sWa8",
	"resCode": "00100000"
}
