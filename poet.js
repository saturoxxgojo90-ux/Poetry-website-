const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("https://my-json-server.typicode.com/saturoxxgojo90-ux/Poetry-website-/db")
  .then(res => res.json())
  .then(data => {
    const poet = data.poets.find(p => p.id == id);
    if (poet) {
      document.getElementById("poetName").textContent = poet.name;

      const quotesDiv = document.getElementById("quotes");
      poet.quotes.forEach(q => {
        const p = document.createElement("p");
        p.textContent = "❝ " + q + " ❞";
        quotesDiv.appendChild(p);
      });
    }
  });

function goBack() {
  window.location.href = "index.html";
}
