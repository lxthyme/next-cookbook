import Link from 'next/link'
import { useRouter } from 'next/router'

// const Index = () => {
//   const pids = ['id1', 'id2', 'id3', 'id4', 'id5']
//   const $pids = pids.map(pid => (
//     <>
//       <Link key={pid} href="/post/[pid]" as={`/post/${pid}`}>
//         <a className="post-item">Post {pid}</a>
//       </Link>
//       <style jsx>{`
//         .post-item {
//           display: block;
//         }
//       `}</style>
//     </>
//   ))

//   return <>{$pids}</>
// }
// export default Index

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <p>My Blog Post: {slug}</p>
      <style jsx>{''}</style>
    </>
  )
}
export default Post
