"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Role = "player" | "owner" | "worker" | null;

interface AuthContextType {
  role: Role;
  isLoggedIn: boolean;
  login: (code: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>(null);
  const router = useRouter();

  // In a real app, this would check localStorage or a cookie on mount
  useEffect(() => {
    const savedRole = localStorage.getItem("meda_role") as Role;
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const login = (code: string) => {
    let newRole: Role = null;
    if (code === "111111") newRole = "player";
    else if (code === "222222") newRole = "owner";
    else if (code === "333333") newRole = "worker";

    if (newRole) {
      setRole(newRole);
      localStorage.setItem("meda_role", newRole);
      return true;
    }
    return false;
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem("meda_role");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ role, isLoggedIn: !!role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
