import { Button, Space } from 'antd'
// export const config = { amp: true };
import css from 'styled-jsx/css'

const btnStyle = css.resolve`
  // color: red;
  // font-size: 10px;
  button {
    color: purple;
    font-size: 20px;
  }
  span {
    color: magenta;
    font-size: 30px;
  }
`
const btnSpanStyle = css.resolve`
  span {
    color: magenta;
    font-size: 30px;
  }
`

const VButton = ({ btnTitle, children, className }) => {
  return (
    <>
      <div>
        {children}
        <hr />
        <button>
          <span>{btnTitle}</span>
        </button>
      </div>
      <span>{btnTitle}</span>
    </>
  )
}
const Page = (props) => {
  // console.log('--', btnStyle)
  return (
    <>
      <div className="v-btn-group">
        <VButton
          className={`${btnStyle.className} ${btnSpanStyle.className}`}
          btnTitle="btnStyle"
        >
          <button>btnStyle-inline</button>
        </VButton>
      </div>
      <Space>
        <Button>antd.Button</Button>
      </Space>
      {btnStyle.styles}
      {btnSpanStyle.styles}
      {/* <style jsx>{`
        .v-btn-group /deep/ button {
          color: #525eff;
        }
        .v-btn-group >>> button {
          color: magenta;
        }
        .v-btn-group {
          button {
            color: red;
          }
        }
      `}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
