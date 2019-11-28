import withLayout from '../../../../layout/mobile2'

import loadDB from '../../../../plugins/firebase'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href="/p/[pid]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = ({ stories }) => (
  <>
    <h2>Hacker News - Latest</h2>
    <ul>
      {stories.map(t => (
        <PostLink key={t.id} id={t.id} title={t.title} />
      ))}
    </ul>
  </>
)

Index.getInitialPages = async function () {
  const db = await loadDB()

  const ids = await db.child('topstories').once('value')
  let stories = await Promise.all(
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
  console.log('stories: ', stories)
  return { stories }
}

export default withLayout(Index)
