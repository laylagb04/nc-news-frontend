import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-kxol.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then((response) => {
    return response;
  });
}

export { getArticles };
