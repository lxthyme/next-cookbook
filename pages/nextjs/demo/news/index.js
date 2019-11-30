import Layout from '../../../../layout/layout'

import loadDB from '../../../../plugins/firebase'
import Link from 'next/link'

const PostLink = ({ id, title }) => (
  <li>
    <Link href="/nextjs/demo/news/p/[id]" as={`/nextjs/demo/news/p/${id}`}>
      <a> [{id}] - {title} </a>
    </Link>
  </li>
)

const Index = ({ stories }) => {
  return (
    <Layout>
      <h2> Hacker News - Latest </h2>
      <ul>
        {stories.map(t => <PostLink key={t.id} id={t.id} title={t.title} />)}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  let stories = []
  try {
    const db = await loadDB()

    const ids = await db.child('topstories').once('value')
    stories = await Promise.all(
      ids
        .val()
        .slice(0, 10)
        .map(id =>
          db
            .child('item')
            .child(id)
            .once('value')
        )
    )
    stories = stories.map(s => s.val())
  } catch (e) {
    console.log('>>>>>>>>>>E: ', e)
  }
  return { stories }
}

// export default withLayout(Index)
export default Index
