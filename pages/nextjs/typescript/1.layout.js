import Layout from "../../../layout/mobile3";
import { ReactElement } from "react";

const indexContent: ReactElement = (
  <>
    <p>Hello, Next.js</p>
    <style jsx>{``}</style>
  </>
);
export default function Index() {
  return <Layout content={indexContent} />;
}
