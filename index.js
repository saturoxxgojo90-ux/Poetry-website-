const poetsDiv = document.getElementById("poets");

fetch("db.json")
  .then(res => res.json())
  .then(data => {
    poetsDiv.innerHTML = ""; // clear "Loading..."

    data.poets.forEach(poet => {
      // Create clickable poet name
      const link = document.createElement("a");
      link.href = `poet.html?name=${encodeURIComponent(poet.name)}`;
      link.textContent = poet.name;

      // Add this <a> into the poets div
      poetsDiv.appendChild(link);
    });
  })
  .catch(err => {
    console.error(err);
    poetsDiv.textContent = "Failed to load poets";
  });
