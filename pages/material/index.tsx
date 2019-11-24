import Link from "next/link";

import MobileLayout from "../../layout/Mobile";

export default () => (
  <>
    <MobileLayout title="Material">
      <Link
        href="nextjs-with-typescript/index"
        as="nextjs-with-typescript/index"
      >
        <a>nextjs-with-typescript</a>
      </Link>
      <Link href="layout/box" as="layout/box">
        <a>layout/box</a>
      </Link>
    </MobileLayout>
    <style jsx>{`
      a {
        display: block;
      }
    `}</style>
  </>
);
