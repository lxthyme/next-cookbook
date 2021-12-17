const API = (req, res) => {
  const { page } = req.body

  const obj = mockData
  // obj.obj.videoSupport = '0'
  // obj.obj.videoSupport = '1'
  // obj.obj.content = ''

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API

const mockData = {
  "success": true,
  "resCode": "00100000",
  "timestamp": 1638932416912,
  "obj": {
    "videoThumbnail": "https://Img.st.iblimg.com/fast2homemethod-3/offlinegoods/goods/SP_1564447799.jpg",
    "mdmGoodsCode": "20000919686001",
    "mBy": "BL_MiP",
    "cTime": 1622786967000,
    "videoAddressTemp": "http://1253388398.vod2.myqcloud.com/e0236119vodtransgzp1253388398/7a12b2ae3701925919534749704/v.f30.mp4",
    "source": 1,
    "videoAddress": "http://1253388398.vod2.myqcloud.com/e0236119vodtransgzp1253388398/7a12b2ae3701925919534749704/v.f30.mp4",
    "content": "<style type=\"text/css\">img{display:block;width:100%;height:auto;}</style><img style=\"width:100%;height:auto\" src='https://img.st.iblimg.com/fast2homemethod-3/offlinegoods/desc/DESC_1946376806.jpg' /> <img style=\"width:100%;height:auto\" src='https://img.st.iblimg.com/fast2homemethod-3/offlinegoods/desc/DESC_958429797.jpg' /> <img style=\"width:100%;height:auto\" src='https://img.st.iblimg.com/fast2homemethod-3/offlinegoods/desc/DESC_284640008.jpg' /><script type=\"text/javascript\">!function(){var t=document.getElementsByTagName(\"table\");if(t&&t.length){var e=[],n=!0,r=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;e.push(l.offsetWidth)}}catch(t){r=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}e.sort(function(t,e){return e-t});var u=window.screen.availWidth/e[0],c=document.createElement(\"meta\");c.setAttribute(\"name\",\"viewport\"),c.setAttribute(\"content\",\"width=device-width,minimum-scale=\"+u+\",maximum-scale=\"+u+\",user-scalable=no\"),document.body.appendChild(c)}}();</script>",
    "videoThumbnailTemp": "https://Img.st.iblimg.com/fast2homemethod-3/offlinegoods/goods/SP_1564447799.jpg",
    "sid": 5161,
    "videoSupportTemp": 1,
    "goodsSid": 168251,
    "videoSupport": 1,
    "cBy": "米萍",
    "mTime": 1637115580000,
    "goodsCertificateDtos": [
      {
        "name": "广告批准文号",
        "desc": "acv12345678;1212222;anshg3g322acv12345678;1212222;anshg3g322acv12345678;1212222;anshg3g322"
      },
      {
        "name": "广告批准文号",
        "desc": "acv12345678;1212222;anshg3g322"
      },
      {
        "name": "注册证号/备案凭证号",
        "desc": "acv12345678;1212222;anshg3g322"
      },
      {
        "name": "注册证号/备案凭证号",
        "desc": "acv12345678;1212222;anshg3g322"
      }
    ]
  }
}
