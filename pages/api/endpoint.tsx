import Cors from 'micro-cors'

const cors = Cors({
  allowMethods: ['GET', 'HEAD'],
})

const Endpoint = (req, res) => res.json({message: 'Hello Everyone!'})

export default cors(Endpoint)
