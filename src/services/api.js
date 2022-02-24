import axios from "axios";

const api = axios.create({
    baseURL: "http://142.93.107.238/api/",
})

export default api;