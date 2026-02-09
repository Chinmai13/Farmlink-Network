protectPage();

document.getElementById("submit").onclick = () => {
  const review = {
    productId: JSON.parse(localStorage.getItem("product")).id,
    text: reviewText.value,
    userId: auth.currentUser.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("reviews").add(review)
    .then(() => alert("Feedback submitted"))
    .catch(err => alert(err.message));
};
