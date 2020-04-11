import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };


//**************************************************************************************** */
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {

//         const expenses = []
//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('expenses').once('value').then((snapshot) => {

//     const expenses = []
//     database.ref().on('value', (snapshot) => {
//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })

//         })
//     })
//     console.log(expenses)
// })


// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key,snapshot.val())
// })

// database.ref('notes').push({
//     title:'Todo',
//     body:'javascript , python'
// });

// const firebaseNotes = {
//     notes: {
//         fgfgfgdg: {
//             body: "this is  note1"
//         },
//         fwfwfwfw: {
//             body: "this is id2"
//         }
//     }
// };

// const notes = [{
//     id: 1,
//     body: "this is  note1"
// },
// {
//     id: 2,
//     body: "this is id2"
// }];

// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val().name + ' is a ' + snapshot.val().job.title)
// }, (e) => {
//     console.log('Error fetching data', e)
// })


// database.ref().set({
//     name: 'Mikaeel Zaidi',
//     age: 28,
//     stressLevel: 7,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This operation failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Seattle'
// })
