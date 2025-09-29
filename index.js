// Load poets from db.json
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    const poetsDiv = document.getElementById("poets");
    poetsDiv.innerHTML = ""; // clear "Loading..."

    data.poets.forEach(poet => {
      const link = document.createElement("a");

      // 👇 This link will correctly open poet.html on GitHub Pages
      link.href = `poet.html?id=${poet.id}`;

      link.textContent = poet.name;
      poetsDiv.appendChild(link);
    });
  });
