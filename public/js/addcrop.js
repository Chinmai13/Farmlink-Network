protectPage();

auth.onAuthStateChanged(user => {
  db.collection("users").doc(user.uid).get().then(doc => {
    if (doc.data().role !== "farmer") {
      alert("Only farmers can add crops");
      window.location.href = "index.html";
    }
  });
});

document.getElementById("cropForm").addEventListener("submit", e => {
  e.preventDefault();

  const crop = {
    cropType: cropType.value,
    farmerName: farmerName.value,
    location: location.value,
    price: price.value,
    contact: contact.value,
    farmerId: auth.currentUser.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("products").add(crop)
    .then(() => window.location.href = "products.html")
    .catch(err => alert(err.message));
});
