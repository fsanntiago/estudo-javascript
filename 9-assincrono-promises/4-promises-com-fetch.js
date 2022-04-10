fetch("https://api.github.com/users/fsanntiago") // buscar, pegar
  .then((res) => res.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((erro) => console.log(erro));
