import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout (props) {
  return <>
    <div style={layoutStyle}>
      <div className="header-wrapper">
        <Link href="index">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="about">
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
  </>
}
