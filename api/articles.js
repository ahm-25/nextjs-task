import http from "../config/axiosConfig";

export const getArticles = (page) => {
  return http.get(`/article/scopes/lat/get/${page}`);
};
export const getArticle = (identifier) => {
  return http.get(`/article/${identifier}`);
};
