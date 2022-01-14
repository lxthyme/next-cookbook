import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import CryptoJS from "crypto-js"

// export const config = { amp: true };

interface Props {}
const Page = (props: Props) => {
  useEffect(() => {
    window.encrypt = encrypt
    window.encrypt2 = encrypt2
    window.decrypt = decrypt
  }, [])

  const encrypt = (msg: string, key: string) => {
    // Encrypt
    return CryptoJS.DES.encrypt(msg, key).toString()
  }
  const encrypt2 = (msg: string, key: string) => {
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const ivHex = CryptoJS.enc.Utf8.parse(key)
    const encrypted = CryptoJS.DES.encrypt(msg, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
    return encrypted.ciphertext.toString()
  }
  const decrypt = (ciphertext: string, key: string) => {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, key)
    return bytes.toString(CryptoJS.enc.Utf8)
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
