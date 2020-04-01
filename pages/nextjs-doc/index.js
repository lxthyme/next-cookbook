import Link from "next/link";
import withLayout from "../../layout/withLayout";

const Page = () => (
  <div className="container">
    <Link href="/nextjs-doc/1.basic-features">
      <a className="btn-x-blue">1.Basic Features</a>
    </Link>
    <Link href="/nextjs-doc/2.data-fetching">
      <a className="btn-x-blue">2.Data Fetching</a>
    </Link>
    <Link href="/nextjs-doc/5.advanced-features">
      <a className="btn-x-blue">5.advanced-features</a>
    </Link>
    <Link href="/nextjs-doc/grid">
      <a className="btn-x-blue">Grid</a>
    </Link>
    <Link href="/nextjs-doc/9.api-reference">
      <a className="btn-x-blue">9. API Reference</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Page);
