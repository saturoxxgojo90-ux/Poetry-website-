fetch("https://saturoxxgojo90-ux.github.io/Poetry-website-/db.json")
  .then(res => res.json())
  .then(data => {
    const poetsDiv = document.getElementById("poets");
    data.poets.forEach(poet => {
      const div = document.createElement("div");
      div.textContent = poet.name;
      div.style.cursor = "pointer";
      div.onclick = () => {
        window.location.href = `poet.html?id=${poet.id}`;
      };
      poetsDiv.appendChild(div);
    });
  });

