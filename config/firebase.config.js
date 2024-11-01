const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-87b16-firebase-adminsdk-w3rwd-b09cfb78b0.json')

const firebase = Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-87b16.appspot.com'
})

module.exports = Firebase