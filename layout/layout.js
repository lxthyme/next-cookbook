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
  return (
    <div style={layoutStyle}>
      <div>
        <Link href="index">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
      {props.children}
    </div>
  )
}
