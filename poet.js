const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("https://raw.githubusercontent.com/saturoxxgojo90-ux/Poetry-website-/main/db.json")
  .then(res => res.json())
  .then(data => {
    const poet = data.poets.find(p => p.id == id);
    if (poet) {
      document.getElementById("poetName").textContent = poet.name;

      const quotesDiv = document.getElementById("quotes");
      quotesDiv.innerHTML = ""; // clear first

      poet.quotes.forEach(q => {
        const p = document.createElement("p");

        // 🔥 Fix: show new lines inside quotes
        // works if your db.json has \n or \\n
        p.innerHTML = "❝ " + q.replace(/\\n/g, "<br>").replace(/\n/g, "<br>") + " ❞";

        quotesDiv.appendChild(p);
      });
    } else {
      document.getElementById("poetName").textContent = "Poet not found";
    }
  })
  .catch(err => {
    console.error("Error loading quotes:", err);
    document.getElementById("poetName").textContent = "Failed to load quotes";
  });

function goBack() {
  window.location.href = "index.html";
}
