// With Custom Loading Component
// import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DComponent = dynamic(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(import('./list'))
      }, 1000)
    ),
  { loading: () => <p>Loading...</p> }
)

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
