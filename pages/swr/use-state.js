import React, { useState } from 'react'

// export const config = { amp: true };

const DataList = Array.from({ length: 200 }, (item, id) => {
  const idx = `${id + 1}`.padStart(3, '0')
  return {
    id,
    idx,
    name: `name-${idx}`,
    content: `content-${idx}`,
  }
})

const Page = (props) => {
  const [dataList, setDataList] = useState({
    list: DataList,
    page: 1,
  })
  const onAdd = () => {
    setDataList((t) => {
      const list = [...t.list]
      const last = list.slice(-1)[0] || { id: 1 }
      let id = last.id || 0
      id += 1
      const idx = `${id + 1}`.padStart(3, '0')
      list.push({
        id,
        idx,
        name: `name-${idx}`,
        content: `content-${idx}`,
      })
      console.log('onAdd: ', list)
      return { ...t, list: [...list] }
    })
  }
  const onSubtract = () => {
    setDataList((t) => {
      const list = [...t.list]
      list.splice(-1, 1)
      console.log('onSubtract: ', list)
      return { ...t, list: [...list] }
    })
  }
  return (
    <>
      <div className="v-tool-bar">
        <button onClick={onAdd}>Add</button>
        <button onClick={onSubtract}>Subtract</button>
      </div>
      <div className="v-list-wrapper">
        {[...dataList.list].reverse().map((t) => (
          <div key={t.id} className="v-list-item">
            {t.name}
          </div>
        ))}
      </div>
      <style jsx>{`
        .v-tool-bar {
          display: flex;
          justify-content: stretch;
          align-items: stretch;
          width: 200px;
          height: 44px;
        }
        .v-tool-bar button {
          flex: 1 1;
        }
        .v-list-item {
          padding: 10px 16px;
        }
      `}</style>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = 'UseStateTestPage'
export default Page
