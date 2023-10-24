import axios from "axios";

const BASE_URL = "https://news-3fmi.onrender.com/api";

export const fetchArticles = () => {
  return axios
    .get(`${BASE_URL}/articles`)
    .then((response) => response.data.articles);
};

export const fetchArticleById = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then((response) => response.json())
    .then((data) => data);
};
