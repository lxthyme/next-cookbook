// export const config = { amp: true };
import { Observable } from 'rxjs'

const testMethod = () => {
  const observable = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    setTimeout(() => {
      subscriber.next(4)
      subscriber.complete()
    }, 1000)
  })

  console.log('just before subscribe')
  observable.subscribe({
    next(x) {
      console.log('got value ' + x)
    },
    error(err) {
      console.error('something wrong occurred: ' + err)
    },
    complete() {
      console.log('done')
    },
  })
  console.log('just after subscribe')
}
const Page = (props) => {
  const goTest = () => {
    testMethod()
  }
  return (
    <>
      <button onClick={goTest}>Test</button>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = 'Page'

export default Page
