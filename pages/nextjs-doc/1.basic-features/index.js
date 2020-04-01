import Link from "next/link";
import withLayout from "../../../layout/withLayout";

const Page = () => (
  <div className="container">
    <Link href="/nextjs-doc/1.basic-features/1.getStaticProps">
      <a className="btn-x-blue">1.getStaticProps</a>
    </Link>
    <Link href="/nextjs-doc/1.basic-features/[id]" as="/nextjs-doc/1.basic-features/post-2">
      <a className="btn-x-blue">2.getStaticPaths</a>
    </Link>
    <Link href="/nextjs-doc/1.basic-features/3.getServerSideProps">
      <a className="btn-x-blue">3.getServerSideProps</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Page);
