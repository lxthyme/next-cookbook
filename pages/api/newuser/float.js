export default (req, res) => {
  const is_deadline = 0
  const session = 1
  const remain_time = 10
  const is_receive = 0

  // res.status(200).json({
  //   code: 10000,
  //   msg: '',
  //   tips: '',
  //   runtime: 0.3188650608062744,
  //   data: {
  //     url: 'http://172.100.10.216:3033/gifts',
  //   },
  // })
    res.status(200).json({
      code: 10000,
      msg: '',
      tips: '',
      runtime: 0.15926003456115723,
      data: {
        session: 1,
        is_receive: 0,
        start_time: 1591607846,
        end_time: 1591697846,
        remain_end_time: 1591694246,
        remain_time: 0,
        is_deadline: 0,
        url: 'http://172.100.13.223:3033/gifts',
      },
    })
}
