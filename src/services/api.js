import axios from "axios";

const api = axios.create({
    baseURL: "https://intern.rahmetapp.kz/api/",
})

export default api;