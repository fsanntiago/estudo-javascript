import axios from "axios";

async function fetchRepos() {
  try {
    const user = await axios.get("https://api.github.com/users/fsanntiago");
    const repos = await axios.get(user.data.repos_url);
    repos.data.forEach((x) => {
      console.log(x.name);
    });
  } catch (e) {
    console.log(e);
  }
}

fetchRepos();
