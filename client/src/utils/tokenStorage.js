
const ACCESS_TOKEN_KEY = "access_token";

export function getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setToken(token) {
    return localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearToken() {
    return localStorage.removeItem(ACCESS_TOKEN_KEY);
}