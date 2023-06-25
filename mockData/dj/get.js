export const mockGet = async (file, key) => {
  return (await import(`../../mockData/dj/${file}`))
}
