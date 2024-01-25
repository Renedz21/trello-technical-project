import axios from "axios";

const baseUrl = "https://api.trello.com"

export const instance = axios.create({
    baseURL: baseUrl,
});

// instance.interceptors.request.use((config) => {
//     const token = config

// });