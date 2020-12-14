const UA = props => {
  return (
    <>
      <div>Hello World!</div>
      <div>{props.userAgent}</div>
    </>
  )
}

UA.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  return { userAgent }
}

export default UA
