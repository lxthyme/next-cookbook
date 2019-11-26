/// Basic Usage (Also does SSR)

import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./list'))

const Home = () => {
  return (
    <>
      <DynamicComponent />
      <p>Home Page is here!</p>
      <style jsx>{``}</style>
    </>
  )
}
export default Home
