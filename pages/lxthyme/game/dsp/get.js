const Blog = props => {

  const submitData = async e => {
    e.preventDefault()
    try {
      const result = await fetch(`http://0.0.0.0:3003/api/lxthyme/dsp/get`)
      console.log(await result.text())
    } catch (error) {
      console.error(error)
    }
  }
  return (<>
      <div className="page">
        <h1>My Blog</h1>
        <button onClick={submitData}>submitData</button>
        <main>
          {/* {props.feed.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))} */}
          {props.feed}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
</>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://0.0.0.0:3003/api/dj-api/kdj/address/recommend.html')
  const feed = await res.text()
  return {
    props: { feed },
  }
}

export default Blog
