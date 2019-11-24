/// With No SSR

import dynamic from 'next/dynamic'

const DComponent = dynamic(() => import('./list'), {
  ssr: false,
})

const Home = () => {
  return (
    <>
      <DComponent />
      <p>Home Page is here!</p>
      <style jsx>{``}</style>
    </>
  )
}
export default Home
