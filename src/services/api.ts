import axios from "axios";

export const api = axios.create({
  baseURL: "https://shape-api-project.herokuapp.com",
  timeout: 5000,
});
