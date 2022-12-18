import axios from "axios"
export const  TOKEN_CYBERSOFT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMzE4ODAwfQ.j4z4TCOvHfc7Iq372RxnnLGogFR3Yf1bukUxTce5WTc';



export const http = axios.create({
    baseURL: 'https://elearningnew.cybersoft.edu.vn',
    timeout: 30000
})

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCyberSoft: TOKEN_CYBERSOFT,
    }
    return config;


}, err => {
    console.log(err)
    return Promise.reject(err);
})

