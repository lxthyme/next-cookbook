import React from "react";
import MarkdownLayout from "../../components/markdown/markdownRender";
import Content from '../../mdx/game.mdx';
// import '@components/markdown/markdown.module.css';
import '@components/game/game.module.css';

const Page = props => {
  return (<>
      <style jsx global>{`
        #__next {
          padding: 20px;
        }
      `}</style>
      <style jsx>{`
        h4,
        h6 {
          padding: 0 20px;
        }
      `}</style>
      <MarkdownLayout>
        <Content />
      </MarkdownLayout>
    </>)
}

Page.displayName = "🌍 Page - LAYOUT"

export default Page
