import Link from 'next/link'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <Link href="react-virtualized/list">
        <a className="btn-x-blue">List</a>
      </Link>
      <Link href="react-virtualized/infiniteLoader">
        <a className="btn-x-blue">Infinite Loader List</a>
      </Link>
      <Link href="react-virtualized/infiniteLoadingList">
        <a className="btn-x-blue">Infinite Loader List</a>
      </Link>
      <Link href="react-virtualized/window-scroller">
        <a className="btn-x-blue">Window Scroller</a>
      </Link>
      <Link href="react-virtualized/dynamicHeightList.example">
        <a className="btn-x-blue">DynamicHeightList.example</a>
      </Link>
      <h4>Regular demo</h4>
      <h4>1. ArrowKeyStepper</h4>
      <h4>2. AutoSizer</h4>
      {/*
      DynamicWidthGrid => dynamic width text
      DynamicHeightGrid => dynamic height text
      DynamicWidthMultiGrid => dynamic width text
      DynamicHeightList => dynamic height image
      DynamicHeightTableColumn => mixed fixed and dynamic height text
      */}
      <h4>3. Cell Measurer</h4>
      <Link href="react-virtualized/CellMeasurer">
        <a className="btn-x-gray">[Grid]dynamic width text</a>
      </Link>
      <Link href="react-virtualized/CellMeasurer">
        <a className="btn-x-gray">[Grid]dynamic height text</a>
      </Link>
      <Link href="react-virtualized/CellMeasurer">
        <a className="btn-x-gray">[Multi Grid]dynamic width text</a>
      </Link>
      <Link href="react-virtualized/3.CellMeasurer/dynamicHeight.List">
        <a className="btn-x-blue">[List]dynamic height image</a>
      </Link>
      <Link href="react-virtualized/3.CellMeasurer/mixedList">
        <a className="btn-x-blue">
          [TableColumn]mixed fixed and dynamic height text
        </a>
      </Link>
      <br />
      <h4>4. ColumnSizer</h4>
      <h4>5. InfiniteLoader</h4>
      <h4>6. MultiGrid</h4>
      <h4>7. ScrollSync</h4>
      <h4>8. WindowScroller</h4>
      <h4>9. Collection</h4>
      <Link href="react-virtualized/9.Collection/collection">
        <a className="btn-x-blue">Collection</a>
      </Link>
      <h4>10. Grid</h4>
      <h4>11. List</h4>
      <h4>12. Masonry</h4>
      <h4>13. Table</h4>
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
