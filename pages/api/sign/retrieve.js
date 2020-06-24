export default (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  }).then(() => {
    res.status(200).json({
      code: 10000,
      msg: '',
      data: {
        toast: '补签成功！',
        tips_title: 'Congratulations！ 补签成功！',
        tips: {
          template:
            'Sign in for & consecutive days Get {%index_1%} points reward',
          values: [
            {
              k: '{%index_1%}',
              v: '6',
              color: '#ffffff',
            },
          ],
        },
      },
    })
    resolve()
  })
}
