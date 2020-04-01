import dynamic from "next/dynamic";
import Header from "../../../components/nextjs/header";

const DHello = dynamic(() => import("../../../components/nextjs/hello"));

const DNamedHello = dynamic(() =>
  import("../../../components/nextjs/hello").then(t => t.Hello)
);

const DLoadingHello = dynamic(
  () =>
    new Promise((resolve, reject) => {
      console.log("1");
      setTimeout(() => {
        console.log("2");
        resolve(import("../../../components/nextjs/hello"));
      }, 3000);
      console.log("3");
    }).then(t => t),
  {
    loading: () => <p>Loading...</p>
  }
);

const DNoSSRHello = dynamic(() => import("../../../components/nextjs/hello"), {
  ssr: false
});

const Home = () => {
  return (
    <div>
      <Header />
      <DHello content="Basic usage" />
      <hr />
      <DNamedHello content="With named exports" />
      <hr />
      <DLoadingHello content="With custom loading component" />
      <hr />
      <DNoSSRHello content="With no SSR" />
      <hr />
      <p>Home page is here!</p>
    </div>
  );
};
export default Home;
