import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import CryptoJS from "crypto-js"

// export const config = { amp: true };

interface Props {}
const Page = (props: Props) => {
  useEffect(() => {
    window.x = {
      encrypt: encrypt,
      mockData: mockData
    }
    // window.encrypt = encrypt
    // window.decrypt = decrypt
    // window.mockData = mockData
    window.CryptoJS = CryptoJS
  }, [])

  const encrypt = (timestamp: string) => {
    // Encrypt
    let md5 = CryptoJS.MD5(timestamp).toString().toString()
    let flag = parseInt(md5.slice(-2), 16) % 100 * 8
    let key = mockData.base.slice(flag, flag + 8)
    console.log(`MD5: ${md5}\nkey: ${key}`)
    return key
  }
  const decrypt = (ciphertext: string, timestamp: string) => {
    // Decrypt
    const key = encrypt(timestamp)
    var bytes = CryptoJS.DES.decrypt(mockData.ciphertext, key, {
      iv: CryptoJS.lib.WordArray.create([1, 2, 3, 4, 5, 6, 7, 8]),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString()
    // console.log(`bytes: ${bytes}`);
    return bytes
  }
  const test = () => {
    (() => {
      key = x.encrypt(x.mockData.timestamp)
      key = CryptoJS.enc.Utf8.parse(key)
      // iv = CryptoJS.lib.WordArray.create([0, 0])
      // iv = CryptoJS.lib.WordArray.create([1, 2, 3, 4, 5, 6, 7, 8])
      iv = CryptoJS.enc.Utf8.parse('12345678')
      cfg = {
          iv: iv,
          mode: CryptoJS.mode.ECB,
          // mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      }

      msg = x.mockData.ciphertext
      cc = msg
      // cc = CryptoJS.enc.Utf8.parse(msg)
      // cc = {
      //     ciphertext: cc
      // }
      // msg = "{'code': 200, 'msg': '响应成功'}"
      // msg = CryptoJS.enc.Utf8.parse(msg)
      // cc = CryptoJS.DES.encrypt(msg, key, cfg)


      // cc = mockData.ciphertext
      // key = CryptoJS.enc.Utf8.parse(key)


      // cc = cc.toString()
      // cc = CryptoJS.enc.Hex.parse(cc)
      // cc = CryptoJS.enc.Base64.stringify(cc)
      dd = CryptoJS.DES.decrypt(cc, key, cfg)
      dd = dd.toString(CryptoJS.enc.Utf8)
      // dd = dd.toString()
      console.log(`dd: ${dd}`)
      })

      key = x.mockData.uuid.key
      key = CryptoJS.enc.Utf8.parse(key)
      iv = '12345678'
      iv = CryptoJS.enc.Utf8.parse(iv)
      // iv = CryptoJS.lib.WordArray.create([0, 0])
      cfg = {
          iv: iv,
          // iv: CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse('12345678').toString(CryptoJS.enc.Hex)),
          // mode: CryptoJS.mode.CBC,
          // mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      }

      msg = x.mockData.uuid.plainText
      // msg = CryptoJS.enc.Utf8.parse(msg)
      // msg = CryptoJS.enc.Base64.parse(msg)
      cc = CryptoJS.DES.encrypt(msg, key, cfg)
      cc_result = {
          // cc: cc,
          '[EQ]': x.mockData.uuid.ciphertext,
          cc_to: cc.toString(),
          cc_to_utf8: cc.toString(CryptoJS.enc.Utf8)
      }
      console.log(`cc:`, cc_result)

      // dd = CryptoJS.DES.decrypt(cc, key, cfg)
      // dd = dd.toString(CryptoJS.enc.Utf8)
      // console.log(`[${dd == x.mockData.uuid.plainText}]: ${dd}`)

      // cc = x.mockData.uuid.ciphertext
      // cc = CryptoJS.enc.Utf8.parse(cc)
      // dd = CryptoJS.DES.decrypt(cc, key, cfg)
      // dd = dd.toString(CryptoJS.enc.Utf8)
      // console.log(`[${dd == x.mockData.uuid.plainText}]: ${dd}`)
  }

  const mockData = {
    timestamp: "1665309041817",
    md5: "",
    uuid: {
      key: 'tq1fF1Lm',
      plainText: 'FF56646E-B89E-4511-A442-326C471D1B9B',
      ciphertext: 'cTjYoRJafd8QN3hNlWw/Wgg48pJnoec5cqMyBf21PfputShayMCKYQ=='
    },
    response: {
      key: "lKFkkwZM",
      plainText: '{"statusCode":200,"resultCode":"sucess","resultMsg":"sucess","resultInfo":{"showCategorys":[{"name":"醋","count":"39","categoryId":"a201189"}],"showCateNum":39,"showKeywords":[{"showKeyWord":"醋恒顺","sortScore":"0.591284","rowCount":"32"},{"showKeyWord":"醋宝鼎","sortScore":"0.460283","rowCount":"16"},{"showKeyWord":"醋精","sortScore":"0.366458","rowCount":"2"},{"showKeyWord":"醋陈醋","sortScore":"0.362179","rowCount":"42"},{"showKeyWord":"醋鼎丰","sortScore":"0.319609","rowCount":"5"},{"showKeyWord":"醋镇江","sortScore":"0.305635","rowCount":"46"},{"showKeyWord":"醋 酿造","sortScore":"0.261221","rowCount":"31"},{"showKeyWord":"醋五年陈","sortScore":"0.23475","rowCount":"1"},{"showKeyWord":"醋汁","sortScore":"0.22072","rowCount":"5"},{"showKeyWord":"醋米醋","sortScore":"0.209051","rowCount":"17"},{"showKeyWord":"醋饮料","sortScore":"0.155861","rowCount":"2"},{"showKeyWord":"醋酸","sortScore":"0.080197","rowCount":"33"},{"showKeyWord":"醋盐味薯片","sortScore":"0.07475","rowCount":"2"},{"showKeyWord":"醋大瓶","sortScore":"0.07475","rowCount":"1"},{"showKeyWord":"醋三年陈","sortScore":"0.07475","rowCount":"1"}]}}',
      ciphertext: "y5FtnaLzrWBuqlJZfrfdIB9argq2WsNEenRe8UYkKXhJv1XqFUE+bvQOW53D KLf4s9f84t3VziQiCYU02+AzG2rUv8ZjX3YzOZdBgFQqcptCfmpgu3CHoABp m+OJHPbdLGMsQKG17AcFEaJbe3C/zWj5A7MBxbANl1qPIC0ywhTrYxxDJfOw LEFYpI4B2O2zeg4yFqsABq/acm9/QqAHfysL8eLfDFHSj6393+YLevXEsN+K 9mdtE1nS+Wk/rwhqcP9sTwirojkHoErLimkLZS+IdM8vpqMzOsMVbscrcYln 8ZSFzAyey5Jzyr4nmEuMogbc2hbvLMPJqxMbFsS0s/LyLxHfAh2h5NYrCKjW bxgp5XisXTxAZUQzrj2sJbIMZqtqi2NersjO+wSD2Fs0JWiLMkkShUhULZkC CwYxHaHXXVqVvErkaGEq1bDZy5/HqidywCX4FdnUkOr94k/LsttNJOD0Ogby USOxoGbQDR1/PBfHsZCWF2k6pmtl2I+j11MF3webVXDG7pULPv57tIxnBQ7Q hfKOSfKsvjArbQ+CISPUAX50shayaJCrTAmNn4KR3T9F0yY6rwrWycPpmwDQ po5XGh13zHrFWw9ty+V//TiYVT2cioenug8GHakZncF/HdZcu3rZbYvalrsX +AB/yGM+ST+qpbahotGdfRbl5pSUswrz0Xd1V+OZ9+cskFAdagjV2rO+B3m+ sQ0/OBJVdXAWnQs7MKbl7YyiXP/CFoROqspP7eSqR8PCx4jtSRp15BsO9w/j +piYOTEvtKTMpxBr7dEWMa2EwAHS3VorhxMFjzzwO4DNr23fyBNMHOmUUT32 omZ6r67qsfJOz9FH0RJtuisys92peInEwmLdx5QvttvTAJ8MSlXWjX87Mxcy ZyrQl9mksb8+4bA8xel4unyd8UU/MgCPcN+hvmcQjZbJ4vfNbb48A46u7XDU am6CczUZzHQTnDtVpB3xZkdQvv903Aku0z1Zo0VTQ8zu+JdfGBgi0SjsU8tO 1w17QjUG8uGMI5wdFOxCMSI+lCEO3UvqSmqrKTwc6mIW/MnTNv4fS3fmZaDe sK4YmFiYFq+cCe2NJIxc9qF8RsGTDggOlFP7SC051V4bTUSx0C0+MZVoYZtF DXvFaYU72QGoWcy7p+cMYUGBOXV/W63A1gBb4Ce82EeLkKP6jT51kC/xVvLn TzUOsUuFb7q/SMIe1UuKjFKO7YGWJsqcFs+ucQPNlH1iFyD+aIrym4+mStmU u8bIi01Z075b+ED6/40Js5T/o1GPKFN5Rs7GRdDrZhSq0b/AQoXxr7bwXXy3 7RqVj1We3jUjL6nO7dgWxUTpFPHTYTf4pCU9PsrwTgjhVR/P4H1E56N5cAz5 /WwFihaCHShIGS2taD7K25UPFPibhxsdRaUIMQnxvnryNp2UOYu58LNflr8W cV0gyR2t6NqYSjX95IL4gvrlFbHt/YBmW8xIqDyZNIzPjXu5Pbd8rABVQ6yT HZR/n6hebxinHM75PDK0rHQZgFlQsRJe/2WnqC8lRjGSDSbhlPv/SNkFiX93 P5lLsYB2",
    },
    base: '67QT6441qwhM2e6B3be8gq64bxFnRY88O4E210xtr023gi7j1n01357eB5M4NHO16au3Du549LG62kVBP1P5s771595x74211iZMN44aoV7D07rc69t50r5Ylr3J6tLP9jIJj65M587P688YoE8201Ra77032F9Q71Xldd21Y76190CK51J7r11tSIQ396npYo1gp421473t01o02AlB7x6f2031pl65v23xH62ClKFkkwZMV1hfRtzy9LGe2E4x65h92IJ462TK6yw6QTq15q1Vu2E30y2m6Qq140C90t3a5Kfx850YA6g705x47GB6W9ZUs87KmyLr8XX5j8AD76D55i2ze5JiV3B1S0bmc63YV43058hUX47y66iH1483o5cCfh3w5vTHhh1zxqk9QzO07i80u02g57bXW95J4ott4k976U2r9D421I40t8189359A9DY490AgEbrag9bY383WM289P43lmVx29p222324o0R63WA3st321WO8Yj7aKX6pi64148h266EIs2377Qj0TWfs6CF2xb5d93b80mw8jh44ufRJ0jL0l2hGq2367cO76f5241Vatw1Npj972fd0qlwdK802871YT90bne94Tk6Q8H900B45v8450b09y4dx8StW59j1869g3x4kpI46d59v053yQQk4CEv93l65zMs621o508g1BG4d2N182K1zO898922697cN46R6ME0ax03Q65NcvPn72501Y5n96ZfqH9v9ay89hpW66F13292Gt4mL2597vtBtq1fF1Lm9u0GvphX',
  }
  return <>{/* <style jsx>{``}</style> */}</>
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page
