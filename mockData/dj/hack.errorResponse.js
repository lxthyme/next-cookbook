export const mockError = (res, errorCode, type = 1 | 2) => {
  if(errorCode === 400) {
    res.status(400).json({ message: "Missing required field: name" })
  } else if(errorCode === 500) {
    if (type === 1) {
      throw new Error("Internal Server Error!")
    } else {
      res.status(500).json({ message: "Internal Server Error!" })
    }
  } else if(errorCode === 'busy') {
    res.status(200).json({
      success: false,
      timestamp: 0,
      msg: '当前访问量过大, 暂时无法访问, 请稍后再试!',
      'resCode': '00100051'
    })
  }
}
