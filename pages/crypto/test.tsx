import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import CryptoJS from "crypto-js";

// export const config = { amp: true };


interface Props {}
const Page = (props: Props) => {
  useEffect(() => {
    window.x = {
      encrypt,
      decrypt,
      mockData: mockData,
    };
    // window.encrypt = encrypt
    // window.decrypt = decrypt
    // window.mockData = mockData
    window.CryptoJS = CryptoJS;
  }, []);

  const getDesKey = (timestamp: string) => {
    let md5 = CryptoJS.MD5(timestamp).toString().toString();
    let flag = (parseInt(md5.slice(-2), 16) % 100) * 8;
    let key = mockData.base.slice(flag, flag + 8);
    // console.log(`MD5: ${md5}\nkey: ${key}`);
    console.log(`desKeyQ8H900B4: ${key}`);
    return key;
  };
  const encrypt = (timestamp: string, plainText: string) => {
    let desKey = getDesKey(timestamp);
    const key = CryptoJS.enc.Utf8.parse(desKey);
    const cfg = {
      iv: CryptoJS.enc.Hex.parse("0102030405060708"),
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
    let cc = CryptoJS.DES.encrypt(plainText, key, cfg);
    let ciphertext = cc.ciphertext.toString(CryptoJS.enc.Base64);
    console.log(`ciphertext: ${ciphertext}`);
  };
  const decrypt = (timestamp: string, ciphertext: string, trim: boolean) => {
    let desKey = getDesKey(timestamp);
    const key = CryptoJS.enc.Utf8.parse(desKey);
    const cfg = {
      iv: CryptoJS.enc.Hex.parse("0102030405060708"),
      // mode: CryptoJS.mode.ECB,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
    if (trim) {
      ciphertext = ciphertext.replaceAll(" ", "");
    }
    let cc = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
      },
      key,
      cfg,
    );
    let plainText = cc.toString(CryptoJS.enc.Utf8);
    console.log(`plainText: ${plainText}`);
  };
  const test = () => {
    key = "473t01o0";
    ciphertext = "abcdefg";

    // key = 'abcd1234'
    // ciphertext = 'Message'

    iv = CryptoJS.enc.Hex.parse("0102030405060708");
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
    };

    key = CryptoJS.enc.Utf8.parse(key);
    // ciphertext = CryptoJS.enc.Utf8.parse(ciphertext)
    // ciphertext = window.btoa(ciphertext)
    cc = CryptoJS.DES.encrypt(ciphertext, key, cfg);
    // cc = cc.toString()
    cc.ciphertext.toString(CryptoJS.enc.Base64);
  };

  const mockData = {
    timestamp: "1665309041817",
    md5: "",
    uuid: {
      key: "tq1fF1Lm",
      plainText: "FF56646E-B89E-4511-A442-326C471D1B9B",
      ciphertext: "cTjYoRJafd8QN3hNlWw/Wgg48pJnoec5cqMyBf21PfputShayMCKYQ==",
    },
    response: {
      key: "lKFkkwZM",
      plainText:
        '{"statusCode":200,"resultCode":"sucess","resultMsg":"sucess","resultInfo":{"showCategorys":[{"name":"醋","count":"39","categoryId":"a201189"}],"showCateNum":39,"showKeywords":[{"showKeyWord":"醋恒顺","sortScore":"0.591284","rowCount":"32"},{"showKeyWord":"醋宝鼎","sortScore":"0.460283","rowCount":"16"},{"showKeyWord":"醋精","sortScore":"0.366458","rowCount":"2"},{"showKeyWord":"醋陈醋","sortScore":"0.362179","rowCount":"42"},{"showKeyWord":"醋鼎丰","sortScore":"0.319609","rowCount":"5"},{"showKeyWord":"醋镇江","sortScore":"0.305635","rowCount":"46"},{"showKeyWord":"醋 酿造","sortScore":"0.261221","rowCount":"31"},{"showKeyWord":"醋五年陈","sortScore":"0.23475","rowCount":"1"},{"showKeyWord":"醋汁","sortScore":"0.22072","rowCount":"5"},{"showKeyWord":"醋米醋","sortScore":"0.209051","rowCount":"17"},{"showKeyWord":"醋饮料","sortScore":"0.155861","rowCount":"2"},{"showKeyWord":"醋酸","sortScore":"0.080197","rowCount":"33"},{"showKeyWord":"醋盐味薯片","sortScore":"0.07475","rowCount":"2"},{"showKeyWord":"醋大瓶","sortScore":"0.07475","rowCount":"1"},{"showKeyWord":"醋三年陈","sortScore":"0.07475","rowCount":"1"}]}}',
      ciphertext:
        "y5FtnaLzrWBuqlJZfrfdIB9argq2WsNEenRe8UYkKXhJv1XqFUE+bvQOW53D KLf4s9f84t3VziQiCYU02+AzG2rUv8ZjX3YzOZdBgFQqcptCfmpgu3CHoABp m+OJHPbdLGMsQKG17AcFEaJbe3C/zWj5A7MBxbANl1qPIC0ywhTrYxxDJfOw LEFYpI4B2O2zeg4yFqsABq/acm9/QqAHfysL8eLfDFHSj6393+YLevXEsN+K 9mdtE1nS+Wk/rwhqcP9sTwirojkHoErLimkLZS+IdM8vpqMzOsMVbscrcYln 8ZSFzAyey5Jzyr4nmEuMogbc2hbvLMPJqxMbFsS0s/LyLxHfAh2h5NYrCKjW bxgp5XisXTxAZUQzrj2sJbIMZqtqi2NersjO+wSD2Fs0JWiLMkkShUhULZkC CwYxHaHXXVqVvErkaGEq1bDZy5/HqidywCX4FdnUkOr94k/LsttNJOD0Ogby USOxoGbQDR1/PBfHsZCWF2k6pmtl2I+j11MF3webVXDG7pULPv57tIxnBQ7Q hfKOSfKsvjArbQ+CISPUAX50shayaJCrTAmNn4KR3T9F0yY6rwrWycPpmwDQ po5XGh13zHrFWw9ty+V//TiYVT2cioenug8GHakZncF/HdZcu3rZbYvalrsX +AB/yGM+ST+qpbahotGdfRbl5pSUswrz0Xd1V+OZ9+cskFAdagjV2rO+B3m+ sQ0/OBJVdXAWnQs7MKbl7YyiXP/CFoROqspP7eSqR8PCx4jtSRp15BsO9w/j +piYOTEvtKTMpxBr7dEWMa2EwAHS3VorhxMFjzzwO4DNr23fyBNMHOmUUT32 omZ6r67qsfJOz9FH0RJtuisys92peInEwmLdx5QvttvTAJ8MSlXWjX87Mxcy ZyrQl9mksb8+4bA8xel4unyd8UU/MgCPcN+hvmcQjZbJ4vfNbb48A46u7XDU am6CczUZzHQTnDtVpB3xZkdQvv903Aku0z1Zo0VTQ8zu+JdfGBgi0SjsU8tO 1w17QjUG8uGMI5wdFOxCMSI+lCEO3UvqSmqrKTwc6mIW/MnTNv4fS3fmZaDe sK4YmFiYFq+cCe2NJIxc9qF8RsGTDggOlFP7SC051V4bTUSx0C0+MZVoYZtF DXvFaYU72QGoWcy7p+cMYUGBOXV/W63A1gBb4Ce82EeLkKP6jT51kC/xVvLn TzUOsUuFb7q/SMIe1UuKjFKO7YGWJsqcFs+ucQPNlH1iFyD+aIrym4+mStmU u8bIi01Z075b+ED6/40Js5T/o1GPKFN5Rs7GRdDrZhSq0b/AQoXxr7bwXXy3 7RqVj1We3jUjL6nO7dgWxUTpFPHTYTf4pCU9PsrwTgjhVR/P4H1E56N5cAz5 /WwFihaCHShIGS2taD7K25UPFPibhxsdRaUIMQnxvnryNp2UOYu58LNflr8W cV0gyR2t6NqYSjX95IL4gvrlFbHt/YBmW8xIqDyZNIzPjXu5Pbd8rABVQ6yT HZR/n6hebxinHM75PDK0rHQZgFlQsRJe/2WnqC8lRjGSDSbhlPv/SNkFiX93 P5lLsYB2",
    },
    base: "67QT6441qwhM2e6B3be8gq64bxFnRY88O4E210xtr023gi7j1n01357eB5M4NHO16au3Du549LG62kVBP1P5s771595x74211iZMN44aoV7D07rc69t50r5Ylr3J6tLP9jIJj65M587P688YoE8201Ra77032F9Q71Xldd21Y76190CK51J7r11tSIQ396npYo1gp421473t01o02AlB7x6f2031pl65v23xH62ClKFkkwZMV1hfRtzy9LGe2E4x65h92IJ462TK6yw6QTq15q1Vu2E30y2m6Qq140C90t3a5Kfx850YA6g705x47GB6W9ZUs87KmyLr8XX5j8AD76D55i2ze5JiV3B1S0bmc63YV43058hUX47y66iH1483o5cCfh3w5vTHhh1zxqk9QzO07i80u02g57bXW95J4ott4k976U2r9D421I40t8189359A9DY490AgEbrag9bY383WM289P43lmVx29p222324o0R63WA3st321WO8Yj7aKX6pi64148h266EIs2377Qj0TWfs6CF2xb5d93b80mw8jh44ufRJ0jL0l2hGq2367cO76f5241Vatw1Npj972fd0qlwdK802871YT90bne94Tk6Q8H900B45v8450b09y4dx8StW59j1869g3x4kpI46d59v053yQQk4CEv93l65zMs621o508g1BG4d2N182K1zO898922697cN46R6ME0ax03Q65NcvPn72501Y5n96ZfqH9v9ay89hpW66F13292Gt4mL2597vtBtq1fF1Lm9u0GvphX",
    v2: {
      timestamp: "1670555261811",
      deskey: "473t01o0",
      plainText2: "abcdefg",
      ciphertext2: "JG480LjyXs4=",
      plainText: {
        otherresource: {
          cookieId: "13C618B0-35D9-49E1-A075-1A3891E58222",
          resourceId:
            "20015,20016,20017,20018,20019,20020,2019520,20022,20522,8120,7210,20419,20420,20417,20301,20074,20415,20308,20309,20281",
          isSort: "",
        },
      },
      ciphertext:
        "LSAWI406hR0yInRsE/53wShEqSLyyDfRzvtYIp3BZ225nD3u3lu5l9IBcKr/ HE7sOpIUFrhwkVPH4647CsHn3KX9ngeuygXPZpzQXK5f51TZh5muNrxd4hFo LpeVudu+/h4cTYHR/JIUzs/0zjB3crKXMQ13Uu7QNDZApiFck748NE00WnDR lGaUOmHzt/4n2bMi3G98dum2KLK3kyOX9vke2faWAei/DMHgKWy/WwqlHdZW PHliJVvLdCXRUEpSOkKFwNOOVLk8FwCkO0el74NWeVbO2vD1thDBPKZ5xQ7D aey+1hkO30lXBoxZx4oIclYzoVKd82s=",
    },
    v3: {
      timestamp: "1670577615203",
      key: "Q8H900B4",
      plainText: {
        otherresource: {
          cookieId: "13C618B0-35D9-49E1-A075-1A3891E58222",
          resourceId:
            "20285,20000,20205,7200,81050,20021,20001,20230,20003,20004,20005,20006,200070,20008,20009,20010,20011,20012,20013,20014",
          isSort: "",
        },
      },
      ciphertext:
        "EeBEwKsQaLZM7qg3UUKcDNm7K2vks39BYzMFzdeEo/NAyDZMTNTRoi2RIXJ+ Tra7eAdWnomTNoUhe6wozEMKhWV3exwNgYMt0Yo70N5cTuQIFdrh3hvI3Raf +OJs44X2GRAZ60DchFvs5Abfb/k34PNMiv02fHErU02ZKPqRSfWo5TorLSRE cQNKxwRVry9ODUdbmI61aTHrRT0uq8xunu2SSAoOEzAyrsGBX5/BQfaD/g4T OPlpx1RY6Q9sGY6YvuzDZQi+NtWS5Tpir1hfh4UswVN3o+eDz9zaNS12DluQ 9HX91qz3W12fsTtNEvn81WqgOzd27vE=",
    },
  };
  return <>{/* <style jsx>{``}</style> */}</>;
};

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE";

export default Page;
