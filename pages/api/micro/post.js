import Cors from 'micro-cors'

const cors = Cors({
  allowedMethods: ['POST']
})

const Endpoint = (req, res) => {
  res.json({
    message: 'Hello Everyone!'
  })
}

export default cors(Endpoint)
