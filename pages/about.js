import { withRouter } from 'next/router'

const About = ({ router }) => {
  console.log('router: ', router)
  return (
    <>
      About {router.query.slug ? router.query.slug : 'Me'}
    </>
  )
}
export default withRouter(About)
