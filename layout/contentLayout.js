import Header from '../components/head/head'
import Base from './base'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const ContentLayout = ({ content, title = 'placeholder' }) => (
  <>
    <Base style={layoutStyle}>
      <Header />
      {props.content}
      {/* <style jsx>{``}</style> */}
    </Base>
  </>
)

export default ContentLayout

// export default () => <ContentLayout content={Page} />
