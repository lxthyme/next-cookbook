import ContentLayout from "../../../layout/contentLayout";

const indexContent = (
  <>
    <p>Hello, Next.js</p>
    <style jsx>{``}</style>
  </>
);
export default function Index() {
  return <ContentLayout content={indexContent} />;
}
