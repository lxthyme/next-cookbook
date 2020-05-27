import dynamic from 'next/dynamic'

const DraftEditor = dynamic(() => import('../components/v-draft'), {ssr: false})

const Page = () => {
  return (
    <>
      <DraftEditor />
      <style jsx>{``}</style>
    </>
  )
}
export default Page
