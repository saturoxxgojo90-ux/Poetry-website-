fetch("https://my-json-server.typicode.com/saturoxxgojo90-ux/Poetry-website-/poets")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("poets");
    container.innerHTML = ""; // clear "Loading..."
    data.forEach(poet => {
      const div = document.createElement("div");
      div.textContent = poet.name;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("poets").textContent = "Failed to load poets.";
    console.error(err);
  });
