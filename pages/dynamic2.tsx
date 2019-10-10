/// With named exports

import dynamic from 'next/dynamic'

export const Hello = () => <p>Hello!</p>

const DComponent = dynamic(() => import('./list')).then(t => t.Hello)

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
