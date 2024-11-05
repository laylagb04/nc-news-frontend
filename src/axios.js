import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-kxol.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then((response) => {
    return response;
  });
}

function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

function getCommentsById(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}
export { getArticles, getArticleById, getCommentsById };
