fetch("https://raw.githubusercontent.com/saturoxxgojo90-ux/Poetry-website-/main/db.json")
  .then(res => res.json())
  .then(data => {
    const poetsDiv = document.getElementById("poets");
    poetsDiv.innerHTML = ""; // clear "Loading poets..."

    data.poets.forEach(poet => {
      const div = document.createElement("div");
      div.textContent = poet.name;
      div.style.cursor = "pointer";
      div.onclick = () => {
        window.location.href = `poet.html?id=${poet.id}`;
      };
      poetsDiv.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("poets").textContent = "❌ Failed to load poets";
    console.error(err);
  });
