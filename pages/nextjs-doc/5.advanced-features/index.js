import Link from "next/link";
import withLayout from "../../../layout/withLayout";

const Page = () => (
  <div className="container">
    <Link href="/nextjs-doc/5.advanced-features/2.dynamic-import">
      <a className="btn-x-blue">2. Dynamic Import</a>
    </Link>
    <Link href="/nextjs-doc/5.advanced-features/5.amp-support">
      <a className="btn-x-blue">5. AMP Support</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Page);
