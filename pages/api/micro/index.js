// https://github.com/possibilities/micro-cors#readme

import Cors from 'micro-cors'

const cors = Cors({
  allowedMethods: ['GET', 'HEAD']
})

const Endpoint = (req, res) => {
  res.json({
    message: 'Hello Everyone!'
  })
}

export default cors(Endpoint)
