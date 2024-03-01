const sleepAsync = (millisec) => {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, millisec);
  })
}

const dateFormat = date => {
  const fmt = num => num.toString().padStart(2, '0')

  const year = date.getFullYear().toString()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${fmt(year)}-${fmt(month)}-${fmt(day)} ${fmt(hour)}:${fmt(minute)}:${fmt(second)}`
  // return now.toISOString().substring(0, 19).split('T')
}
const getCurrentDate = () => {
  const now = new Date()
  return dateFormat(now)
}

const getCurrentDateBefore = seconds => dateFormat(new Date(Date.now() - (seconds ?? 60) * 1000))

export { sleepAsync, dateFormat, getCurrentDate, getCurrentDateBefore }
