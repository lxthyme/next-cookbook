
const Error = (props) => {
  const { statusCode } = props
  console.log('>>>>>>ERROR: ', props)
  return <p>{statusCode ? `An error ${statusCode} occurred on server.` : 'An error occurred on client!'}</p>
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
