import React from "react";
import Link from "next/link";
import Head from "next/head";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

interface LayoutProps {
  title?: string;
}

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: "1px solid #ddd"
// };

const Mobile: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
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
      {/* </div> */}
    </MuiThemeProvider>
  </>
);

export default Mobile;
