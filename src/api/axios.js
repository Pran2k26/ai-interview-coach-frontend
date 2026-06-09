// src/api/axios.js

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
  //baseURL:"https://ai-interview-coach-server-3ato.onrender.com"
});