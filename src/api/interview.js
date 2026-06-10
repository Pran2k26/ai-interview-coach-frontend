import axios from "./axios";

export const getHistory = () => {
  const token = localStorage.getItem("token");

  return axios.get("/interview/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};