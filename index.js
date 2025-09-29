// index.js

// Fetch poets from db.json
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    const poetList = document.getElementById("poetList");
    poetList.innerHTML = ""; // clear loading text

    data.poets.forEach(poet => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = poet.name;
      a.href = `poet.html?id=${poet.id}`;
      li.appendChild(a);
      poetList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error loading poets:", error);
    document.getElementById("poetList").innerHTML = "Failed to load poets.";
  });
