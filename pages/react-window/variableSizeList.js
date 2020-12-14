import { VariableSizeList as List } from 'react-window'
// export const config = { amp: true };

const rowHeight = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50))

const getRowItemSize = (idx) => rowHeight[idx]

const Row = ({ index, style }) => <div style={style}>Row {index}</div>
const VerticalList = () => (
  <List height={150} itemCount={1000} itemSize={getRowItemSize} width={300}>
    {Row}
  </List>
)

const columnWidth = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50))

const getColumnItemSize = (idx) => columnWidth[idx]

const Column = ({ index, style }) => <div style={style}>Column {index}</div>
const HorizontalList = () => (
  <List
    height={75}
    itemCount={1000}
    itemSize={getColumnItemSize}
    layout="horizontal"
    width={300}
  >
    {Column}
  </List>
)

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
