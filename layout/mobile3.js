import Header from '../components/head/head'
import Base from './base'

const style = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = ({ content, title = 'placeholder' }) => {
  console.log('title: ', title)
  return (
    <Base style={style}>
      <Header />
      {content}
    </Base>
  )
}

export default Layout
