// Same Poets Data
const poets = [
  {
    id: 1,
    name: "Mirza Ghalib",
    quotes: [
      "Dil-e-nadaan tujhe hua kya hai\nAakhir is dard ki dawa kya hai",
      "Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle",
      "Ishq par zor nahin hai yeh woh aatish Ghalib\nJo lagaye na lage aur bujhaye na bane"
    ]
  },
  {
    id: 2,
    name: "Allama Iqbal",
    quotes: [
      "Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche, bata teri raza kya hai",
      "Sitaron se aage jahan aur bhi hain\nAbhi ishq ke imtihan aur bhi hain",
      "Tu shaheen hai, parwaz hai kaam tera\nTere saamne aasman aur bhi hain",
      "Dil ameer tha, muqadar gareeb tha\nHam buhat ache the, bura naseeb tha"
    ]
  }
];

// Read URL parameter (?id=)
function getPoetId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

// Show Poet & Quotes
document.addEventListener("DOMContentLoaded", () => {
  const poetId = getPoetId();
  const poet = poets.find(p => p.id === poetId);

  if (poet) {
    document.getElementById("poetName").textContent = poet.name;
    const quotesDiv = document.getElementById("quotes");
    quotesDiv.innerHTML = "";
    poet.quotes.forEach(q => {
      const p = document.createElement("p");
      // ✅ Fix: allow \n to become <br>
      p.innerHTML = q.replace(/\n/g, "<br>");
      quotesDiv.appendChild(p);
    });
  } else {
    document.getElementById("poetName").textContent = "Poet not found!";
  }
});

// Back Button
function goBack() {
  window.location.href = "index.html";
}
