import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB62doiEtTlJ2K21xEaoCDPYQ1w-MdY4V0",
    authDomain: "expensify-65e7a.firebaseapp.com",
    databaseURL: "https://expensify-65e7a.firebaseio.com",
    projectId: "expensify-65e7a",
    storageBucket: "expensify-65e7a.appspot.com",
    messagingSenderId: "534978471291",
    appId: "1:534978471291:web:7da74cc8f4ee14f33d09de",
    measurementId: "G-NF2Z49V9WJ"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {firebase,database as default};


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
