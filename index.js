// Poets Data (no need for db.json anymore)
const poets = [
  {
    id: 1,
    name: "Mirza Ghalib",
    quotes: [
      "Dil-e-nadaan tujhe hua kya hai\nAakhir is dard ki dawa kya hai",
      "Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle",
      "Ishq par zor nahin hai yeh woh aatish Ghalib\nJo lagaye na lage aur bujhaye na bane",
      "Aee Ghalib tum bhi kamal krte ho\nUmidain insan se laga kr shikwe khuda se karte ho",
      "koi nahi yaad krta wafa krne walon ko Ghalib\nMeri mano bewafa ho jao zamana yaad rakhe ga"
    ]
  },
  {
    id: 2,
    name: "Allama Iqbal",
    quotes: [
      "Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche, bata teri raza kya hai",
      "Sitaron se aage jahan aur bhi hain\nAbhi ishq ke imtihan aur bhi hain",
      "Tu shaheen hai, parwaz hai kaam tera\nTere saamne aasman aur bhi hain",
      "Dil ameer tha, muqadar gareeb tha\nHam buhat ache the, bura naseeb tha",
      "Amal se zindagi banti he jannat bhi, jahannum bhi\nYe khaaki apni fitrat mein na noori hai na naari he"
    ]
  }
];
id: 3,
    name: "Jaun Elia",
    quotes: [
      "Hamesha der kar deta hoon main\nHar kaam karne mein",
      "Ab ke hum bichhde to shaayad kabhi khwabon mein milein\nJis tarah sukhe hue phool kitaabon mein milein",
      "Main bhi bahut ajeeb hoon itna ajeeb hoon ke bas\nKhud ko tabaah kar liya aur malaal bhi nahin"
    ]
  },
  {
    id: 4,
    name: "Ahmad Faraz",
    quotes: [
      "Ranjish hi sahi dil hi dukhane ke liye aa\nAa phir se mujhe chhod ke jaane ke liye aa",
      "Ab ke hum bichhde to shaayad kabhi khwabon mein milein\nJis tarah sukhe hue phool kitaabon mein milein",
      "Tumhaare shehar ka mausam bada suhana lage\nMain ek shaam chura loon agar bura na lage"
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
