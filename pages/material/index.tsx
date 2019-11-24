import Link from "next/link";

import MobileLayout from "../../layout/Mobile";

export default () => (
  <MobileLayout title="Material">
    <h2>nextjs-with-typescript</h2>
    <Link
      href="nextjs-with-typescript/typography"
      as="nextjs-with-typescript/typography"
    >
      <a>Typography</a>
    </Link>
    <h2>Material UI</h2>
    <h4>layout</h4>
    <p>Test text</p>
    <Link href="layout/box" as="layout/box">
      <a>box</a>
    </Link>
    <style jsx>{`
      a {
        display: block;
      }
    `}</style>
  </MobileLayout>
);
