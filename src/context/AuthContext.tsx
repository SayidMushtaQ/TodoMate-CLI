import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps {
  user: User | null;
}
interface User {
  userName: string;
  email: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token] = useState<string | null>(localStorage.getItem("accessToken"));
  useEffect(() => {
    if (token) {
      fetch("/api/users/user", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user))
        .catch(() => setUser(null));
    }
  }, [token]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
export type { AuthContextProps };
