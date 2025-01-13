import fse from 'fs-extra'
import path from 'path'

export const getAllFilesPath = async (dir) => {
  const rootPath = process.cwd();
  const directoryPath = path.join(rootPath, dir)
  const result = []
  try {
    const files = await fse.readdir(directoryPath, { withFileTypes: true })
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const filePath = path.join(directoryPath, file.name)
      // const stat = await fse.stat(filePath)
      // if (stat.isDirectory()) {
      if (file.isDirectory()) {
      //   result.push(...(await getAllFiles(filePath)))
      } else {
        result.push(filePath)
      }
    }
  } catch (e) {
    console.log('-->getAllFiles - error: ', e);
  }
  console.log('-->getAllFiles: ', result);
  return result
}

export const getAllFilesName = async (dir) => {
  const result = await getAllFilesPath(dir)
  return result.slice(-1).split('/').slcie(-1)[0]
}
