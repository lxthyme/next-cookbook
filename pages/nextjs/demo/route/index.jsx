import { useRouter } from 'next/router'
const Post = props => {
  const router = useRouter()
  console.log('Router: ', router)
  console.log('Props: ', props)
  const { slug } = router.query
  return (
    <>
      <p>Slug: {slug}</p>
    </>
  )
}
export default Post
