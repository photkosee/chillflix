"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Something is wrong with AuthContextProvider");
  }
  return context;
};

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    if (ls) {
      ls.removeItem("token");
    }
  };

  useEffect(() => {
    if (ls && ls.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
