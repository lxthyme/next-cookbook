import { FixedSizeList as List } from 'react-window'

// export const config = { amp: true };

const Row = ({ index, style }) => <div style={style}>Row {index}</div>
const VerticalList = (props) => {
  return (
    <>
      <List height={150} itemCount={1000} itemSize={35} width={300}>
        {Row}
      </List>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

const Column = ({ index, style }) => <div style={style}>Column {index}</div>
const HorizontalList = (props) => {
  return (
    <>
      <List
        height={75}
        itemCount={1000}
        itemSize={100}
        width={300}
        layout="horizontal"
      >
        {Column}
      </List>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

const Page = (props) => {
  return (
    <>
      <h4>Vertical</h4>
      <VerticalList />
      <h4>Horizontal</h4>
      <HorizontalList />
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
