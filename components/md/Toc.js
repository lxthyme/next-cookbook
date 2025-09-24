export default function Toc({ items }) {
  return (
    <nav>
      <h3>目录</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
