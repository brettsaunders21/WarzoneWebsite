const functions = require('firebase-functions');
const firestore = require('firebase-firestore');

var db = firebase.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.newuser = functions.auth.user().onCreate((user) => {
    db.collection("users").doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        gameIDAdded: false
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
  });