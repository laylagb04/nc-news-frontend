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

function updateVotes(article_id, num) {
  return api.patch(`/articles/${article_id}`, { inc_votes: num });
}

function postComment(articleID, newComment) {
  return api
    .post(`/articles/${articleID}/comments`, newComment)
    .then((response) => {
      return response.data.comment;
    });
}
function getUsers() {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
}

export {
  getArticles,
  getArticleById,
  getCommentsById,
  updateVotes,
  postComment,
  getUsers,
};
