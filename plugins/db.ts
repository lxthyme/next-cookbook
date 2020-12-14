import mysql, { ResultSet } from 'serverless-mysql'

const db: mysql.ServerlessMysql = mysql({
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
        const result: ResultSet = await db
            .transaction()
            .query(queryString)
            .rollback((e) => {
                console.log('📌rollback...')
            })
            .commit()
        db.end()
        const json = JSON.stringify(result[0])
        console.log('📌Query result: ', json.slice(0, 200))
        // console.log('📌Query result: ', {
        //     type: typeof result,
        //     sql: result,
        //     values: result.values(),
        //     resultSetHeaderPacket: result.resultSetHeaderPacket,
        //     fieldPackets: result.fieldPackets,
        //     eofPackets: result.eofPackets,
        //     rows: result.rows,
        // })
        return result[0]
    } catch (err) {
        console.log('📌Query Error: ', err)
        throw err
    }
}
