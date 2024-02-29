export const sleepAsync = (millisec) => {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, millisec);
  })
}
