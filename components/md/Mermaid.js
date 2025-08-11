import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export default function Mermaid({ chart }) {
  const ref = useRef(null)

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false })
    mermaid.init(undefined, ref.current)
  }, [])

  return <div ref={ref} className="mermaid">{chart}</div>
}
