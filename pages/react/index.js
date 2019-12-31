import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Link href="/react/2.advanced_guides" as="/react/2.advanced_guides">
        <a className="v-btn">Advanced Guides</a>
      </Link>
    </>
  )
}
export default Index
