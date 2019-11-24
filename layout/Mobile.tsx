import React from "react";
import Link from "next/link";
import Head from "next/head";

interface LayoutProps {
  title?: string;
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const Mobile: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimal-ui" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="about">
          <a>About</a>
        </Link>{" "}
        |{" "}
      </nav>
    </header>
    {children}
  </div>
);

export default Mobile;
