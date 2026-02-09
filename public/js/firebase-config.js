const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "first-project-c8a16.firebaseapp.com",
  projectId: "first-project-c8a16",
  storageBucket: "first-project-c8a16.appspot.com",
  messagingSenderId: "65979514920",
  appId: "1:65979514920:web:2bc2ed40728719259ff51d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
