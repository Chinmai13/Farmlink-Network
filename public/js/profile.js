protectPage();

const product = JSON.parse(localStorage.getItem("product"));

document.getElementById("farmerName").innerText = product.farmerName;
document.getElementById("location").innerText = product.location;

db.collection("products")
  .where("farmerId", "==", product.farmerId)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      document.getElementById("crops").innerHTML +=
        `<p>${doc.data().cropType}</p>`;
    });
  });
