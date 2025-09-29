const poetsDiv = document.getElementById("poets");

fetch("db.json")
  .then(res => res.json())
  .then(data => {
    poetsDiv.innerHTML = "";
    data.poets.forEach(poet => {
      const link = document.createElement("a");
      link.href = `poet.html?name=${encodeURIComponent(poet.name)}`;
      link.textContent = poet.name;
      poetsDiv.appendChild(link);
    });
  })
  .catch(err => {
    poetsDiv.textContent = "Failed to load poets";
  });
