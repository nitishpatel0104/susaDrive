const admin = require('firebase-admin')

// Initialize firebase admin SDK


var serviceAccount = require("./esigndocument-b9359-firebase-adminsdk-d4k7t-b21c2abb9b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://esigndocument-b9359.appspot.com'
})

// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
    bucket
}