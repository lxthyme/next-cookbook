// import { NextApiRequest, NextApiResponse } from 'next'

export default (req, res) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')

  res.status(200).json({
    title: 'Next.js',
    date: date
  })
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}
