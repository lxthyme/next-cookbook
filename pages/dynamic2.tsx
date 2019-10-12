/// With named exports

import dynamic from 'next/dynamic'

// const DComponent = dynamic(() =>
// import('./hello').then(t => t.Hello)
// )

const DComponent = dynamic(() => import('./hello').then(mod => mod.Hello))

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
