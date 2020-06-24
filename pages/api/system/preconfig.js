export default (req, res) => {
  const { page } = req.body
  const total_page = Math.max(0, 5 - page)

  const list = Array.from({ length: 10 }, (t, idx) => ({}))

  res.status(200).json({
    code: 10000,
    msg: '',
    tips: '',
    runtime: 0.18198108673095703,
    data: {
      page: 1,
      total_page,
      list,
    },
  })
}

const info = {
  birthday_banner:
    'https://duly5zwcucles.cloudfront.net/posts/1550823831_5c6fb1976d50b.png',
  show_birthday_banner: 1,
  shortcut_icon: 'https://duly5zwcucles.cloudfront.net/icon/kstd.gif',
  official_member_id: 4063,
  official_email: 'luotaibin@outlook.com',
  official_uuid: '03d68089-18f0-4b96-8aca-94b95cd915be',
  official_accid: 'test_4063',
  tik: '',
  before_tips_limit: 2,
  menuBar: [{}, {}, {}, {}, {}],
  attentionMaxNum: 10,
  hashtagMaxNum: 5,
  app_icon: 'https://s3-us-west-2.amazonaws.com/images-omv/icon/app_icon.png',
}
const resJson = {
  code: 10000,
  msg: '',
  tips: '',
  runtime: 0.2942790985107422,
  data: {
    ...info,
    shop_search: [
      {
        k: 'is_open',
        v: 'Open Now',
      },
      {
        k: 'order_delivery',
        v: 'Delivery Service',
      },
    ],
    brand_search: [],
    product_total_status: [
      {
        k: 1,
        v: 'Do not show',
        color: '#1EBEAB',
      },
      {
        k: 2,
        v: 'Available',
        color: '#22B0F0',
      },
      {
        k: 3,
        v: 'Out of stock',
        color: '#FF72C8',
      },
    ],
  },
}
