import http from "../config/axiosConfig";

export const getComments = (id, page) =>
  http.get(`article/${id}/comments/${page}`);
