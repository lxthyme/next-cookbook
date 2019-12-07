// import { NextApiRequest, NextApiResponse } from 'next'

export default (req, res) => {
  const {
    query: { pid }
  } = req
  res.end(`Post: ${pid}`)
}
