import {useRouter} from 'next/router'

import MobileLayout from '../../layout/Mobile'

const Post = () => {
  const router = useRouter()
  const {pid} = router.query
  return (
    <MobileLayout title={`Post - ${pid}`}>
      <p>Post: {pid}</p>
      </MobileLayout>
  )
}

export default Post
