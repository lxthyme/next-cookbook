// const fetcher = (url) => fetch(url).then((res) => res.json());
export default async function fetcher(...args) {
  const res = await fetch(...args)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
