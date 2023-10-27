import axios from "axios";

const BASE_URL = "https://news-3fmi.onrender.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchArticles = () => {
  return api.get("/articles").then((response) => response.data.articles);
};

export const fetchArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then((response) => response.data);
};

export const fetchCommentsByArticleId = (articleId) => {
  return api
    .get(`/articles/${articleId}/comments`)
    .then((response) => response.data);
};

export const patchVotes = (article_id, num) => {
  return api.patch(`articles/${article_id}`, { inc_votes: num });
};

export const getTopics =()=> {
  
    return api.get("topics").then((result) => {
      return result.data;
    });
  }