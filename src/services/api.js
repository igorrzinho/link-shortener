// chave
import axios from "axios";

export const key = "ea90382485d45e73a1137eece05bd21c25bc36f5";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
