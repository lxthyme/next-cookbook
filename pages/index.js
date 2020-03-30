import Link from "next/link";
import withLayout from "../layout/withLayout";

const Home = () => (
  <div className="container">
    <Link href="/apiQuote?author=123">
      <a className="btn-x-blue">apiQuote</a>
    </Link>
    <Link href="/nextjs">
      <a className="btn-x-blue">Nextjs learn demo</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Home);
