// Same Poets Data (must match index.js)
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
      "Tu shaheen hai, parwaz hai kaam tera\nTere saamne aasman aur bhi hain"
    ]
  },
  {
    id: 3,
    name: "Jaun Elia",
    quotes: [
      "Main bhi bahut ajeeb hoon, itna ajeeb hoon ki bas\nKhud ko tabaah kar liya aur malaal bhi nahin",
      "Uske baad uski mohabbat ka hua yeh anjaam\nMain ne khud ko bhula diya aur use bhi nahin yaad kiya",
      "Har ek baat pe kehte ho tum ki tu kya hai\nTumhi kaho ki yeh andaz-e-guftagu kya hai"
    ]
  },
  {
    id: 4,
    name: "Ahmad Faraz",
    quotes: [
      "Ranjish hi sahi dil hi dukhane ke liye aa\nAa phir se mujhe chhod ke jaane ke liye aa",
      "Suna hai log use aankh bhar ke dekhte hain\nSo uske shahr mein kuch din thehar ke dekhte hain",
      "Ab ke hum bichde to shayad kabhi khwabon mein milein\nJis tarah sukhe hue phool kitaabon mein milein"
    ]
  }
];

// Get Poet ID from URL
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
      p.innerHTML = q.replace(/\n/g, "<br>"); // ✅ show line breaks
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
