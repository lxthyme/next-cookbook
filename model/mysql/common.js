import { Sequelize, DataTypes } from 'sequelize'

export const V_Number = DataTypes.INTEGER
export const V_String = DataTypes.STRING
export const V_Text = DataTypes.TEXT
export const V_Boolean = DataTypes.BOOLEAN

export const sequelize = new Sequelize('github', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logQueryParameters: false,
  define: {
    freezeTableName: true,
  },
  // logging: (...msg) => console.log('>>>👉', msg, '\n👈END'),
  logging: false
})

export const connectToSQL = () => {
  return new Promise((resolve, reject) => {
    console.log('start connecting...')
    return sequelize
      .authenticate()
      .then((res) => {
        console.log('Connection has been established successfully.', res)
        resolve(sequelize)
      })
      .catch((e) => {
        console.log('Unable to connect to the database: ', e)
        reject(e)
      })
  })
}
