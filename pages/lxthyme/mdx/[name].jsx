import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "@components/md/CustomLink";
import Layout from "@components/md/Layout";
// import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { mdxFileRootPath, allMdxFilePathList } from '@plugin/file';

import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("@components/md/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(mdxFileRootPath, `${params.name}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        // 生成目录结构
        remarkToc,
      ],
      rehypePlugins: [
        rehypeSlug, // 为标题添加锚点
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allMdxFilePathList
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((name) => ({ params: { name } }));
    console.log('-->paths: ', paths)
  return {
    paths,
    fallback: false,
  };
};
