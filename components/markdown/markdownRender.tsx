import React from 'react';
import styles from './markdown.module.css';

export default function MarkdownLayout({ children }: { children: React.ReactNode }) {
  return <div className="v-markdown-render">{children}</div>
}
