import { useRouter } from 'next/router'
import Mobile from '../../../../../layout/Mobile'
const Post = () => {
  const router = useRouter()
  console.log('router: ', router)
  return (<>
    <Mobile>
      <h4>{router.query.id}</h4>
      <p>This is the blog post content.</p>
    </Mobile>
    <style jsx>{''}</style>
  </>)
}
export default Post
