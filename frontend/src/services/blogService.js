import axios from "axios";

const BASE_URL = "http://localhost:8080/blog";

export const getLatest = (signal) => {
    return axios.get(`${BASE_URL}/latest`, {signal})
}