import NcovData from '../../model/ncov'

export default (req, res) => {
  res.status(200).json(NcovData)
}
