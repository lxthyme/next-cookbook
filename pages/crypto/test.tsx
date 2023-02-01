import React, { useEffect, useState } from "react"
// import PropTypes from 'prop-types'
import CryptoJS from "crypto-js"
import LXLayout from "@layout/lxlayout"

// export const config = { amp: true };

interface Props {
  base: string
}
interface Window {
  x: object,
  a: string,
  b: string,
}
const Page = ({ base }: Props) => {
  const [isTrim, setIsTrim] = useState(true)
  const [currentTimestamp, setCurrentTimestamp] = useState("")
  const [cipherResponse, setCipherResponse] = useState("")
  const [plainResponse, setPlainResponse] = useState("")
  const [cipherRequest, setCipherRequest] = useState("")
  const [plainRequest, setPlainRequest] = useState("")
  const [currentBase, setCurrentBase] = useState(base)
  useEffect(() => {
    mockData.base = base
    window.x = {
      encrypt,
      decrypt,
      mockData: mockData,
    }
    // window.encrypt = encrypt
    // window.decrypt = decrypt
    // window.mockData = mockData
    window.CryptoJS = CryptoJS
    window.a = `:method: POST
:scheme: https
:path: /app/carriers/queryCarrierByOrderv2.htm
:authority: mobile.st.bl.com
deskeyversion: 2
user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/BaiLianMobileApp/201.15.1 (iPhone; iOS 15.5; Scale/3.00)
phoneid: 454f17a3a45ef2cb912f11fca14582df
devicekey: U8ee/Dl1X+8g5v4RmcnkvEmmpc3ehoB9eBW7s0csHSwy2ofljKJbBA==
channelid: 1
memberid: 4a23420613f2a2b4f4fb2d12a6feabdd
sm-deviceid: BXUbePp0TuGIaK6j8e62IMlVruuCwH9vUsgWwnTN9Q9qpexguWI8t8D89leAD2KsKyuxmqboYgS3ZDJoyyQXN0g==
version: 7.63.0
content-length: 177
deviceid: F3CB4D66-8966-49AD-A454-FDCDEDFDE684
devicemodel: iPhone 7 Plus (CDMA)
timestamp: 1672380485276
accept-language: zh-Hans-US;q=1, en-US;q=0.9
accept: */*
content-type: application/x-www-form-urlencoded
chnflg: ios
membertoken: fKuZh4g4TN9Qnxf3pzW2bFLh3m1y313M6ASlVU7GZHM8c8iri0hwLG1oE2QV 2vxYTJ05ceILI2/uoSKJA6Frs/In6fODSex/
accept-encoding: gzip, deflate, br

data=%2BPJG02lm5sB7ahjF0gPblTz0sdIELvVSBlmvY50O19BILLhPApFiXap8KqhL%20vEvcW2MX%2Bl3M%2Bgylbt%2BFOtHhj1vuHJLHSWF7FSr6E7X98uQQUVQgx8aXmpVv%201s5%2BkOk7PG/oB86B4sPWbrNdKjYSag%3D%3D`
    window.b = `:method: POST
:scheme: https
:path: /app/carriers/queryCarrierByOrderv2.htm
:authority: mobile.st.bl.com
deskeyversion: 2
user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/BaiLianMobileApp/201.15.1 (iPhone; iOS 15.5; Scale/3.00)
phoneid: 454f17a3a45ef2cb912f11fca14582df
devicekey: U8ee/Dl1X+8g5v4RmcnkvEmmpc3ehoB9eBW7s0csHSwy2ofljKJbBA==
channelid: 1
memberid: 4a23420613f2a2b4f4fb2d12a6feabdd
sm-deviceid: BXUbePp0TuGIaK6j8e62IMlVruuCwH9vUsgWwnTN9Q9qpexguWI8t8D89leAD2KsKyuxmqboYgS3ZDJoyyQXN0g==
version: 7.63.0
content-length: 177
deviceid: F3CB4D66-8966-49AD-A454-FDCDEDFDE684
devicemodel: iPhone 7 Plus (CDMA)
timestamp: 1672380485276
accept-language: zh-Hans-US;q=1, en-US;q=0.9
accept: */*
content-type: application/x-www-form-urlencoded
chnflg: ios
membertoken: fKuZh4g4TN9Qnxf3pzW2bFLh3m1y313M6ASlVU7GZHM8c8iri0hwLG1oE2QV 2vxYTJ05ceILI2/uoSKJA6Frs/In6fODSex/
accept-encoding: gzip, deflate, br

data=%2BPJG02lm5sB7ahjF0gPblTz0sdIELvVSBlmvY50O19BILLhPApFiXap8KqhL%20vEvcW2MX%2Bl3M%2Bgylbt%2BFOtHhj1vuHJLHSWF7FSr6E7X98uQQUVQgx8aXmpVv%201s5%2BkOk7PG/oB86B4sPWbrNdKjYSag%3D%3D
{
	"obj": "QaWL4eFJpI3pVsvYfMZDqF92z1HYgZDz5U65DWgfZpRuz18nl/5UwdRr66gS i1/BXpAZOkBghINf4dsm/p88DyxzRRVPfTNUyCfhyRxlV0YtgjNIZzBzM9fy r9tjw6QjJiCUitFzU9ha+dj6VIrjekxgn1GFEyketiCj6eFTJ0jVJLP55c/U Iq1HSkqYVf7xAyZEO8bdSTl9juaNh2DQdFsVTRGJodMeOHx4m4J3DF+hjSVD xtuP5pCT6N+gBocUP8sRy6PijoOmB8gDppbG53NmVJYbtsoKPwnbb0XEMrhg 3wHdndoViTMomhoNPaRypJ8ugZwjXq6vq8DEv0nVt7DZyhY6snUDO6yBdv9X 9ARdrn/7CI7/NsYtLKrOFzjXQ/el26k+nuYTQ6VQQ0nWQuMNkJZzgB7ZJabd nL3dTKm4o6g03PzbeCRg4cc6B8sdopR/BG+TH+Nf/rKEhogcI/PdG3n3nVjN wPE19zvSt9fJPBWD1CDr7h3QBIkPkiBs1lAtCPgYQCgWgy787/N/i+J3YiRd 3IjVDOPTcB9YaBr7ZsWiglI6tR2ISD7vl5WszXvhOWKOeHmGoUfwP4cYRoN+ d7C9rnb5PK5KdC9dqYGH3yv29VKBWRZSPoyqAoRouRlKp3stP6BVZGwzkqvU AzL5aSzE0A/W9pkRDJIN2UVoq2YK6HRIZetfw3jUPQD/kzFQLIOX79xlkSbL rgcPN+IEFWAo4D5/g1Dz04rL6TR1/4w7uF7RvLja0Dcmr2/KgFx/5GFVkDt0 U5DPcNx2xg4zdR4K57PgLYZd0dbDPTvuipmzR/mntUZIid3Rdzbgb6ZQlVJC bmPkiQ2BotJNEu5L/1gS0RNL",
	"resCode": "00100000"
}`
  }, [base])

  const getDesKey = (timestamp: string) => {
    let md5 = CryptoJS.MD5(timestamp).toString().toString()
    let flag = (parseInt(md5.slice(-2), 16) % 100) * 8
    let key = mockData.base.slice(flag, flag + 8)
    // console.log(`MD5: ${md5}\nkey: ${key}`);
    console.log(`desKeyQ8H900B4: ${key}`)
    return key
  }
  const encrypt = (timestamp: string, plainText: string) => {
    let desKey = getDesKey(timestamp)
    const key = CryptoJS.enc.Utf8.parse(desKey)
    const cfg = {
      iv: CryptoJS.enc.Hex.parse("0102030405060708"),
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
    let cc = CryptoJS.DES.encrypt(plainText, key, cfg)
    let ciphertext = cc.ciphertext.toString(CryptoJS.enc.Base64)
    console.log("ciphertext: ", ciphertext)
    return ciphertext
  }
  // timestamp = ''
  // ciphertext = ''
  // // ciphertext = decodeURIComponent(ciphertext)
  // trim = true
  // x.decrypt(timestamp, ciphertext, trim)
  const decrypt = (timestamp: string, ciphertext: string, trim: boolean) => {
    let desKey = getDesKey(timestamp)
    const key = CryptoJS.enc.Utf8.parse(desKey)
    const cfg = {
      iv: CryptoJS.enc.Hex.parse("0102030405060708"),
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
    if (trim) {
      ciphertext = decodeURIComponent(ciphertext)
      ciphertext = ciphertext.replaceAll(" ", "")
    }
    let cc = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
      },
      key,
      cfg
    )
    let plainText = cc.toString(CryptoJS.enc.Utf8)
    const plainJSON = JSON.parse(plainText)
    console.log("plainText: ", JSON.stringify(plainJSON, null, 4))
    return plainJSON
  }
  const test = () => {
    key = "473t01o0"
    ciphertext = "abcdefg"

    // key = 'abcd1234'
    // ciphertext = 'Message'

    iv = CryptoJS.enc.Hex.parse("0102030405060708")
    // key = '12345678'
    // iv = '12345678'
    // iv = '1111'
    // iv = CryptoJS.enc.Utf8.parse(iv)
    // ciphertext = 'Hello world'

    cfg = {
      iv: iv,
      // iv: [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08],
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }

    key = CryptoJS.enc.Utf8.parse(key)
    // ciphertext = CryptoJS.enc.Utf8.parse(ciphertext)
    // ciphertext = window.btoa(ciphertext)
    cc = CryptoJS.DES.encrypt(ciphertext, key, cfg)
    // cc = cc.toString()
    cc.ciphertext.toString(CryptoJS.enc.Base64)
  }

  const convert = () => {
    if (!currentTimestamp) {
      return
    }
    if (cipherRequest) {
      try {
        const plainRequestObj = decrypt(currentTimestamp, cipherRequest, isTrim)
        setPlainRequest(JSON.stringify(plainRequestObj, null, 2))
      } catch (error) {
        console.log("-->Error[Request]: ", error)
      }
    }
    if (cipherResponse) {
      try {
        const plainResponseObj = decrypt(
          currentTimestamp,
          cipherResponse,
          isTrim
        )
        setPlainResponse(JSON.stringify(plainResponseObj, null, 2))
      } catch (error) {
        console.log("-->Error[Response]: ", error)
      }
    }
  }
  return (
    <LXLayout>
      <style jsx>{`
        .v-wrapper {
          display: flex;
          justify-content: stretch;
          align-items: stretch;
          align-content: stretch;
          flex-direction: row;
          height: 100%;
        }
        .v-left,
        .v-right {
          flex: 1 1;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          align-items: stretch;
          justify-items: stretch;
          align-content: stretch;
        }
        .v-left textarea {
          flex: 2 2;
        }
        .v-left-cipher {
          display: flex;
          flex-direction: row;
          justify-content: stretch;
          align-items: stretch;
          height: 100%;
          flex: 1 1;
        }
        .v-left-cipher textarea {
          flex: 1 1;
        }
        .v-middle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .v-middle button {
          flex: 1 1;
          width: 100%;
        }
        .v-left textarea,
        .v-right textarea {
          // flext: 1 1;
          width: 100%;
        }
        #v-cipherRequest,
        #v-plainRequest {
          flex: 1 1;
        }
        #v-cipherResponse,
        #v-plainResponse {
          flex: 2 2;
        }
      `}</style>
      <div className="v-wrapper">
        <div className="v-left">
          <textarea
            // name="v-cipherRequest"
            // id="v-cipherRequest"
            cols="10"
            rows="10"
            placeholder="请输入密文"
            // value={cipherRequest}
            onChange={(e) => {
              const v = `{"obj": ""}\n` + e.target.value + "\n"
              const timestamp = v.replace(
                /[\s\S]*?timestamp:([ 0-9]*)[\s\S]*$/,
                "$1"
              )
              const request = v.replace(
                /[\s\S]*?data=([\s\S]*?)\n[\s\S]*?$/,
                "$1"
              )
              const response = v.replace(
                /[\s\S]*"obj": {0,}"([\s\S]*?)"[\s\S]*$/,
                "$1"
              )
              setCurrentTimestamp(timestamp.trim())
              setCipherRequest(request.trim())
              setCipherResponse(response.trim())
              console.log("info: ", {
                timestamp,
                request,
                response,
              })
            }}
          ></textarea>
          {/* <textarea
            name="v-cipherResponse"
            id="v-cipherResponse"
            cols="10"
            rows="10"
            placeholder="请输入密文"
            value={cipherResponse}
            onChange={(e) => setCipherResponse(e.target.value)}
          ></textarea> */}
          <div className="v-left-cipher">
            <textarea
              name="v-cipherRequest"
              id="v-cipherRequest"
              cols="10"
              rows="10"
              value={cipherRequest}
              readOnly
            ></textarea>
            <textarea
              name="v-cipherResponse"
              id="v-cipherResponse"
              cols="10"
              rows="10"
              value={cipherResponse}
              readOnly
            ></textarea>
          </div>
        </div>
        <div className="v-middle">
          <h2>解密</h2>
          <div className="v-middle-item">
            <label htmlFor="v-check">isTrim:</label>
            <input
              type="checkbox"
              name="v-check"
              id="v-check"
              checked={isTrim}
              onChange={(e) => setIsTrim(e.target.checked)}
            />
          </div>
          <label htmlFor="v-timestamp">时间戳:</label>
          <input
            type="text"
            name="v-timestamp"
            id="v-timestamp"
            value={currentTimestamp}
            onChange={(e) => setCurrentTimestamp(e.target.value)}
          />
          <label htmlFor="v-base">base:</label>
          <input
            type="text"
            name="v-base"
            id="v-base"
            value={currentBase}
            onChange={(e) => {
              if (e.target.value.trim().length <= 0) {
                setCurrentBase(mockData.base)
              } else {
                setCurrentBase(e.target.value.trim())
              }
            }}
          />
          <button onClick={convert}>Convert</button>
        </div>
        <div className="v-right">
          <textarea
            name="v-plainRequest"
            id="v-plainRequest"
            cols="10"
            rows="10"
            placeholder="明文在此~"
            value={plainRequest}
            readOnly
          ></textarea>
          <textarea
            name="v-plainResponse"
            id="v-plainResponse"
            cols="10"
            rows="10"
            placeholder="明文在此~"
            value={plainResponse}
            readOnly
          ></textarea>
        </div>
      </div>
    </LXLayout>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page
export async function getStaticProps() {
  return {
    props: {
      base: process.env.DJBASE || "",
    },
  }
}

const mockData = {
  base: "",
}
