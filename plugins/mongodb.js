import mongoose from 'mongoose'
// const mongoose = require('mongoose')

const dbName = 'github'
const uri = `mongodb://localhost:27017/${dbName}`

/* creating connection object*/
// '0': 'disconnected',
// '1': 'connected',
// '2': 'connecting',
// '3': 'disconnecting',
// '99': 'uninitialized',
const connection = {
  isConnected: false,
}

const dbConnect = async () => {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return Promise.resolve(true)
  }
  /* connecting to our database */
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
  console.log('Connected successfully to server!')
  //   console.log('isConnected: ', connection.isConnected)
  //   console.log('db.collection: ', db.connections)
  //   console.log('db.collection[0]: ', db.connections[0])
  return Promise.resolve(connection.isConnected)
}

mongoose.connection.on('connected', (a, b) => {
  console.log('Mongoose Connected successfully to server!', { a, b })
})

mongoose.connection.on('error', (error, a, b) => {
  console.log('Mongoose connection error!', { error, a, b })
})

mongoose.connection.on('disconnected', (a, b) => {
  console.log('Mongoose connection disconnected!', { a, b })
})

export default dbConnect

// const MongoClient = require('mongodb').MongoClient
// const assert = require('assert')

// const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority'
// const uri = 'mongodb+srv://@<your-cluster-url>/test?retryWrites=true&w=majority'

// /* connecting to our database */
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// })
// client.connect((error) => {
//   assert.equal(null, error)
//   console.log('Connected successfully to server!')

//   const collection = client.db('ncov').collection('DXYArea')

//   client.close()
// })
