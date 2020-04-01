import dynamic from 'next/dynamic'

const DynamicImportWithDefaultExports = dynamic(() => import('./hello'))

const DynamicImportWithNamedExports = dynamic(() =>
  import('./hello2').then(m => m.Hello)
)

const DynamicImportWithCustomLoading = dynamic(
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('---')
        resolve(import('./hello'))
      }, 10000)
    })
  },
  {
    loading: () => <p>loading...</p>
  }
)

const DynamicImportWithNoSSR = dynamic(() => import('./hello'), { ssr: false })

const Home = () => {
  return (
    <>
      <div>
        <DynamicImportWithDefaultExports title="Default Export" />
        <DynamicImportWithNamedExports />
        <DynamicImportWithCustomLoading title="Custom Loading" />
        <DynamicImportWithNoSSR title="No SSR" />
        <p>Home Page is Here!</p>
      </div>
    </>
  )
}
export default Home
