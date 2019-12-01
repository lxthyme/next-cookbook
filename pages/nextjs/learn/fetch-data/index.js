import Mobile from '../../../../layout/Mobile'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

const Index = ({ shows }) => {
  return (
    <>
      <Mobile>
        <h1 className="v-list-title">Batman TV Shows</h1>
        <ul className="v-list-wrapper">
          {shows.map(t => (
            <li key={t.id} className="v-list-item">
              <img
                className="v-item-logo"
                src={t.image && t.image.medium}
                alt=""
              />
              <Link
                href="/nextjs/learn/fetch-data/p/[id]"
                as={`/nextjs/learn/fetch-data/p/${t.id}`}
              >
                <a className="v-item-title">{t.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Mobile>
      <style jsx>{`
        .v-list-title {
          padding: 16px;
          font-weight: bold;
          font-size: 16px;
        }
        .v-list-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .v-list-item {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex-direction: column;
          padding: 16px;
          box-shadow: 0 0 1px 0 #999;
          flex: 1 1 33%;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
        }
        .v-item-logo {
          width: 100%;
        }
        .v-item-title {
          height: 2.81rem;
          line-height: 2.8rem;
          border-radius: 7px;
          background-color: #0070f3;
          box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
          color: white;
          margin: 16px 10px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(t => t.show)
  }
}

export default Index
