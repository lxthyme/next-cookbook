export default async function loadDb() {
    //   const firebase = require('firebase/app')
    //   require('firebase/database')
    const firebase = await import('firebase/app')
    await import('firebase/database')

    try {
        firebase.initializeApp({
            databaseURL: 'https://hacker-news.firebaseio.com'
        })
    } catch (e) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(e.message)) {
            console.error('Firebase initialization error: ', e.stack)
        }
    }

    return firebase.database().ref('v0')
}
