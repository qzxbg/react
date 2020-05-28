import axios from "axios";

const http = axios.create({
    baseURL:"/manage"
})

export default http;