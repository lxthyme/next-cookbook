import Link from 'next/link'
import Base from './base'

const linkStyle = {
  marginRight: 15
}
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default ({ children }) => {
  return (
    <Base>
      <div style={layoutStyle}>
        <div className="header-wrapper">
          <Link href="/nextjs/demo/news/index">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/nextjs/demo/news/about">
            <a style={linkStyle}>About</a>
          </Link>
        </div>
        {props.children}
      </div>
      <style jsx>{`
        .header-wrapper {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 44px;
          box-shadow: 0 0 3px 0 #999;
        }
      `}</style>
    </Base>
  )
}

// export default <Layout>...</Layout>
