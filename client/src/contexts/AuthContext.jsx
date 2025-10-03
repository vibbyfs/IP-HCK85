import { createContext, useMemo, useState } from "react";
import { getToken, setToken, clearToken } from "../utils/tokenStorage";
import { loginApi } from "../services/auth.api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => getToken());

  const login = async ({ email, password }) => {
    const data = await loginApi({ email, password });
    setToken(data.access_token);
    setTokenState(data.access_token);
    return data;
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
  };

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
}
