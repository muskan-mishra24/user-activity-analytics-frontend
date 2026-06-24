import API from "../api/axios";

export const getDailyAnalytics = () =>
  API.get("/analytics/daily");

export const getUserAnalytics = () =>
  API.get("/analytics/users");

export const getStats = () =>
  API.get("/analytics/stats");