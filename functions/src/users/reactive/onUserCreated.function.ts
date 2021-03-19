import * as functions from "firebase-functions";

exports.onUserCreated = functions.firestore
    .document("users/{userId}")
    .onCreate((userSnapShot, context) => {
        const data = userSnapShot.data();
        console.log(`User Created | send and email to ${data.email}`)
    })
