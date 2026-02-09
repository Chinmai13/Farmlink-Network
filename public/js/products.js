protectPage();

const container = document.getElementById("products");

db.collection("products").get().then(snapshot => {
  snapshot.forEach(doc => {
    const p = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.cropType}</h3><p>${p.price} per kg</p>`;
    div.onclick = () => {
      localStorage.setItem("product", JSON.stringify({ id: doc.id, ...p }));
      window.location.href = "profile.html";
    };
    container.appendChild(div);
  });
});
