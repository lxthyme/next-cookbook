import Layout from '../../../../../layout/layout'
import loadDB from '../../../../../plugins/firebase'

const Post = ({ item }) => {
  return (<Layout>
    <h4>{item.title}</h4>
    <p>
    URL: {' '}
      <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
    </p>
    <style jsx>{''}</style>
  </Layout>)
}

Post.getInitialProps = async ({ query }) => {
  const db = await loadDB()
  let item = await db.child('item')
    .child(query.id)
    .once('value')

  item = item.val()

  return { item }
}

export default Post
