import Header from '../components/head/head'

const style = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = ({ content, title = 'placeholder' }) => {
  console.log('title: ', title)
  return (
    <div style={style}>
      <Header />
      {content}
    </div>
  )
}

export default Layout
