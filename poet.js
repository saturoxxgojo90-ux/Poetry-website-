const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("https://raw.githubusercontent.com/saturoxxgojo90-ux/Poetry-website-/main/db.json")
  .then(res => res.json())
  .then(data => {
    const poet = data.poets.find(p => p.id == id);
    if (poet) {
      document.getElementById("poetName").textContent = poet.name;

      const quotesDiv = document.getElementById("quotes");
      poet.quotes.forEach(q => {
        const p = document.createElement("p");

        // 🔥 This makes \n turn into real new lines
        p.innerHTML = "❝ " + q.split("\n").join("<br>") + " ❞";

        quotesDiv.appendChild(p);
      });
    }
  });

function goBack() {
  window.location.href = "index.html";
}
