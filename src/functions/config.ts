import axios from "axios";

export function config() {
  axios.defaults.baseURL = process.env.BASE_URL;
}
