import Mobile from '../../../../../layout/Mobile'
import fetch from 'isomorphic-unfetch'

const Post = ({ show }) => {
  return (
    <Mobile>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={show.image.medium} alt="" />
      <style jsx>{''}</style>
    </Mobile>
  )
}

Post.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
