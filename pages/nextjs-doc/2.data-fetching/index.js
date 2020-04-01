import Link from "next/link";
import withLayout from "../../../layout/withLayout";

const Page = () => (
  <div className="container">
    <Link href="/nextjs-doc/2.data-fetching/1.getStaticProps">
      <a className="btn-x-blue">1.getStaticProps</a>
    </Link>
    <Link as="/nextjs-doc/2.data-fetching/post-2" href="/nextjs-doc/2.data-fetching/[id]">
      <a className="btn-x-blue">2.fallback: true</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Page);
