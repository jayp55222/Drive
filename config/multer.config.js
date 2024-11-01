const multer = require('multer')
const firebaseStorage = require('multer-firebase-storage')
const firebase = require('./firebase.config')
const serviceAccount = require('../drive-87b16-firebase-adminsdk-w3rwd-b09cfb78b0.json')


const storage = firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName : 'drive-87b16.appspot.com',
    unique:true,
})

const upload = multer({
    storage: storage,
})


module.exports = upload