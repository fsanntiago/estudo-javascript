async function start() {
  const url = "https://api.github.com/users/fsanntiago";
  const response = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(response.repos_url).then((r) => r.json());
  console.log(userRepos);
}

start().catch((e) => console.log(e));
