// function Error({ statusCode }) {
//   return (
//     <p>
//       {statusCode
//         ? `An error ${statusCode} occurred on server`
//         : "An error occurred on client"}
//     </p>
//   );
// }

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

// export default Error;

import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

const Page = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const errorCode = res.statusCode > 200 ? res.statusCode : false
  const json = await res.json()

  return { errorCode, stars: json.stargazers_count }
}

export default Page
