import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC7CrjRsOOKNvJABFTkOAgAD0yAIHULs0s",
    authDomain: "decals-hut-ca.firebaseapp.com",
    projectId: "decals-hut-ca",
    storageBucket: "decals-hut-ca.appspot.com",
    messagingSenderId: "783477049189",
    appId: "1:783477049189:web:60aaa46bc2498db0c8038c",
    measurementId: "G-GDBRM1W424"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;