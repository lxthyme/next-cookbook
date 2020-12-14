import Link from "next/link";
import withLayout from "../../../layout/withLayout";

const Page = () => (
  <div className="container">
    <Link href="/nextjs-doc/9.api-reference/3.next-link">
      <a className="btn-x-blue">3. next/link</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Page);
