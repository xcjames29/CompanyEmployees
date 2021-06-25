import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCaNfFrAbmePXBLLuVCsudCfiLOXd9oXNY",
    authDomain: "company-and-employee-listing.firebaseapp.com",
    projectId: "company-and-employee-listing",
    storageBucket: "company-and-employee-listing.appspot.com",
    messagingSenderId: "432607160204",
    appId: "1:432607160204:web:fb66d003a8a7259c3198a9",
    measurementId: "G-31GT01SH85"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;