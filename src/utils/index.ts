import { publicKey, trelloToken } from "@/config";
import axios from "axios";

const baseUrl = "https://api.trello.com"

export const instance = axios.create({
    baseURL: baseUrl,
    params: {
        key: publicKey,
        token: trelloToken,
    }
});

// instance.interceptors.request.use((config) => {
//     const token = config

// });