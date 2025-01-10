import React from "react";
import MarkdownLayout from "../../components/markdown/markdownRender";
import Content from '@data/mdx/game.mdx';

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
