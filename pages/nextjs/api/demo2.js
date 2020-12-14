import { NextApiRequest, NextApiResponse } from 'next'

export default (req, res) => {
  res.status(200).json({ title: 'Next.js' })
}
