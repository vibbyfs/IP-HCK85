import http from "../lib/http"

export async function loginApi({ email, password }) {
    const { data } = await http.post("/auth/login", { email, password })
    return data
}

