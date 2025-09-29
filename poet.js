// Read query string from URL
const urlParams = new URLSearchParams(window.location.search);
const poetId = parseInt(urlParams.get("id")); // example: ?id=1

// Load poets data
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    const poet = data.poets.find(p => p.id === poetId);

    if (!poet) {
      document.getElementById("poetName").textContent = "Poet not found";
      return;
    }

    // Show poet name
    document.getElementById("poetName").textContent = poet.name;

    // Show quotes
    const quotesDiv = document.getElementById("quotes");
    poet.quotes.forEach(q => {
      const p = document.createElement("p");
      p.innerHTML = q.replace(/\\n/g, "<br>"); // handle line breaks
      quotesDiv.appendChild(p);
    });
  });

// Back button
function goBack() {
  window.location.href = "index.html";
}
