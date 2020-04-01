import React from 'react'
// import { NextPage } from 'next'

// export default class FetchUA extends Component {
//   static async getInitialProps({req}) {
//     const ua = req ? req.headers['user-agent'] : navigator.userAgent

//     return {ua}
//   }
//   render() {
//     return (
//       <div>
//         Hello World!
//         <p>{this.props.ua}</p>
//       </div>
//     )
//   }
// }

// const Home: NextPage<{ userAgent: string}> = ({userAgent}) => (<>
//   <p>Hello world!</p>
//   <p>user agent: {userAgent}</p>
// </>)

const Home = ({userAgent}) => (<>
  <p>Hello world!</p>
  <p>user agent: {userAgent}</p>
</>)

Home.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return {userAgent}
}

export default Home;
