export function debounce(f, wait) {
  let timer
  console.log(`${wait}: `, ...argument)
  return (...argument) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...argument)
    }, wait)
  }
}
