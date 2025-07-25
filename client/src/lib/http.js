import axios from "axios";

const http = axios.create({
    baseURL: "https://gc-01.vibbyfs.web.id",
})

export default http;