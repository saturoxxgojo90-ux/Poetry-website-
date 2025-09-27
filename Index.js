fetch("https://my-json-server.typicode.com/saturoxxgojo90-ux/Poetry-website-/poets")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += "<h2>Poets:</h2>";
    data.forEach(poet => {
      document.body.innerHTML += "<div>" + poet.name + "</div>";
    });
  })
  .catch(err => {
    document.body.innerHTML += "<p style='color:red'>Error: " + err + "</p>";
  });
