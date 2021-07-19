import axios from "axios";

const axiosClient = axios.create({
baseURL : "https://60f19f7d38ecdf0017b0fd5c.mockapi.io",
headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;