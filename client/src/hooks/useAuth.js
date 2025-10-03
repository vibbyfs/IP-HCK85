import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        return new Error("useAuth harus dipakai di dalam <AuthProvide>");
    }
    return ctx;
}

