// Poets Data (all poets here, no need for db.json)
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
                          
