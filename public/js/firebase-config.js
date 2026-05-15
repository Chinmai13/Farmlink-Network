const firebaseConfig = {
  apiKey: "AIzaSyDVlCJQqbVIbWrg3jIynKiFsEB_MfY8SH8",
  authDomain: "first-project-c8a16.firebaseapp.com",
  projectId: "first-project-c8a16",
  storageBucket: "first-project-c8a16.firebasestorage.app",
  messagingSenderId: "65979514920",
  appId: "1:65979514920:web:2bc2ed40728719259ff51d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
