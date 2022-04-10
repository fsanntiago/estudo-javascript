import axios from "axios";

axios.get("https://api.github.com/users/fsanntiago").then((res) => {
  console.log(res.data);
});
