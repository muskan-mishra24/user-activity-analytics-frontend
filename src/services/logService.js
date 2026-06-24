import API from "../api/axios";

export const createLog = (action) =>
  API.post("/logs", { action });

export const getLogs = (page = 1, action = "") =>
  API.get(`/logs?page=${page}&action=${action}`);