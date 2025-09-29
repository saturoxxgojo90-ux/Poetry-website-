// Poets Data (no need for db.json anymore)
const poets = [
  {
    id: 1,
    name: "Mirza Ghalib",
    quotes: [
      "Dil-e-nadaan tujhe hua kya hai\nAakhir is dard ki dawa kya hai",
      "Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle",
      "Ishq par zor nahin hai yeh woh aatish Ghalib\nJo lagaye na lage aur bujhaye na bane",
      "Dil ameer tha, muqadar gareeb tha\nHam buhat ache the, bura naseeb tha"
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
  }
];

// Render Poets List
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("poetList");
  list.innerHTML = ""; // clear loading text
  poets.forEach(poet => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="poet.html?id=${poet.id}">${poet.name}</a>`;
    list.appendChild(li);
  });
});
