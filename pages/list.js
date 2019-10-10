import Link from 'next/link'
import Router from 'next/router'
import {useEffect} from 'react'

const List = () => {
  useEffect(() => {
    window.R = Router
    console.log('R: ', window.R)
    return () => {}
  }, [])
  useEffect(() => {
    Router.beforePopState(({url, as, options}) => {
      console.log('>>>url: ', url)
      console.log('>>>as: ', as)
      console.log('>>>options: ', options)
      if (as !== '/' && as !== '/other') {
        window.location.href = as
        return false
      }
      return true
    })
    return () => {}
  }, [])
  const list = Array.from({length: 100}, (item, idx) => idx + 1)
  const $list = list.map(t => (
    <Link key={t} scroll={t % 2 === 0} href={{pathname: '/about', query: {id: `${t}`}}}>
      <li>{t}</li>
    </Link>
  ))
  return (
    <>
      <p>
        Click <span onClick={() => Router.push('/about')}>here</span> to read more
      </p>
      <ul>{$list}</ul>
      <style jsx>{``}</style>
    </>
  )
}
export default List
