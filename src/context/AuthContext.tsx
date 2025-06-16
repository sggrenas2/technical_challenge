import { createContext, useState } from "react";
import type { AuthContextType } from "../types";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { client } from "../lib/axiosClient";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: (_: string, __: string) => new Promise((_) => null),
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await client.post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      });

      console.log(`Logging successful`);
      setIsAuthenticated(true);
      client.setToken(response.data.accessToken); // Set token in axios client
      navigate("/"); // Redirect to home page after login
    } catch (error: unknown) {
      console.log("🚀 ~ login ~ error:", error);
      return error.response.data.message;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    client.clearToken();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
