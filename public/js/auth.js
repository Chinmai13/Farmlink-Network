function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      return db.collection("users").doc(res.user.uid).set({
        email,
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => window.location.href = "index.html")
    .catch(err => alert(err.message));
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "index.html")
    .catch(err => alert(err.message));
}

function protectPage() {
  auth.onAuthStateChanged(user => {
    if (!user) window.location.href = "signin.html";
  });
}

function logout() {
  auth.signOut().then(() => window.location.href = "signin.html");
}
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      return db.collection("users").doc(res.user.uid).set({
        email,
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => window.location.href = "index.html")
    .catch(err => alert(err.message));
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "index.html")
    .catch(err => alert(err.message));
}

function protectPage() {
  auth.onAuthStateChanged(user => {
    if (!user) window.location.href = "signin.html";
  });
}

function logout() {
  auth.signOut().then(() => window.location.href = "signin.html");
}
