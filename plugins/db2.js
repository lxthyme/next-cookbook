import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: 'localhost',
    database: 'github',
    user: 'root',
    password: 'password',
  },
})

export const query = async (queryString) => {
  console.log('📌queryString: ', queryString)
  try {
    const result = await db
      .transaction()
      .query(queryString)
      .rollback((e) => {
        console.log('📌rollback...')
      })
      .commit()
    db.end()
    const json = JSON.stringify(result)
    console.log('📌Query result: ', result)
    return result
  } catch (err) {
    console.log('📌Query Error: ', err)
  }
}

// export const query = (queryString) => {
//   console.log('📌queryString: ', queryString)
//   return new Promise((resolve, reject) => {
//       db.transaction()
//       .query(queryString)
//       .then((result) => {
//         console.log('📌📌Query result: ', result)
//         resolve(result)
//       })
//       .catch((err) => {
//         console.log('📌Query Error: ', err)
//         reject(err)
//       })
//       .finally(() => {
//         db.end()
//       })
//   })
// }
